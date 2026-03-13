// components/BackgroundElements.jsx
import { useTheme } from '../contexts/ThemeContext';

export function AmbientMesh() {
  const { dark } = useTheme();
  
  return (
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
  );
}

export function DotGrid() {
  const { dark } = useTheme();
  
  return (
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
  );
}