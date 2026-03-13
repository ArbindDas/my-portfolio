import { NAV_LINKS } from "../constants";

export default function MobileMenu({ open, dark, textSub, accent, onClose }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: dark ? "rgba(5,5,8,0.97)" : "rgba(250,250,249,0.98)",
        backdropFilter: "blur(24px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          background: "none",
          border: "none",
          fontSize: "1.3rem",
          cursor: "pointer",
          color: textSub,
        }}
      >
        ✕
      </button>
      {NAV_LINKS.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={onClose}
          style={{
            fontFamily: "'Instrument Serif','Georgia',serif",
            fontSize: "2.4rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: textSub,
            textDecoration: "none",
            opacity: 0,
            animation: `fadeUp 0.45s ${i * 0.07}s ease forwards`,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = textSub)}
        >
          {id}
        </a>
      ))}
    </div>
  );
}
