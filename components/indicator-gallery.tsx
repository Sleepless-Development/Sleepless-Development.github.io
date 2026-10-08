"use client";

import { useMemo, useState } from "react";
import "./indicator-gallery.css";

const IDS = [
  "atom",
  "bands",
  "bead",
  "blades",
  "bloom",
  "breathe",
  "counter",
  "dashes",
  "dial",
  "dots",
  "duel",
  "echo",
  "fangs",
  "frames",
  "gyro",
  "heartbeat",
  "inner-arc",
  "inner-arcs",
  "notch",
  "orbit",
  "outer-arc",
  "outer-arcs",
  "pie",
  "ping",
  "planet",
  "plus",
  "pulse",
  "ring",
  "ripple",
  "scythe",
  "shade",
  "sonar",
  "star",
  "stitch",
  "sweep",
  "tail",
  "trio",
  "wedge",
];

function rgbParam(hex: string) {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255].join(",");
}

export function IndicatorGallery() {
  const [accent, setAccent] = useState("#31a4fc");
  const [copied, setCopied] = useState<string | null>(null);
  const rgb = useMemo(() => rgbParam(accent), [accent]);

  async function copy(id: string) {
    try {
      await navigator.clipboard.writeText(id);
    } catch {
      const area = document.createElement("textarea");
      area.value = id;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }

    setCopied(id);
    window.setTimeout(() => {
      setCopied((current) => (current === id ? null : current));
    }, 700);
  }

  return (
    <div className="indicator-gallery not-prose">
      <div className="indicator-gallery-bar">
        <p>Click a name to copy the id.</p>
        <label>
          Accent
          <input
            type="color"
            value={accent}
            aria-label="Accent"
            onChange={(event) => setAccent(event.target.value)}
          />
        </label>
      </div>
      <div className="indicator-gallery-grid">
        {IDS.map((id) => (
          <article key={id}>
            <div className="indicator-gallery-stage">
              <div className="indicator-gallery-frame">
                <iframe
                  title={id}
                  src={`/interact/indicator.html?style=${id}&accent=${rgb}&preview=1`}
                />
              </div>
            </div>
            <button
              type="button"
              className={copied === id ? "is-copied" : undefined}
              onClick={() => copy(id)}
            >
              {copied === id ? "copied" : id}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
