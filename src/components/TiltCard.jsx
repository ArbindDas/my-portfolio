import { useRef, useState } from "react";

export default function TiltCard({ children, style: s = {} }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 9;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 9;
    setTilt({ x: -y, y: x });
  };
  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHov(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      style={{
        ...s,
        transform: hov
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(6px)`
          : "perspective(900px) rotateX(0) rotateY(0) translateZ(0)",
        transition: hov
          ? "transform 0.1s ease"
          : "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        willChange: "transform",
        position: "relative",
      }}
    >
      {hov && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            zIndex: 1,
            pointerEvents: "none",
            background: `radial-gradient(circle at ${(tilt.y / 4.5 + 0.5) * 100}% ${(-tilt.x / 4.5 + 0.5) * 100}%, rgba(245,158,11,0.06) 0%, transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
