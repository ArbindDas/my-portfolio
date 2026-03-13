import { useRef, useState } from "react";
import { PROJECTS } from "../constants";
import { Reveal, Label, H2, TagBadge, ProjectCard } from "../components";

function FeaturedProjectCard({ p, dark, isMobile, isDesktop, textMain, textSub, bord, onClick }) {
  const [hov, setHov] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const accent = "#f59e0b";

  return (
    <Reveal style={{ marginBottom: "0.9rem" }}>
      <div
        ref={ref}
        onClick={() => onClick(p)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={(e) => {
          const r = ref.current.getBoundingClientRect();
          setTilt({
            x: -((e.clientY - r.top) / r.height - 0.5) * 5,
            y: ((e.clientX - r.left) / r.width - 0.5) * 5,
          });
        }}
        style={{
          background: dark ? (hov ? "#0f0f14" : "#0c0c10") : (hov ? "#fff" : "#fafaf9"),
          border: `1px solid ${hov ? "rgba(245,158,11,0.4)" : bord}`,
          borderRadius: 16,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 185px" : "1fr",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          transform: hov
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-5px)`
            : "none",
          boxShadow: hov
            ? dark ? "0 40px 80px rgba(0,0,0,0.5)" : "0 40px 80px rgba(0,0,0,0.09)"
            : "none",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: hov
              ? "linear-gradient(90deg,#f59e0b,#fbbf24,#34d399,transparent)"
              : dark ? "#1c1c1f" : "#e4e4e7",
            transition: "background 0.4s",
          }}
        />

        <div style={{ padding: isMobile ? "1.5rem" : "2.2rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.15rem" }}>
            <div
              style={{
                width: 50, height: 50, borderRadius: 12, fontSize: "1.45rem",
                background: hov ? "rgba(245,158,11,0.11)" : dark ? "#18181b" : "#f4f4f5",
                border: `1px solid ${hov ? "rgba(245,158,11,0.28)" : bord}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
                transform: hov ? "rotate(-5deg) scale(1.05)" : "none",
              }}
            >
              {p.icon}
            </div>
            <div
              style={{
                display: "flex", alignItems: "center", gap: "0.32rem",
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem",
                color: hov ? accent : textSub,
                background: hov ? "rgba(245,158,11,0.07)" : dark ? "#18181b" : "#f4f4f5",
                border: `1px solid ${hov ? "rgba(245,158,11,0.28)" : bord}`,
                borderRadius: 7, padding: "0.36rem 0.72rem",
                textDecoration: "none", transition: "all 0.25s",
              }}
            >
              View Details
              <span style={{ transform: hov ? "rotate(-10deg)" : "none", display: "inline-block", transition: "transform 0.25s" }}>↗</span>
            </div>
          </div>

          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.56rem", color: accent, letterSpacing: "0.12em", opacity: 0.6, marginBottom: "0.38rem" }}>
            {p.num} · {p.label}
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif','Georgia',serif",
              fontSize: isMobile ? "1.3rem" : "1.65rem",
              fontWeight: 400, fontStyle: "italic",
              letterSpacing: "-0.02em", lineHeight: 1.2,
              marginBottom: "0.6rem", color: textMain,
            }}
          >
            {p.title}
          </div>
          <p style={{ fontSize: "0.89rem", color: textSub, lineHeight: 1.75, marginBottom: "1rem", maxWidth: 540 }}>
            {p.desc}
          </p>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.28rem", marginBottom: "1.1rem" }}>
            {p.achievements.slice(0, 2).map((a, i) => (
              <li key={i} style={{ fontSize: "0.81rem", color: textSub, display: "flex", gap: "0.42rem", lineHeight: 1.55, alignItems: "flex-start" }}>
                <span style={{ color: accent, fontFamily: "'JetBrains Mono',monospace", flexShrink: 0, opacity: 0.65, fontSize: "0.72rem", marginTop: "0.13em" }}>›</span>
                {a}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.26rem" }}>
            {p.tags.slice(0, 4).map((t, i) => (
              <TagBadge key={i} {...t} />
            ))}
            {p.tags.length > 4 && (
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.59rem", padding: "0.18rem 0.52rem", borderRadius: 4, background: dark ? "#18181b" : "#f4f4f5", color: textSub, border: `1px solid ${bord}` }}>
                +{p.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {isDesktop && (
          <div
            style={{
              borderLeft: `1px solid ${bord}`,
              background: "rgba(245,158,11,0.015)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem 1.3rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", width: "100%" }}>
              {p.stack.map((l) => (
                <div
                  key={l.label}
                  style={{
                    padding: "0.48rem 0.82rem", borderRadius: 7,
                    fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem",
                    fontWeight: 500, textAlign: "center",
                    background: l.bg, color: l.color, border: `1px solid ${l.border}`,
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
                >
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function ProjectsSection({ dark, isMobile, isTablet, isDesktop, px, bg2, textMain, textSub, bord, onProjectClick }) {
  const accent = "#f59e0b";

  return (
    <section
      id="projects"
      style={{
        padding: `6rem ${px}`,
        background: bg2,
        width: "100%",
        position: "relative",
        zIndex: 1,
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <Label>Work</Label>
          <H2>
            Featured <em style={{ color: accent }}>Projects</em>
          </H2>
          <p style={{ color: textSub, fontSize: "0.95rem", marginBottom: "3rem", maxWidth: 480 }}>
            Backend systems, microservices, REST APIs, and full-stack applications built with production-grade Java. Click any card for details.
          </p>
        </Reveal>

        <FeaturedProjectCard
          p={PROJECTS[0]}
          dark={dark}
          isMobile={isMobile}
          isDesktop={isDesktop}
          textMain={textMain}
          textSub={textSub}
          bord={bord}
          onClick={onProjectClick}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(auto-fill,minmax(295px,1fr))",
            gap: "0.9rem",
          }}
        >
          {PROJECTS.slice(1).map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              delay={i * 0.05}
              dark={dark}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
