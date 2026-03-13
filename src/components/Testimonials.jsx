import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../constants";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Testimonials({ dark, isMobile }) {
  const textMain = dark ? "#e4e4e7" : "#18181b";
  const textSub = dark ? "#71717a" : "#52525b";
  const bord = dark ? "#27272a" : "#e4e4e7";
  const accent = "#f59e0b";
  const surface = dark ? "#0f0f12" : "#ffffff";

  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setAnimating(false);
    }, 380);
  };

  const next = () => goTo((activeIdx + 1) % TESTIMONIALS.length, "next");
  const prev = () => goTo((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, "prev");

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 13000);
    }
    return () => clearInterval(intervalRef.current);
  }, [activeIdx, isPaused]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(next, 13000);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    intervalRef.current = setInterval(next, 13000);
  };

  const item = TESTIMONIALS[activeIdx];
  const slideIn = direction === "next" ? "translateX(40px)" : "translateX(-40px)";

  return (
    <div
      style={{ position: "relative", marginTop: "3rem" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes testimonialIn {
          from { opacity: 0; transform: ${slideIn}; }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes testimonialOut {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: ${direction === "next" ? "translateX(-40px)" : "translateX(40px)"}; }
        }
        @keyframes quoteFloat {
          0%,100% { transform: translateY(0) rotate(-8deg); }
          50%      { transform: translateY(-6px) rotate(-8deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {isPaused && (
        <div
          style={{
            position: "absolute", top: -25, right: 0,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.65rem", color: accent,
            background: `${accent}10`,
            padding: "0.2rem 0.6rem",
            borderRadius: 99,
            border: `1px solid ${accent}30`,
            backdropFilter: "blur(4px)",
            zIndex: 10,
          }}
        >
          ⏸ Paused
        </div>
      )}

      <Reveal>
        <TiltCard>
          <div
            style={{
              background: surface,
              border: `1px solid ${bord}`,
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
              maxWidth: 780,
              margin: "0 auto",
              boxShadow: dark
                ? "0 32px 64px rgba(0,0,0,0.45)"
                : "0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${item.color}, ${accent}, ${item.color})`,
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
                transition: "background 0.6s",
              }}
            />
            <div
              style={{
                position: "absolute", top: "1.2rem", right: "1.8rem",
                fontFamily: "'Instrument Serif','Georgia',serif",
                fontSize: "7rem", color: `${item.color}14`,
                lineHeight: 1, pointerEvents: "none", userSelect: "none",
                animation: "quoteFloat 4s ease-in-out infinite",
                transition: "color 0.5s",
              }}
            >
              "
            </div>

            <div style={{ padding: isMobile ? "2rem 1.5rem 1.5rem" : "2.8rem 3rem 2rem" }}>
              <div
                key={activeIdx}
                style={{
                  animation: animating
                    ? `testimonialOut 0.38s ease forwards`
                    : `testimonialIn 0.42s cubic-bezier(0.16,1,0.3,1) forwards`,
                }}
              >
                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.6rem", letterSpacing: "0.14em",
                    textTransform: "uppercase", color: item.color,
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}30`,
                    padding: "0.25rem 0.7rem", borderRadius: 99,
                    marginBottom: "1.6rem",
                  }}
                >
                  <span>{item.icon}</span>
                  Recommendation
                </div>

                <p
                  style={{
                    fontFamily: "'Instrument Serif','Georgia',serif",
                    fontSize: isMobile ? "1.05rem" : "1.22rem",
                    fontStyle: "italic", color: textMain,
                    lineHeight: 1.75, marginBottom: "2rem",
                    position: "relative", zIndex: 1,
                  }}
                >
                  "{item.text}"
                </p>

                <div
                  style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    paddingTop: "1.4rem", borderTop: `1px solid ${bord}`,
                  }}
                >
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div
                      style={{
                        width: 52, height: 52, borderRadius: "50%",
                        padding: 2,
                        background: `linear-gradient(135deg, ${item.color}, ${accent})`,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%", height: "100%",
                          borderRadius: "50%", objectFit: "cover", display: "block",
                          background: dark ? "#18181b" : "#f4f4f5",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentNode.style.display = "flex";
                          e.target.parentNode.style.alignItems = "center";
                          e.target.parentNode.style.justifyContent = "center";
                          e.target.parentNode.innerHTML = `<span style="font-family:'JetBrains Mono',monospace;font-size:1rem;color:${item.color};font-weight:700;">${item.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>`;
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute", bottom: 2, right: 2,
                        width: 10, height: 10, borderRadius: "50%",
                        background: "#34d399",
                        border: `2px solid ${surface}`,
                        boxShadow: "0 0 6px #34d399",
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "0.92rem", fontWeight: 600, color: textMain,
                        marginBottom: "0.15rem",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.65rem", color: item.color,
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}
                    >
                      {item.role}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: "0.15rem", flexShrink: 0 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: accent, fontSize: "0.85rem",
                          filter: "drop-shadow(0 0 3px rgba(245,158,11,0.5))",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: isMobile ? "1rem 1.5rem" : "1rem 3rem",
                borderTop: `1px solid ${bord}`,
                background: dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => { goTo(i, i > activeIdx ? "next" : "prev"); resetTimer(); }}
                    style={{
                      width: i === activeIdx ? 22 : 7, height: 7,
                      borderRadius: 99, border: "none",
                      background: i === activeIdx ? item.color : dark ? "#3f3f46" : "#d4d4d8",
                      cursor: "pointer", padding: 0,
                      transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                      boxShadow: i === activeIdx ? `0 0 8px ${item.color}80` : "none",
                    }}
                  />
                ))}
              </div>

              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: textSub, letterSpacing: "0.08em" }}>
                {String(activeIdx + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>

              <div style={{ display: "flex", gap: "0.4rem" }}>
                {[{ label: "←", action: () => { prev(); resetTimer(); } }, { label: "→", action: () => { next(); resetTimer(); } }].map(({ label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      border: `1px solid ${bord}`,
                      background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                      color: textSub, fontSize: "0.9rem", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accent;
                      e.currentTarget.style.color = accent;
                      e.currentTarget.style.background = `rgba(245,158,11,0.06)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = bord;
                      e.currentTarget.style.color = textSub;
                      e.currentTarget.style.background = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>

      {/* Thumbnail strip */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", marginTop: "1.4rem", flexWrap: "wrap" }}>
        {TESTIMONIALS.map((t, i) => (
          <button
            key={i}
            onClick={() => { goTo(i, i > activeIdx ? "next" : "prev"); resetTimer(); }}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              padding: "0.45rem 0.9rem", borderRadius: 99,
              border: `1px solid ${i === activeIdx ? `${t.color}50` : bord}`,
              background: i === activeIdx ? `${t.color}10` : dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
              transform: i === activeIdx ? "translateY(-2px)" : "none",
              boxShadow: i === activeIdx ? `0 4px 16px ${t.color}25` : "none",
            }}
            onMouseEnter={(e) => {
              if (i !== activeIdx) {
                e.currentTarget.style.borderColor = `${t.color}40`;
                e.currentTarget.style.background = `${t.color}08`;
              }
            }}
            onMouseLeave={(e) => {
              if (i !== activeIdx) {
                e.currentTarget.style.borderColor = bord;
                e.currentTarget.style.background = dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
              }
            }}
          >
            <span style={{ fontSize: "0.8rem" }}>{t.icon}</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: i === activeIdx ? t.color : textSub, letterSpacing: "0.04em", transition: "color 0.3s", whiteSpace: "nowrap" }}>
              {t.name.split(" ")[0]}
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.55rem", color: textSub, opacity: 0.8, letterSpacing: "0.02em", whiteSpace: "nowrap", background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", padding: "0.1rem 0.4rem", borderRadius: 12, marginLeft: "0.2rem" }}>
              Recommendation
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
