import { useRef, useState } from "react";

export default function MagBtn({ children, href, onClick, style: s = {}, target, rel, disabled }) {
  const ref = useRef(null);
  const [off, setOff] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setOff({ x: (e.clientX - cx) * 0.2, y: (e.clientY - cy) * 0.2 });
  };
  const onLeave = () => setOff({ x: 0, y: 0 });

  const El = href ? "a" : "button";
  return (
    <El
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      disabled={disabled}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        ...s,
        transform: `translate(${off.x}px,${off.y}px)`,
        transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </El>
  );
}
