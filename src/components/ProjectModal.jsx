import { useState, useEffect, useRef } from "react";
import TagBadge from "./TagBadge";

export default function ProjectModal({ project, onClose, dark, isDesktop }) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    if (modalRef.current) {
      modalRef.current.style.opacity = "1";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const copyGitLink = () => {
    navigator.clipboard?.writeText(project.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const surface = dark ? "#0f0f12" : "#ffffff";
  const textMain = dark ? "#e4e4e7" : "#18181b";
  const textSub = dark ? "#71717a" : "#52525b";
  const bord = dark ? "#27272a" : "#e4e4e7";
  const accent = "#f59e0b";

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        padding: "1.5rem",
        opacity: 0,
        transition: "opacity 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: surface,
          border: `1px solid ${bord}`,
          borderRadius: 24,
          maxWidth: 900,
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          boxShadow: dark
            ? "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,158,11,0.1) inset"
            : "0 40px 80px rgba(0,0,0,0.15)",
          animation: "modalEnter 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Gradient top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, #f59e0b, #34d399, #818cf8)",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: 10,
            background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
            border: `1px solid ${bord}`,
            color: textSub,
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = accent;
            e.currentTarget.style.color = accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = bord;
            e.currentTarget.style.color = textSub;
          }}
        >
          ✕
        </button>

        <div style={{ padding: "2.2rem" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 16,
                background: dark ? "#18181b" : "#f4f4f5",
                border: `1px solid ${bord}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              {project.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.65rem",
                    color: accent,
                    letterSpacing: "0.12em",
                    background: "rgba(245,158,11,0.1)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: 99,
                    border: `1px solid rgba(245,158,11,0.2)`,
                  }}
                >
                  {project.num} · {project.label}
                </span>
                {project.ongoing && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.65rem",
                      color: "#34d399",
                      background: "rgba(52,211,153,0.1)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 99,
                      border: `1px solid rgba(52,211,153,0.2)`,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#34d399",
                        animation: "pulse 1.6s infinite",
                      }}
                    />
                    IN PROGRESS
                  </span>
                )}
                {project.featured && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.65rem",
                      color: "#f59e0b",
                      background: "rgba(245,158,11,0.1)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: 99,
                      border: `1px solid rgba(245,158,11,0.2)`,
                    }}
                  >
                    FEATURED
                  </span>
                )}
              </div>
              <h2
                style={{
                  fontFamily: "'Instrument Serif','Georgia',serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: textMain,
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: "2rem" }}>
            <p
              style={{
                fontSize: "1rem",
                color: textSub,
                lineHeight: 1.8,
                background: dark
                  ? "rgba(255,255,255,0.02)"
                  : "rgba(0,0,0,0.02)",
                padding: "1.4rem",
                borderRadius: 12,
                border: `1px solid ${bord}`,
              }}
            >
              {project.longDesc || project.desc}
            </p>
          </div>

          {/* Architecture */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: accent,
                marginBottom: "1rem",
              }}
            >
              <span style={{ opacity: 0.5 }}> </span>ARCHITECTURE & STACK
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  project.architecture ? (isDesktop ? "1fr 1fr" : "1fr") : "1fr",
                gap: "1.5rem",
              }}
            >
              {project.architecture && (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {project.architecture.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.9rem",
                        color: textSub,
                      }}
                    >
                      <span style={{ color: accent, fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem" }}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {project.stack && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {project.stack.map((l) => (
                    <div
                      key={l.label}
                      style={{
                        padding: "0.6rem 1rem",
                        borderRadius: 8,
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.7rem",
                        background: l.bg,
                        color: l.color,
                        border: `1px solid ${l.border}`,
                      }}
                    >
                      {l.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: accent,
                marginBottom: "1rem",
              }}
            >
              <span style={{ opacity: 0.5 }}> </span>KEY ACHIEVEMENTS
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {project.achievements.map((a, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.8rem",
                    fontSize: "0.9rem",
                    color: textSub,
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20,
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: accent,
                      fontSize: "0.7rem",
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: tags + links */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
              {project.tags.map((t, i) => (
                <TagBadge key={i} {...t} />
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={copyGitLink}
                style={{
                  background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                  border: `1px solid ${bord}`,
                  borderRadius: 8,
                  padding: "0.5rem 0.8rem",
                  color: textSub,
                  fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = bord;
                  e.currentTarget.style.color = textSub;
                }}
              >
                {copied ? "✓ Copied!" : "Copy Link"}
              </button>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: accent,
                  border: "none",
                  borderRadius: 8,
                  padding: "0.5rem 1rem",
                  color: "#09090d",
                  fontSize: "0.8rem",
                  fontFamily: "'DM Sans',sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  textDecoration: "none",
                }}
              >
                View on GitHub <span style={{ fontSize: "0.9rem" }}>↗</span>
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "transparent",
                    border: `1px solid ${bord}`,
                    borderRadius: 8,
                    padding: "0.5rem 1rem",
                    color: textMain,
                    fontSize: "0.8rem",
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 500,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent;
                    e.currentTarget.style.color = accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = bord;
                    e.currentTarget.style.color = textMain;
                  }}
                >
                  Live Demo <span style={{ fontSize: "0.9rem" }}>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.96) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
