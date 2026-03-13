import { SKILLS } from "../constants";
import { Reveal, Label, H2, TiltCard, SkillBar } from "../components";

export default function SkillsSection({ dark, isMobile, isTablet, px, bg, surface, textMain, textSub, bord }) {
  const accent = "#f59e0b";

  return (
    <section
      id="skills"
      style={{
        padding: `6rem ${px}`,
        background: bg,
        width: "100%",
        position: "relative",
        zIndex: 1,
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <Label>Tech Stack</Label>
          <H2>
            Skills & <em style={{ color: accent }}>Expertise</em>
          </H2>
          <p style={{ color: textSub, fontSize: "0.95rem", marginBottom: "3rem", maxWidth: 450 }}>
            A full-stack skill set anchored in Java, extending to modern DevOps and frontend tooling.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)",
            gap: "0.9rem",
          }}
        >
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.07}>
              <TiltCard style={{ height: "100%", borderRadius: 12 }}>
                <div
                  style={{
                    background: cat.featured
                      ? dark
                        ? "linear-gradient(145deg,#101013,rgba(245,158,11,0.038))"
                        : "linear-gradient(145deg,#fff,rgba(245,158,11,0.028))"
                      : surface,
                    border: `1px solid ${cat.featured ? "rgba(245,158,11,0.2)" : bord}`,
                    borderRadius: 12,
                    padding: "1.3rem",
                    height: "100%",
                    transition: "border-color 0.3s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(245,158,11,0.32)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = cat.featured
                      ? "rgba(245,158,11,0.2)"
                      : bord)
                  }
                >
                  {cat.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0, left: 0, right: 0, height: 1,
                        background: "linear-gradient(90deg,#f59e0b,#fbbf24,transparent)",
                      }}
                    />
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{cat.icon}</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.88rem", color: textMain }}>
                      {cat.title}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.52rem",
                        background: "rgba(245,158,11,0.07)",
                        color: accent,
                        border: "1px solid rgba(245,158,11,0.16)",
                        padding: "0.1rem 0.42rem",
                        borderRadius: 99,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {cat.badge}
                    </span>
                  </div>

                  {cat.type === "bars" ? (
                    cat.items.map((it) => (
                      <SkillBar key={it.name} {...it} dark={dark} />
                    ))
                  ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.32rem" }}>
                      {cat.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'JetBrains Mono',monospace",
                            fontSize: "0.64rem",
                            padding: "0.2rem 0.62rem",
                            borderRadius: 99,
                            background: dark ? "#18181b" : "#f4f4f5",
                            border: "1px solid transparent",
                            color: textSub,
                            letterSpacing: "0.02em",
                            cursor: "default",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = accent;
                            e.currentTarget.style.color = accent;
                            e.currentTarget.style.background = "rgba(245,158,11,0.046)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "transparent";
                            e.currentTarget.style.color = textSub;
                            e.currentTarget.style.background = dark ? "#18181b" : "#f4f4f5";
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
