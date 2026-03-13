import { useState, useEffect } from "react";
import { HERO_ROLES } from "../constants";

export default function LoopingSubtitle({ isMobile }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    const timers = [];
    const run = () => {
      setPhase("in");
      timers.push(setTimeout(() => setPhase("visible"), 320));
      timers.push(setTimeout(() => setPhase("out"), 2400));
      timers.push(
        setTimeout(() => {
          setPhase("hidden");
          setIdx((i) => (i + 1) % HERO_ROLES.length);
          timers.push(setTimeout(run, 160));
        }, 2720),
      );
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  const line = HERO_ROLES[idx];
  return (
    <div
      style={{
        height: "1.65em",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.7rem",
        opacity: 0,
        animation: "fadeUp 0.5s 0.15s ease forwards",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: isMobile ? "0.78rem" : "0.9rem",
          color: line.color,
          fontWeight: 500,
          letterSpacing: "0.03em",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5ch",
          opacity: phase === "visible" ? 1 : 0,
          transform:
            phase === "in"
              ? "translateY(14px)"
              : phase === "out"
                ? "translateY(-10px)"
                : "none",
          transition:
            "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <span style={{ opacity: 0.4, fontSize: "0.7em" }}>▸</span>
        {line.text}
      </span>
    </div>
  );
}
