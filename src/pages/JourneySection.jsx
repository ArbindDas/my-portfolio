import { Reveal, Label, H2, JourneyTimeline, Testimonials } from "../components";

export default function JourneySection({ dark, isMobile, px, bg, bord, textSub }) {
  const accent = "#f59e0b";

  return (
    <section
      id="journey"
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
          <Label>My Journey</Label>
          <H2>
            Path to <em style={{ color: accent }}>Mastery</em>
          </H2>
          <p style={{ color: textSub, fontSize: "0.95rem", marginBottom: "2rem", maxWidth: 550 }}>
            From university graduate to senior developer — a timeline of growth, learning, and building production-scale applications.
          </p>
        </Reveal>

        <JourneyTimeline dark={dark} isMobile={isMobile} />

        {/* Stats summary */}
        <Reveal delay={0.3}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "4rem",
              padding: "2rem",
              background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
              borderRadius: 20,
              border: `1px solid ${bord}`,
            }}
          >
            {[
              ["3+", "Years Coding"],
              ["7+", "Projects Built"],
              ["8+", "Technologies"],
              ["∞", "Learning"],
            ].map(([value, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "'Instrument Serif','Georgia',serif",
                    fontSize: "2.5rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: accent,
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.7rem",
                    color: textSub,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal delay={0.2}>
          <div style={{ marginTop: "5rem" }}>
            <Label>Recommendations</Label>
            <H2>
              What People <em style={{ color: accent }}>Say</em>
            </H2>
            <p style={{ color: textSub, fontSize: "0.95rem", marginBottom: "2rem", maxWidth: 500 }}>
              Feedback from mentors and colleagues who've worked alongside me.
            </p>
            <Testimonials dark={dark} isMobile={isMobile} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
