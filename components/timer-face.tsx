export const TIMER_FRAMES = {
  pill: { w: 496, h: 172 },
  bar: { w: 496, h: 156 },
  chip: { w: 440, h: 120 },
  stack: { w: 250, h: 230 },
  dial: { w: 330, h: 340 },
  pie: { w: 330, h: 360 },
  donut: { w: 330, h: 300 },
  gauge: { w: 440, h: 320 },
  clock: { w: 330, h: 380 },
  dots: { w: 496, h: 156 },
  signal: { w: 496, h: 196 },
} as const;

export type TimerStyle = keyof typeof TIMER_FRAMES;

export type TimerColorStop = { at: number; color: string };

const BLEND_SHARE = 0.32;

function hexChannel(hex: string, offset: number) {
  return Number.parseInt(hex.slice(offset, offset + 2), 16);
}

function mixHex(from: string, to: string, amount: number) {
  const channel = (offset: number) =>
    Math.round(hexChannel(from, offset) + (hexChannel(to, offset) - hexChannel(from, offset)) * amount)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(1)}${channel(3)}${channel(5)}`;
}

function smoothstep(amount: number) {
  const t = Math.min(1, Math.max(0, amount));
  return t * t * (3 - 2 * t);
}

export function colorAt(progress: number, fallback: string, stops: TimerColorStop[] | undefined, blend: boolean) {
  if (!stops || stops.length === 0) return fallback;

  const ordered = [...stops].sort((a, b) => a.at - b.at);
  const p = Math.min(1, Math.max(0, progress));
  let index = 0;
  for (let i = 0; i < ordered.length; i += 1) {
    if (ordered[i].at <= p) index = i;
    else break;
  }

  const from = ordered[index];
  const to = ordered[index + 1];
  if (!to || !blend) return from.color;

  const span = to.at - from.at;
  if (span <= 0) return to.color;
  const start = to.at - span * BLEND_SHARE;
  if (p <= start) return from.color;
  return mixHex(from.color, to.color, smoothstep((p - start) / (to.at - start)));
}

export const TIMER_STYLES: { id: TimerStyle; name: string; detail: string }[] = [
  { id: "pill", name: "Pill", detail: "Label, time, and a segmented bar" },
  { id: "bar", name: "Bar", detail: "Label, time, and a continuous bar" },
  { id: "chip", name: "Chip", detail: "A compact label and clock" },
  { id: "stack", name: "Stack", detail: "A caption over a large value" },
  { id: "dial", name: "Dial", detail: "A segmented ring" },
  { id: "pie", name: "Pie", detail: "A filled wedge" },
  { id: "donut", name: "Donut", detail: "A ring with the time in the hole" },
  { id: "gauge", name: "Gauge", detail: "An arc with the time inside" },
  { id: "clock", name: "Clock", detail: "A tick ring" },
  { id: "dots", name: "Dots", detail: "Five dots that fill in" },
  { id: "signal", name: "Signal", detail: "Bars that step up" },
];

const LEFT_STYLES: Record<string, boolean> = { pill: true, bar: true };

function formatClock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatLeft(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  if (total >= 60) return formatClock(ms);
  return `${total}s left`;
}

export function readout(style: TimerStyle, mode: "timer" | "script", progress: number, durationMs: number) {
  if (mode === "script") return `${Math.round(progress * 100)}%`;
  const remaining = Math.max(0, (1 - progress) * durationMs);
  if (LEFT_STYLES[style]) return formatLeft(remaining);
  return formatClock(remaining);
}

function ringSegment(cx: number, cy: number, inner: number, outer: number, a0: number, a1: number) {
  const point = (radius: number, angle: number) => [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
  const [x0, y0] = point(outer, a0);
  const [x1, y1] = point(outer, a1);
  const [x2, y2] = point(inner, a1);
  const [x3, y3] = point(inner, a0);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${outer} ${outer} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)} A ${inner} ${inner} 0 ${large} 0 ${x3.toFixed(2)} ${y3.toFixed(2)} Z`;
}

function piePath(progress: number) {
  const amount = Math.min(1, Math.max(0, progress));
  if (amount <= 0) return "M 50 50";
  if (amount >= 0.999) return "M 50 4 A 46 46 0 1 1 49.99 4 A 46 46 0 1 1 50 4 Z";
  const angle = amount * Math.PI * 2 - Math.PI / 2;
  const x = 50 + 46 * Math.cos(angle);
  const y = 50 + 46 * Math.sin(angle);
  const large = amount > 0.5 ? 1 : 0;
  return `M 50 50 L 50 4 A 46 46 0 ${large} 1 ${x.toFixed(2)} ${y.toFixed(2)} Z`;
}

