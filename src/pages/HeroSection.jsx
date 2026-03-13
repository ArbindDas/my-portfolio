import {
  Avatar,
  MagBtn,
  TypewriterHeading,
  LoopingSubtitle,
} from "../components";

export default function HeroSection({
  dark,
  isMobile,
  isTablet,
  isDesktop,
  px,
  textMain,
  textSub,
  textMut,
  bord,
}) {
  const accent = "#f59e0b";

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        padding: `9rem ${px} 6rem`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: isDesktop ? "space-between" : "center",
          gap: isDesktop ? "5rem" : "3rem",
          flexDirection: isDesktop ? "row" : "column-reverse",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.48rem",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.63rem",
              color: "#34d399",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "rgba(52,211,153,0.065)",
              border: "1px solid rgba(52,211,153,0.19)",
              padding: "0.28rem 0.82rem",
              borderRadius: 99,
              marginBottom: "1.8rem",
              opacity: 0,
              animation: "fadeUp 0.5s ease forwards",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#34d399",
                animation: "pulse 2s infinite",
                display: "inline-block",
              }}
            />
            Available for Opportunities
          </div>

          <TypewriterHeading isMobile={isMobile} accent={accent} />
          <LoopingSubtitle isMobile={isMobile} />

          {/* Stack pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.32rem",
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: "1.8rem",
              opacity: 0,
              animation: "fadeUp 0.5s 0.2s ease forwards",
            }}
          >
            {[
              "Spring Boot",
              "Kafka",
              "Redis",
              "Microservices",
              "Docker",
              "AWS",
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.6rem",
                  padding: "0.18rem 0.6rem",
                  borderRadius: 99,
                  background: dark
                    ? "rgba(255,255,255,0.028)"
                    : "rgba(0,0,0,0.038)",
                  border: `1px solid ${bord}`,
                  color: textSub,
                  letterSpacing: "0.03em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p
            style={{
              fontSize: "0.96rem",
              color: textSub,
              lineHeight: 1.82,
              maxWidth: 500,
              marginBottom: "2.2rem",
              ...(isMobile ? { margin: "0 auto 2.2rem" } : {}),
              opacity: 0,
              animation: "fadeUp 0.5s 0.25s ease forwards",
            }}
          >
            Building{" "}
            <strong style={{ color: textMain, fontWeight: 600 }}>
              scalable, secure backend systems
            </strong>{" "}
            using modern Java and Spring Boot, with a strong focus on clean
            architecture, performance, and maintainable APIs.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
              opacity: 0,
              animation: "fadeUp 0.5s 0.3s ease forwards",
            }}
          >
            <MagBtn
              href="#projects"
              style={{
                background: accent,
                color: "#09090d",
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.85rem 1.9rem",
                borderRadius: 9,
                textDecoration: "none",
                gap: "0.48rem",
                boxShadow: "0 8px 26px rgba(245,158,11,0.26)",
              }}
            >
              View Projects <span>→</span>
            </MagBtn>
            <MagBtn
              href="#contact"
              style={{
                background: "transparent",
                color: textMain,
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "0.85rem 1.9rem",
                borderRadius: 9,
                textDecoration: "none",
                border: `1px solid ${bord}`,
                gap: "0.48rem",
                transition: "border-color 0.25s, color 0.25s",
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
              Let's Talk <span>✉</span>
            </MagBtn>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: isMobile ? "2rem" : "3.5rem",
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${bord}`,
              justifyContent: isMobile ? "center" : "flex-start",
              opacity: 0,
              animation: "fadeUp 0.5s 0.38s ease forwards",
            }}
          >
            {[
              ["7+", "Projects"],
              ["Java", "Primary Stack"],
              ["Modern", "Java Features"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: isMobile ? "center" : "left" }}>
                <span
                  style={{
                    fontFamily: "'Instrument Serif','Georgia',serif",
                    fontSize: isMobile ? "1.6rem" : "2.1rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: accent,
                    display: "block",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.6rem",
                    color: textMut,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="float-anim"
          style={{
            flexShrink: 0,
            opacity: 0,
            animation: "fadeUp 0.7s 0.08s ease forwards",
          }}
        >
          <Avatar size={isMobile ? 220 : isTablet ? 268 : 338} dark={dark} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0,
          animation: "fadeUp 0.4s 1.1s ease forwards",
        }}
      >
        <div
          style={{
            width: 1,
            height: 34,
            background: `linear-gradient(${accent},transparent)`,
            animation: "float 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.5rem",
            color: textMut,
            letterSpacing: "0.18em",
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
