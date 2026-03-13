import { useState } from "react";
import { useInView } from "../hooks";

export default function SkillBar({ name, pct, dark }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      style={{ marginBottom: "1rem" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.26rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.82rem",
            fontWeight: 500,
            color: hov ? "#f59e0b" : dark ? "#d4d4d8" : "#3f3f46",
            transition: "color 0.2s",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.62rem",
            color: hov ? "#f59e0b" : dark ? "#52525b" : "#a1a1aa",
            transition: "color 0.2s",
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        style={{
          height: 3,
          borderRadius: 99,
          overflow: "hidden",
          background: dark ? "#27272a" : "#e4e4e7",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 99,
            background: hov
              ? "linear-gradient(90deg,#f59e0b,#fbbf24,#34d399)"
              : "linear-gradient(90deg,#d97706,#f59e0b)",
            width: inView ? `${pct}%` : "0%",
            transition:
              "width 1.2s cubic-bezier(0.16,1,0.3,1), background 0.3s",
            boxShadow: hov ? "0 0 8px rgba(245,158,11,0.5)" : "none",
          }}
        />
      </div>
    </div>
  );
}
