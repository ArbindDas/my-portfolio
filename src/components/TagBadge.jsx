export default function TagBadge({ label, cls }) {
  const map = {
    java: ["rgba(245,158,11,0.1)", "#f59e0b", "rgba(245,158,11,0.2)"],
    react: ["rgba(56,189,248,0.1)", "#38bdf8", "rgba(56,189,248,0.2)"],
    db: ["rgba(52,211,153,0.1)", "#34d399", "rgba(52,211,153,0.2)"],
    other: ["rgba(129,140,248,0.1)", "#818cf8", "rgba(129,140,248,0.2)"],
    sec: ["rgba(251,113,133,0.1)", "#fb7185", "rgba(251,113,133,0.2)"],
  };
  const [bg, color, border] = map[cls] || map.other;
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: "0.59rem",
        padding: "0.18rem 0.52rem",
        borderRadius: 4,
        background: bg,
        color,
        border: `1px solid ${border}`,
        letterSpacing: "0.04em",
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}
