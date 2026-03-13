import { useState, useEffect } from "react";

export default function TypewriterHeading({ isMobile, accent }) {
  const line1 = "Hi, I'm";
  const line2 = "Arbind Das";
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [phase, setPhase] = useState("type1");

  useEffect(() => {
    let t;
    if (phase === "type1") {
      if (d1.length < line1.length)
        t = setTimeout(() => setD1(line1.slice(0, d1.length + 1)), 65);
      else t = setTimeout(() => setPhase("type2"), 200);
    } else if (phase === "type2") {
      if (d2.length < line2.length)
        t = setTimeout(() => setD2(line2.slice(0, d2.length + 1)), 75);
      else t = setTimeout(() => setPhase("hold"), 1600);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erase2"), 200);
    } else if (phase === "erase2") {
      if (d2.length > 0) t = setTimeout(() => setD2(d2.slice(0, -1)), 40);
      else t = setTimeout(() => setPhase("erase1"), 100);
    } else if (phase === "erase1") {
      if (d1.length > 0) t = setTimeout(() => setD1(d1.slice(0, -1)), 35);
      else t = setTimeout(() => setPhase("type1"), 420);
    }
    return () => clearTimeout(t);
  }, [phase, d1, d2]);

  const cursor = (
    <span
      style={{
        display: "inline-block",
        width: "2px",
        height: "0.85em",
        background: accent,
        marginLeft: "4px",
        verticalAlign: "middle",
        borderRadius: "1px",
        animation: "blink 0.7s step-end infinite",
      }}
    />
  );

  return (
    <h1
      style={{
        fontFamily: "'Instrument Serif','Georgia',serif",
        fontSize: isMobile
          ? "clamp(3rem,14vw,4.5rem)"
          : "clamp(3.5rem,7vw,6.5rem)",
        fontWeight: 400,
        fontStyle: "italic",
        lineHeight: 0.92,
        letterSpacing: "-0.03em",
        marginBottom: "1.4rem",
        minHeight: "2.1em",
        opacity: 0,
        animation: "fadeUp 0.6s 0.05s ease forwards",
      }}
    >
      <span style={{ display: "block" }}>
        {d1}
        {(phase === "type1" || phase === "erase1") && cursor}
      </span>
      <span style={{ display: "block", color: accent }}>
        {d2}
        {(phase === "type2" || phase === "hold" || phase === "erase2") &&
          cursor}
      </span>
    </h1>
  );
}
