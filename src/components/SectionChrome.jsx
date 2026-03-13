export function Label({ children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "0.9rem",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#f59e0b",
        }}
      >
        <span style={{ opacity: 0.4 }}> </span>
        {children}
      </span>
    </div>
  );
}

export function H2({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Instrument Serif','Georgia',serif",
        fontSize: "clamp(1.9rem,4.5vw,3.2rem)",
        fontWeight: 400,
        fontStyle: "italic",
        letterSpacing: "-0.025em",
        lineHeight: 1.08,
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}
