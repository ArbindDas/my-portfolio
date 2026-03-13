
// components/Navbar.jsx
import { NAV_LINKS } from "../constants";
import MagBtn from "./MagBtn";
import MobileMenu from "./MobileMenu";


export default function NavBar({
  dark, setDark, isMobile, isDesktop, textMain, px, scrollY,
  textSub, bord, accent, activeNav, setActiveNav
}) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `${scrollY > 50 ? "0.72rem" : "1.05rem"} ${px}`,
        background:
          scrollY > 50
            ? dark
              ? "rgba(5,5,10,0.88)"
              : "rgba(250,250,249,0.92)"
            : "transparent",
        backdropFilter: scrollY > 50 ? "blur(22px) saturate(1.4)" : "none",
        borderBottom: `1px solid ${scrollY > 50 ? bord : "transparent"}`,
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Instrument Serif','Georgia',serif",
          fontSize: "1.15rem",
          fontWeight: 400,
          fontStyle: "italic",
          color: textMain,
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Arbind<span style={{ color: accent }}>.</span>
      </a>

      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: dark ? "rgba(255,255,255,0.023)" : "rgba(0,0,0,0.03)",
            border: `1px solid ${bord}`,
            borderRadius: 99,
            padding: "0.26rem 0.38rem",
            gap: 0,
          }}
        >
          {NAV_LINKS.map((id) => {
            const active = activeNav === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.67rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.82rem",
                  borderRadius: 99,
                  textDecoration: "none",
                  color: active ? "#09090d" : textSub,
                  background: active ? accent : "transparent",
                  fontWeight: active ? 600 : 400,
                  transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = textSub;
                }}
              >
                {id}
              </a>
            );
          })}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
        <button
          onClick={() => setDark((d) => !d)}
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: dark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.035)",
            border: `1px solid ${bord}`,
            color: textSub,
            cursor: "pointer",
            fontSize: "0.82rem",
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
          {dark ? "○" : "●"}
        </button>

        {!isMobile && (
          <MagBtn
            href="https://github.com/ArbindDas"
            target="_blank"
            rel="noreferrer"
            style={{
              background: accent,
              color: "#09090d",
              fontFamily: "'JetBrains Mono',monospace",
              fontWeight: 600,
              fontSize: "0.68rem",
              padding: "0.46rem 0.95rem",
              borderRadius: 8,
              textDecoration: "none",
              gap: "0.3rem",
              letterSpacing: "0.04em",
              boxShadow: "0 2px 12px rgba(245,158,11,0.28)",
            }}
          >
            GitHub <span style={{ opacity: 0.7 }}>↗</span>
          </MagBtn>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "transparent",
              border: `1px solid ${bord}`,
              color: textSub,
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ≡
          </button>
        )}
      </div>
    </nav>
  );
}