export default function Footer({ dark, px, bg2, bord, textMain, textSub, textMut, accent }) {
  return (
    <footer
      style={{
        borderTop: `1px solid ${bord}`,
        padding: `1.6rem ${px}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        background: bg2,
        position: "relative",
        zIndex: 1,
        transition: "background 0.4s",
      }}
    >
      <span
        style={{
          fontFamily: "'Instrument Serif','Georgia',serif",
          fontStyle: "italic",
          fontSize: "1.05rem",
          color: textMain,
        }}
      >
        Arbind<span style={{ color: accent }}>.</span>
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.66rem",
          color: textSub,
        }}
      >
      
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.66rem",
          color: textMut,
        }}
      >
        © 2025 Arbind Das
      </span>
    </footer>
  );
}