"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Check, Copy, Pause, Play, RotateCcw } from "lucide-react";
import { TIMER_FRAMES, TIMER_STYLES, TimerFace, type TimerColorStop, type TimerStyle } from "./timer-face";
import "./timer-builder.css";

const DEFAULT_COLOR = "#31a4fc";
const DEFAULT_DISTANCE = 12;
const SWATCHES = [
  { name: "Blue", value: "#31a4fc" },
  { name: "White", value: "#ffffff" },
  { name: "Amber", value: "#f5a623" },
  { name: "Red", value: "#b83e3e" },
];

function luaString(value: string) {
  return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}

type Breakpoint = { id: number; at: number; color: string; hex: string };

function buildSnippet(options: {
  style: TimerStyle;
  label: string;
  mode: "timer" | "script";
  seconds: number;
  scriptProgress: number;
  color: string;
  breakpoints: Breakpoint[];
  blend: boolean;
  background: boolean;
  showLabel: boolean;
  showValue: boolean;
  paused: boolean;
  distance: number;
}) {
  const lines = [
    "local id = exports.sleepless_waypoints:createTimer({",
    "    coords = vec3(0.0, 0.0, 0.0),",
    `    style = '${options.style}',`,
    `    label = ${luaString(options.label)},`,
  ];

  if (!options.showLabel) lines.push("    showLabel = false,");
  if (!options.showValue) lines.push("    showValue = false,");

  if (options.mode === "timer") {
    lines.push(`    duration = ${options.seconds * 1000},`);
  } else {
    lines.push(`    progress = ${options.scriptProgress.toFixed(2)},`);
  }

  if (options.breakpoints.length > 0) {
    const stops = [{ at: 0, color: options.color }, ...options.breakpoints];
    lines.push("    colors = {");
    for (const stop of stops) {
      lines.push(`        { at = ${stop.at.toFixed(2)}, color = '${stop.color}' },`);
    }
    lines.push("    },");
    if (options.blend) lines.push("    blend = true,");
  } else if (options.color !== DEFAULT_COLOR) {
    lines.push(`    color = '${options.color}',`);
  }
  if (!options.background) lines.push("    background = false,");
  if (options.paused) lines.push("    paused = true,");
  if (options.distance !== DEFAULT_DISTANCE) lines.push(`    drawDistance = ${options.distance.toFixed(1)},`);

  lines.push("})");
  lines.push("");
  if (options.mode === "timer") {
    lines.push("-- exports.sleepless_waypoints:updateTimer(id, { paused = true })");
  } else {
    lines.push("-- exports.sleepless_waypoints:updateTimer(id, { progress = 0.50 })");
  }
  lines.push("-- exports.sleepless_waypoints:removeTimer(id)");
  return lines.join("\n");
}

const KEYWORDS = new Set(["local", "exports", "vec3", "true", "false"]);