function arcPath(cx: number, cy: number, radius: number, a0: number, a1: number) {
  const x0 = cx + radius * Math.cos(a0);
  const y0 = cy + radius * Math.sin(a0);
  const x1 = cx + radius * Math.cos(a1);
  const y1 = cy + radius * Math.sin(a1);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${radius} ${radius} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

const GAUGE_ARC = arcPath(100, 82, 70, (150 * Math.PI) / 180, (390 * Math.PI) / 180);

const DIAL_PATHS = Array.from({ length: 12 }, (_, i) => {
  const sweep = (Math.PI * 2) / 12;
  const gap = 0.05;
  const a0 = -Math.PI / 2 + i * sweep + gap;
  const a1 = -Math.PI / 2 + (i + 1) * sweep - gap;
  return ringSegment(50, 50, 32, 46, a0, a1);
});

function round3(value: number) {
  return Math.round(value * 1000) / 1000;
}

const CLOCK_TICKS = Array.from({ length: 60 }, (_, i) => {
  const angle = -Math.PI / 2 + (i / 60) * Math.PI * 2;
  const major = i % 5 === 0;
  const inner = major ? 34 : 40;
  return {
    major,
    x1: round3(50 + inner * Math.cos(angle)),
    y1: round3(50 + inner * Math.sin(angle)),
    x2: round3(50 + 46 * Math.cos(angle)),
    y2: round3(50 + 46 * Math.sin(angle)),
  };
});

const DOTS = Array.from({ length: 5 }, (_, i) => 22 + i * 64);

const SIGNAL_BARS = [32, 48, 64, 80, 96].map((height, i) => ({
  x: i * 50,
  y: 96 - height,
  width: 34,
  height,
}));

function filledCount(progress: number, count: number) {
  if (progress <= 0) return 0;
  if (progress >= 1) return count;
  return Math.max(1, Math.round(progress * count));
}

export function TimerFace({
  style,
  label,
  showLabel = true,
  showValue = true,
  color,
  stops,
  blend,
  background,
  progress,
  mode,
  durationMs,
}: {
  style: TimerStyle;
  label: string;
  showLabel?: boolean;
  showValue?: boolean;
  color: string;
  stops?: TimerColorStop[];
  blend?: boolean;
  background: boolean;
  progress: number;
  mode: "timer" | "script";
  durationMs: number;
}) {
  const frame = TIMER_FRAMES[style];
  const fill = colorAt(progress, color, stops, Boolean(blend));
  const text = readout(style, mode, progress, durationMs);
  const segments = filledCount(progress, 10);
  const dialOn = filledCount(progress, DIAL_PATHS.length);
  const clockOn = filledCount(progress, CLOCK_TICKS.length);
  const marksOn = filledCount(progress, 5);
  const caption = showLabel && label ? label : "";

  return (
    <div
      className={`tf is-${style}${background ? "" : " is-plain"}${caption ? "" : " is-nolabel"}${showValue ? "" : " is-novalue"}`}
      style={{ width: frame.w, height: frame.h, ["--tm" as string]: fill }}
    >
      <div className="tf-plate">
        {caption ? <div className="tf-label">{caption}</div> : null}
        {showValue ? <div className="tf-value">{text}</div> : null}
        {style === "pill" ? (
          <div className="tf-segments">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className={i < segments ? "is-on" : undefined} />
            ))}
          </div>
        ) : null}
        {style === "bar" ? (
          <div className="tf-track">
            <div className="tf-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        ) : null}
        {style === "dial" ? (
          <svg className="tf-chart" viewBox="0 0 100 100">
            {DIAL_PATHS.map((d, i) => (
              <path key={i} d={d} className={i < dialOn ? "tf-seg is-on" : "tf-seg"} />
            ))}
          </svg>
        ) : null}
        {style === "pie" ? (
          <svg className="tf-chart" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" className="tf-pie-bg" />
            <path d={piePath(progress)} className="tf-wedge" />
          </svg>
        ) : null}
        {style === "donut" ? (
          <svg className="tf-chart" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="36" className="tf-donut-track" pathLength={100} transform="rotate(-90 50 50)" />
            <circle
              cx="50"
              cy="50"
              r="36"
              className="tf-donut-fill"
              pathLength={100}
              strokeDasharray="100"
              strokeDashoffset={100 - progress * 100}
              transform="rotate(-90 50 50)"
            />
          </svg>
        ) : null}
        {style === "gauge" ? (
          <svg className="tf-chart" viewBox="0 0 200 130">
            <path d={GAUGE_ARC} className="tf-arc" pathLength={100} />
            <path
              d={GAUGE_ARC}
              className="tf-arc-fill"
              pathLength={100}
              strokeDasharray="100"
              strokeDashoffset={100 - progress * 100}
            />
          </svg>
        ) : null}
        {style === "dots" ? (
          <svg className="tf-chart" viewBox="0 0 300 44">
            {DOTS.map((cx, i) => (
              <circle key={i} cx={cx} cy={22} r={22} className={i < marksOn ? "tf-dot is-on" : "tf-dot"} />
            ))}
          </svg>
        ) : null}
        {style === "signal" ? (
          <svg className="tf-chart" viewBox="0 0 234 96">
            {SIGNAL_BARS.map((bar, i) => (
              <rect
                key={i}
                x={bar.x}
                y={bar.y}
                width={bar.width}
                height={bar.height}
                className={i < marksOn ? "tf-bar is-on" : "tf-bar"}
              />
            ))}
          </svg>
        ) : null}
        {style === "clock" ? (
          <svg className="tf-chart" viewBox="0 0 100 100">
            {CLOCK_TICKS.map((tick, i) => (
              <line
                key={i}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                className={i < clockOn ? "tf-tick is-on" : tick.major ? "tf-tick is-major" : "tf-tick"}
              />
            ))}
          </svg>
        ) : null}
      </div>
    </div>
  );
}
