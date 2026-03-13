import { useState, useEffect } from "react";
import { useMouse } from "../hooks";

export default function CustomCursor() {
  const pos = useMouse();
  const [trail, setTrail] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTrail(pos), 70);
    return () => clearTimeout(t);
  }, [pos]);

  useEffect(() => {
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);
    const targets = document.querySelectorAll("a,button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () =>
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 99999,
          pointerEvents: "none",
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: isHovering ? "#f59e0b" : "#ffffff",
          transition: "background 0.15s",
          mixBlendMode: "difference",
        }}
      />
      <div
        style={{
          position: "fixed",
          zIndex: 99998,
          pointerEvents: "none",
          left: trail.x - 18,
          top: trail.y - 18,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering ? "rgba(245,158,11,0.55)" : "rgba(255,255,255,0.22)"}`,
          transition: "border-color 0.2s",
        }}
      />
    </>
  );
}
