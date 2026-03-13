import { Reveal, Label, H2, CodeBlock } from "../components";

export default function AboutSection({ dark, isDesktop, px, bg2, surface, textMain, textSub, bord }) {
  const accent = "#f59e0b";

  return (
    <section
      id="about"
      style={{
        padding: `6rem ${px}`,
        background: bg2,
        width: "100%",
        position: "relative",
        zIndex: 1,
        transition: "background 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
          gap: isDesktop ? "5rem" : "3rem",
          alignItems: "center",
        }}
      >
        <Reveal from="left">
          <Label>About Me</Label>
          <H2>
            Backends That <em style={{ color: accent }}>Scale</em>
          </H2>
          <p style={{ color: textSub, lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.95rem" }}>
            I'm a{" "}
            <strong style={{ color: textMain, fontWeight: 600 }}>Java Backend Developer</strong>{" "}
            with deep expertise across the Java ecosystem — including Collections, multithreading, JVM internals, and modern Java features.
          </p>
          <p style={{ color: textSub, lineHeight: 1.85, marginBottom: "1rem", fontSize: "0.95rem" }}>
            I architect RESTful APIs with <strong style={{ color: accent }}>Spring Boot</strong>, secure them with{" "}
            <strong style={{ color: accent }}>JWT/OAuth2</strong>, optimize with <strong style={{ color: accent }}>Redis</strong>,
            stream events with <strong style={{ color: accent }}>Kafka</strong>, and ship full-stack apps with{" "}
            <strong style={{ color: accent }}>React</strong>.
          </p>
          <p style={{ color: textSub, lineHeight: 1.85, marginBottom: "2rem", fontSize: "0.95rem" }}>
            Seeking{" "}
            <strong style={{ color: textMain, fontWeight: 600 }}>backend or full-stack roles</strong>{" "}
            where I can ship real-world products at scale.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              ["☕", "Java Expert", "OOP · Generics · Streams · Lambdas · Concurrency · Records · Sealed Classes"],
              ["🔐", "Security-First", "JWT · OAuth 2.0 · Spring Security · Role-Based Access Control"],
              ["⚡", "Performance Focused", "Redis caching · Kafka async · Optimised queries · Scalable design"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.9rem",
                  padding: "0.82rem 1rem",
                  background: surface,
                  border: `1px solid ${bord}`,
                  borderRadius: 10,
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)";
                  e.currentTarget.style.transform = "translateX(5px)";
                  e.currentTarget.style.background = dark ? "#131315" : "#fffbf5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = bord;
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = surface;
                }}
              >
                <span style={{ fontSize: "1.08rem", flexShrink: 0, marginTop: 2 }}>{icon}</span>
                <div>
                  <strong style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.1rem", color: textMain, fontWeight: 600 }}>
                    {title}
                  </strong>
                  <span style={{ fontSize: "0.77rem", color: textSub }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal from="right" delay={isDesktop ? 0.1 : 0}>
          <CodeBlock dark={dark} />
        </Reveal>
      </div>
    </section>
  );
}
