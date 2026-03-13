import { useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import TagBadge from "./TagBadge";

export default function ProjectCard({ project: p, delay, dark, onClick }) {
  const [hov, setHov] = useState(false);
  const textMain = dark ? "#e4e4e7" : "#18181b";
  const textSub = dark ? "#71717a" : "#52525b";
  const bord = dark ? "#27272a" : "#e4e4e7";

  return (
    <Reveal delay={delay}>
      <TiltCard style={{ height: "100%", borderRadius: 13, cursor: "pointer" }}>
        <div
          onClick={() => onClick(p)}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            background: dark ? (hov ? "#111115" : "#0f0f12") : (hov ? "#fff" : "#fafaf9"),
            border: `1px solid ${hov ? "rgba(245,158,11,0.35)" : bord}`,
            borderRadius: 13,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
            boxShadow: hov
              ? dark ? "0 24px 48px rgba(0,0,0,0.45)" : "0 24px 48px rgba(0,0,0,0.09)"
              : "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, height: 1,
              background: hov ? "linear-gradient(90deg,#f59e0b,#fbbf24,transparent)" : "transparent",
              transition: "background 0.3s",
              zIndex: 2,
            }}
          />

          {p.ongoing && (
            <div
              style={{
                position: "absolute",
                top: 12, right: 12, zIndex: 3,
                background: "rgba(245,158,11,0.09)",
                border: "1px solid rgba(245,158,11,0.25)",
                borderRadius: 99,
                padding: "0.14rem 0.52rem",
                display: "flex",
                alignItems: "center",
                gap: "0.32rem",
              }}
            >
              <span
                style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#f59e0b",
                  animation: "pulse 1.6s infinite",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.52rem",
                  color: "#f59e0b",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                IN PROGRESS
              </span>
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "1.35rem 1.35rem 0",
            }}
          >
            <div
              style={{
                width: 44, height: 44, borderRadius: 10, fontSize: "1.2rem",
                background: hov ? "rgba(245,158,11,0.11)" : dark ? "#18181b" : "#f4f4f5",
                border: `1px solid ${hov ? "rgba(245,158,11,0.28)" : bord}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.25s",
                transform: hov ? "rotate(-5deg) scale(1.07)" : "none",
              }}
            >
              {p.icon}
            </div>
            <div
              style={{
                width: 30, height: 30, borderRadius: 7,
                background: hov ? "rgba(245,158,11,0.09)" : dark ? "#18181b" : "#f4f4f5",
                border: `1px solid ${hov ? "rgba(245,158,11,0.28)" : bord}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none",
                color: hov ? "#f59e0b" : textSub,
                fontSize: "0.78rem",
                transition: "all 0.2s",
                transform: hov ? "rotate(-8deg)" : "none",
              }}
            >
              ↗
            </div>
          </div>

          <div style={{ padding: "0.8rem 1.35rem", flex: 1 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.56rem",
                color: "#f59e0b",
                letterSpacing: "0.12em",
                opacity: 0.6,
                marginBottom: "0.3rem",
              }}
            >
              {p.num} · {p.label}
            </div>
            <div
              style={{
                fontFamily: "'Instrument Serif','Georgia',serif",
                fontSize: "1.08rem",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.32,
                marginBottom: "0.5rem",
                color: textMain,
              }}
            >
              {p.title}
            </div>
            <p style={{ fontSize: "0.79rem", color: textSub, lineHeight: 1.7, marginBottom: "0.8rem" }}>
              {p.desc}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.27rem" }}>
              {p.achievements.slice(0, 2).map((a, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.75rem", color: textSub,
                    display: "flex", gap: "0.42rem",
                    lineHeight: 1.5, alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#f59e0b",
                      fontFamily: "'JetBrains Mono',monospace",
                      flexShrink: 0, opacity: 0.65,
                      fontSize: "0.68rem", marginTop: "0.12em",
                    }}
                  >
                    ›
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: "0 1.35rem 1.35rem", display: "flex", flexWrap: "wrap", gap: "0.26rem" }}>
            {p.tags.slice(0, 3).map((t, i) => (
              <TagBadge key={i} {...t} />
            ))}
            {p.tags.length > 3 && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.59rem",
                  padding: "0.18rem 0.52rem",
                  borderRadius: 4,
                  background: dark ? "#18181b" : "#f4f4f5",
                  color: textSub,
                  border: `1px solid ${bord}`,
                }}
              >
                +{p.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}