function highlight(line: string) {
  if (line.trimStart().startsWith("--")) return <span className="stb-cmt">{line}</span>;

  const nodes: ReactNode[] = [];
  const re = /('(?:\\'|[^'])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][\w.]*)|(\s+)|(.)/g;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = re.exec(line))) {
    const [full, str, num, ident, space, other] = match;
    if (str) nodes.push(<span key={index} className="stb-str">{str}</span>);
    else if (num) nodes.push(<span key={index} className="stb-num">{num}</span>);
    else if (ident) nodes.push(<span key={index} className={KEYWORDS.has(ident) ? "stb-keyw" : undefined}>{ident}</span>);
    else nodes.push(<span key={index}>{space || other || full}</span>);
    index += 1;
  }

  return nodes.length > 0 ? nodes : " ";
}

function ScaledFace({
  style,
  maxW,
  maxH,
  label,
  color,
  stops,
  blend,
  background,
  showLabel,
  showValue,
  progress,
  mode,
  durationMs,
}: {
  style: TimerStyle;
  maxW: number;
  maxH: number;
  label: string;
  color: string;
  stops?: TimerColorStop[];
  blend?: boolean;
  background: boolean;
  showLabel: boolean;
  showValue: boolean;
  progress: number;
  mode: "timer" | "script";
  durationMs: number;
}) {
  const frame = TIMER_FRAMES[style];
  const scale = Math.min(maxW / frame.w, maxH / frame.h);

  return (
    <div className="stb-scale" style={{ width: frame.w * scale, height: frame.h * scale }}>
      <div style={{ width: frame.w, height: frame.h, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <TimerFace
          style={style}
          label={label}
          color={color}
          stops={stops}
          blend={blend}
          background={background}
          showLabel={showLabel}
          showValue={showValue}
          progress={progress}
          mode={mode}
          durationMs={durationMs}
        />
      </div>
    </div>
  );
}

export function TimerBuilder() {
  const [style, setStyle] = useState<TimerStyle>("pill");
  const [label, setLabel] = useState("Cooking");
  const [mode, setMode] = useState<"timer" | "script">("timer");
  const [seconds, setSeconds] = useState(8);
  const [scriptProgress, setScriptProgress] = useState(0);
  const [background, setBackground] = useState(true);
  const [showLabel, setShowLabel] = useState(true);
  const [showValue, setShowValue] = useState(true);
  const [distance, setDistance] = useState(DEFAULT_DISTANCE);
  const [startPaused, setStartPaused] = useState(false);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [hex, setHex] = useState(DEFAULT_COLOR);
  const [breakpoints, setBreakpoints] = useState<Breakpoint[]>([]);
  const [blend, setBlend] = useState(false);
  const nextStopId = useRef(1);
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);
  const [stageWidth, setStageWidth] = useState(480);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      setElapsed(3200);
    }
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => {
      const width = stage.clientWidth - 36;
      setStageWidth(Math.max(180, Math.min(520, width)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      if (!document.hidden) setElapsed((value) => value + dt);
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  const durationMs = seconds * 1000;
  const previewProgress = mode === "script"
    ? (playing ? (elapsed % 8000) / 8000 : scriptProgress)
    : (elapsed % durationMs) / durationMs;

  const previewStops = breakpoints.length > 0
    ? [{ at: 0, color }, ...breakpoints.map((stop) => ({ at: stop.at, color: stop.color }))]
    : undefined;

  const snippet = useMemo(() => buildSnippet({
    style,
    label,
    mode,
    seconds,
    scriptProgress,
    color,
    breakpoints,
    blend,
    background,
    showLabel,
    showValue,
    paused: startPaused,
    distance,
  }), [style, label, mode, seconds, scriptProgress, color, breakpoints, blend, background, showLabel, showValue, startPaused, distance]);

  const detail = TIMER_STYLES.find((entry) => entry.id === style)?.detail ?? "";

  async function copySnippet() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  function applyHex(value: string) {
    const next = (value.startsWith("#") ? value : `#${value}`).slice(0, 7);
    setHex(next);
    if (/^#[0-9a-fA-F]{6}$/.test(next)) setColor(next.toLowerCase());
  }

  function addBreakpoint() {
    const id = nextStopId.current;
    nextStopId.current += 1;
    setBreakpoints((list) => {
      if (list.length >= 6) return list;
      const used = new Set(list.map((stop) => Math.round(stop.at * 100)));
      const preferred = [50, 75, 25, 90, 10, 60, 40, 80, 30, 70];
      let percent = preferred.find((step) => !used.has(step)) ?? 0;
      if (percent === 0) {
        for (let step = 1; step <= 100; step += 1) {
          if (!used.has(step)) {
            percent = step;
            break;
          }
        }
      }
      if (percent === 0) return list;
      const usedColors = new Set(list.map((stop) => stop.color));
      const nextColor = SWATCHES.find((swatch) => swatch.value !== color && !usedColors.has(swatch.value))?.value ?? "#f5a623";
      return [...list, { id, at: percent / 100, color: nextColor, hex: nextColor }].sort((a, b) => a.at - b.at);
    });
  }

  function setStopAt(id: number, percent: number) {
    const at = Math.min(100, Math.max(1, Math.round(percent))) / 100;
    setBreakpoints((list) => {
      if (list.some((stop) => stop.id !== id && Math.round(stop.at * 100) === Math.round(at * 100))) return list;
      return list.map((stop) => (stop.id === id ? { ...stop, at } : stop)).sort((a, b) => a.at - b.at);
    });
  }

  function setStopHex(id: number, value: string) {
    const next = (value.startsWith("#") ? value : `#${value}`).slice(0, 7);
    setBreakpoints((list) => list.map((stop) => {
      if (stop.id !== id) return stop;
      const colorOk = /^#[0-9a-fA-F]{6}$/.test(next);
      return { ...stop, hex: next, color: colorOk ? next.toLowerCase() : stop.color };
    }));
  }

  return (
    <div className="stb not-prose">
      <div className="stb-head">
        <div>
          <h2>Timer studio</h2>
          <p>Pick a style and set the options. The preview and the Lua stay together.</p>
        </div>
      </div>

      <div className="stb-tiles" role="group" aria-label="Timer styles">
        {TIMER_STYLES.map((entry) => (
          <button
            key={entry.id}
            type="button"
            aria-pressed={style === entry.id}
            className={style === entry.id ? "stb-tile is-selected" : "stb-tile"}
            onClick={() => setStyle(entry.id)}
          >
            <span className="stb-tile-stage">
              <ScaledFace
                style={entry.id}
                maxW={150}
                maxH={74}
                label={label || entry.name}
                color={color}
                stops={previewStops}
                blend={blend}
                background={background}
                showLabel={showLabel}
                showValue={showValue}
                progress={previewProgress}
                mode={mode}
                durationMs={durationMs}
              />
            </span>
            <span className="stb-tile-name">{entry.name}</span>
          </button>
        ))}
      </div>

      <div className="stb-stage" ref={stageRef}>
        <div className="stb-transport">
          <button type="button" className="stb-ghost" onClick={() => { setElapsed(0); setPlaying(true); }} aria-label="Restart preview">
            <RotateCcw size={15} />
          </button>
          <button type="button" className="stb-play" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause preview" : "Play preview"}>
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
        <ScaledFace
          style={style}
          maxW={stageWidth}
          maxH={210}
          label={label}
          color={color}
          stops={previewStops}
          blend={blend}
          background={background}
          showLabel={showLabel}
          showValue={showValue}
          progress={previewProgress}
          mode={mode}
          durationMs={durationMs}
        />
        <p className="stb-detail">{detail}. The preview loops. In game, a duration timer runs once.</p>
      </div>

      <div className="stb-controls">
        <label className="stb-field stb-grow">
          <span className="stb-k">Label</span>
          <input className="stb-input" value={label} maxLength={24} spellCheck={false} onChange={(event) => setLabel(event.target.value)} />
        </label>

        <div className="stb-field">
          <span className="stb-k">Show label</span>
          <div className="stb-seg" role="group" aria-label="Show label">
            <button type="button" aria-pressed={showLabel} onClick={() => setShowLabel(true)}>On</button>
            <button type="button" aria-pressed={!showLabel} onClick={() => setShowLabel(false)}>Off</button>
          </div>
        </div>

        <div className="stb-field">
          <span className="stb-k">{mode === "timer" ? "Show time" : "Show percent"}</span>
          <div className="stb-seg" role="group" aria-label={mode === "timer" ? "Show time" : "Show percent"}>
            <button type="button" aria-pressed={showValue} onClick={() => setShowValue(true)}>On</button>
            <button type="button" aria-pressed={!showValue} onClick={() => setShowValue(false)}>Off</button>
          </div>
        </div>

        <div className="stb-field">
          <span className="stb-k">Mode</span>
          <div className="stb-seg" role="group" aria-label="Mode">
            <button type="button" aria-pressed={mode === "timer"} onClick={() => setMode("timer")}>Timer</button>
            <button type="button" aria-pressed={mode === "script"} onClick={() => setMode("script")}>Script</button>
          </div>
        </div>

        {mode === "timer" ? (
          <Stepper label="Duration" value={seconds} min={1} max={999} suffix="sec" onChange={setSeconds} />
        ) : (
          <label className="stb-field stb-grow">
            <span className="stb-k">Progress</span>
            <input
              className="stb-range"
              type="range"
              min={0}
              max={100}
              value={Math.round(scriptProgress * 100)}
              aria-valuetext={`${Math.round(scriptProgress * 100)} percent`}
              onChange={(event) => {
                setPlaying(false);
                setScriptProgress(Number(event.target.value) / 100);
              }}
            />
          </label>
        )}

        <div className="stb-field">
          <span className="stb-k">Plate</span>
          <div className="stb-seg" role="group" aria-label="Plate">
            <button type="button" aria-pressed={background} onClick={() => setBackground(true)}>On</button>
            <button type="button" aria-pressed={!background} onClick={() => setBackground(false)}>Off</button>
          </div>
        </div>

        <Stepper label="Distance" value={distance} min={2} max={40} suffix="m" onChange={setDistance} />

        <div className="stb-field">
          <span className="stb-k">Start paused</span>
          <div className="stb-seg" role="group" aria-label="Start paused">
            <button type="button" aria-pressed={!startPaused} onClick={() => setStartPaused(false)}>Off</button>
            <button type="button" aria-pressed={startPaused} onClick={() => setStartPaused(true)}>On</button>
          </div>
        </div>

        <div className="stb-field stb-grow">
          <span className="stb-k">Colour</span>
          <div className="stb-swatches">
            {SWATCHES.map((swatch) => (
              <button
                key={swatch.value}
                type="button"
                className={color === swatch.value ? "stb-swatch is-selected" : "stb-swatch"}
                style={{ background: swatch.value }}
                aria-label={swatch.name}
                aria-pressed={color === swatch.value}
                onClick={() => {
                  setColor(swatch.value);
                  setHex(swatch.value);
                }}
              />
            ))}
            <input
              className="stb-hex"
              value={hex}
              spellCheck={false}
              aria-label="Hex colour"
              onChange={(event) => applyHex(event.target.value)}
              onBlur={() => setHex(color)}
            />
          </div>
        </div>

        <div className="stb-field stb-grow">
          <span className="stb-k">Breakpoints</span>
          <p className="stb-hint">The fill keeps the starting colour until progress reaches a stop. Smooth eases into the next colour on the way in. Hard switches at the stop.</p>
          <div className="stb-stops">
            {breakpoints.map((stop) => (
              <div className="stb-stop" key={stop.id}>
                <Stepper
                  label={`Stop ${Math.round(stop.at * 100)}`}
                  value={Math.round(stop.at * 100)}
                  min={1}
                  max={100}
                  suffix="%"
                  onChange={(value) => setStopAt(stop.id, value)}
                />
                <div className="stb-swatches">
                  {SWATCHES.map((swatch) => (
                    <button
                      key={swatch.value}
                      type="button"
                      className={stop.color === swatch.value ? "stb-swatch is-selected" : "stb-swatch"}
                      style={{ background: swatch.value }}
                      aria-label={swatch.name}
                      aria-pressed={stop.color === swatch.value}
                      onClick={() => setBreakpoints((list) => list.map((item) => (
                        item.id === stop.id ? { ...item, color: swatch.value, hex: swatch.value } : item
                      )))}
                    />
                  ))}
                  <input
                    className="stb-hex"
                    value={stop.hex}
                    spellCheck={false}
                    aria-label={`Hex colour at ${Math.round(stop.at * 100)} percent`}
                    onChange={(event) => setStopHex(stop.id, event.target.value)}
                    onBlur={() => setBreakpoints((list) => list.map((item) => (
                      item.id === stop.id ? { ...item, hex: item.color } : item
                    )))}
                  />
                </div>
                <button
                  type="button"
                  className="stb-remove"
                  onClick={() => setBreakpoints((list) => list.filter((item) => item.id !== stop.id))}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="stb-stop-actions">
              {breakpoints.length < 6 ? (
                <button type="button" className="stb-add" onClick={addBreakpoint}>Add breakpoint</button>
              ) : null}
              {breakpoints.length > 0 ? (
                <div className="stb-seg" role="group" aria-label="Blend">
                  <button type="button" aria-pressed={!blend} onClick={() => setBlend(false)}>Hard</button>
                  <button type="button" aria-pressed={blend} onClick={() => setBlend(true)}>Smooth</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="stb-codewrap">
        <div className="stb-codehead">
          <span>client.lua</span>
          <button type="button" className="stb-copy" onClick={copySnippet}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Copied" : "Copy Lua"}
          </button>
        </div>
        <pre className="stb-code" tabIndex={0}>
          {snippet.split("\n").map((line, index) => (
            <div key={index}>{highlight(line)}</div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function Stepper({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="stb-field">
      <span className="stb-k">{label}</span>
      <div className="stb-step">
        <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(min, value - 1))}>−</button>
        <div className="stb-step-value">
          <input
            inputMode="numeric"
            aria-label={label}
            value={value}
            onChange={(event) => {
              const next = Number(event.target.value);
              if (Number.isFinite(next)) onChange(Math.min(max, Math.max(min, Math.round(next))));
            }}
          />
          <span>{suffix}</span>
        </div>
        <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(Math.min(max, value + 1))}>+</button>
      </div>
    </div>
  );
}
