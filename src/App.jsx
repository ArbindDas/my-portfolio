import { useState, useEffect } from "react";
import { useScrollY, useWindowWidth } from "./hooks";
import { CustomCursor, MagBtn, MobileMenu, ProjectModal } from "./components";
import {
  HeroSection,
  AboutSection,
  JourneySection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "./pages";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollY = useScrollY();
  const width = useWindowWidth();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;
  const isLarge = width >= 1280;

  useEffect(() => {
    const h = () => {
      let cur = "";
      NAV_LINKS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      });
      setActiveNav(cur);
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  // ── Design tokens ──
  const bg = dark ? "#05050a" : "#fafaf9";
  const bg2 = dark ? "#09090d" : "#f2f2ef";
  const surface = dark ? "#0f0f12" : "#ffffff";
  const textMain = dark ? "#e4e4e7" : "#18181b";
  const textSub = dark ? "#71717a" : "#52525b";
  const textMut = dark ? "#3f3f46" : "#a1a1aa";
  const bord = dark ? "#27272a" : "#e4e4e7";
  const accent = "#f59e0b";
  const px = isMobile
    ? "1.2rem"
    : isTablet
      ? "2.5rem"
      : isLarge
        ? "6rem"
        : "3.5rem";

  const sharedProps = {
    dark,
    isMobile,
    isTablet,
    isDesktop,
    px,
    bg,
    bg2,
    surface,
    textMain,
    textSub,
    textMut,
    bord,
  };

  return (
    <div
      style={{
        background: bg,
        color: textMain,
        fontFamily: "'DM Sans','system-ui',sans-serif",
        overflowX: "hidden",
        lineHeight: 1.6,
        width: "100vw",
        minHeight: "100vh",
        transition: "background 0.4s, color 0.4s",
        cursor: isDesktop ? "none" : "auto",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.72)} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes meshDrift { 0%{transform:translate(0,0)} 40%{transform:translate(-24px,18px)} 70%{transform:translate(16px,-12px)} 100%{transform:translate(0,0)} }

        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body, #root { width:100%; min-height:100vh; overflow-x:hidden; }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:2px; }
        ::-webkit-scrollbar-thumb { background:linear-gradient(#f59e0b,#818cf8); border-radius:2px; }
        ::selection { background:rgba(245,158,11,0.2); color:#f59e0b; }
        .float-anim { animation: float 5s ease-in-out infinite; }
        section, footer, nav { width:100%; }
      `}</style>

      {isDesktop && <CustomCursor />}

      {/* Ambient mesh */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-12%",
            left: "-8%",
            width: "52vw",
            height: "52vw",
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(circle,rgba(245,158,11,0.05) 0%,transparent 65%)"
              : "radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 65%)",
            filter: "blur(44px)",
            animation: "meshDrift 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            right: "-6%",
            width: "42vw",
            height: "42vw",
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(circle,rgba(129,140,248,0.04) 0%,transparent 65%)"
              : "radial-gradient(circle,rgba(129,140,248,0.055) 0%,transparent 65%)",
            filter: "blur(44px)",
            animation: "meshDrift 26s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(circle, ${dark ? "rgba(245,158,11,0.12)" : "rgba(245,158,11,0.18)"} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 85% 85% at 50% 45%,black 25%,transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 85% at 50% 45%,black 25%,transparent)",
          opacity: 0.4,
        }}
      />

      <NavBar
        dark={dark}
        setDark={setDark}
        isMobile={isMobile}
        isDesktop={isDesktop}
        px={px}
        scrollY={scrollY}
        textSub={textSub}
        textMain={textMain}
        bord={bord}
        accent={accent}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <MobileMenu
        open={menuOpen}
        dark={dark}
        textSub={textSub}
        accent={accent}
        onClose={() => setMenuOpen(false)}
      />

      {/* ── PAGE SECTIONS ── */}
      <HeroSection {...sharedProps} />
      <AboutSection {...sharedProps} />
      <JourneySection {...sharedProps} />
      <SkillsSection {...sharedProps} />
      <ProjectsSection {...sharedProps} onProjectClick={setSelectedProject} />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          dark={dark}
          isDesktop={isDesktop}
        />
      )}

      <ContactSection {...sharedProps} />

      <Footer
        dark={dark}
        px={px}
        bg2={bg2}
        bord={bord}
        textMain={textMain}
        textSub={textSub}
        textMut={textMut}
        accent={accent}
      />
    </div>
  );
}