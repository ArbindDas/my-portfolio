import { useState } from "react";
import profilePic from "../assets/profile-pic.png";

export default function Avatar({ size, dark }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <svg
        viewBox="0 0 320 320"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          animation: "spin 22s linear infinite",
        }}
      >
        <circle
          cx="160"
          cy="160"
          r="155"
          fill="none"
          stroke={hov ? "rgba(245,158,11,0.28)" : "rgba(245,158,11,0.11)"}
          strokeWidth="1"
          strokeDasharray="3 13"
          style={{ transition: "stroke 0.4s" }}
        />
      </svg>
      <svg
        viewBox="0 0 320 320"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          animation: "spin 38s linear infinite reverse",
        }}
      >
        <circle
          cx="160"
          cy="160"
          r="140"
          fill="none"
          stroke="rgba(129,140,248,0.07)"
          strokeWidth="1"
          strokeDasharray="1 7"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: "9%",
          borderRadius: "50%",
          background: hov
            ? "radial-gradient(circle,rgba(245,158,11,0.16),transparent 65%)"
            : "radial-gradient(circle,rgba(245,158,11,0.06),transparent 65%)",
          filter: "blur(22px)",
          transition: "background 0.5s",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "9%",
          borderRadius: "50%",
          overflow: "hidden",
          border: `2px solid ${hov ? "rgba(245,158,11,0.42)" : "rgba(245,158,11,0.16)"}`,
          background: dark ? "#0c0c0e" : "#f4f4f5",
          transition: "border-color 0.4s, box-shadow 0.4s",
          boxShadow: hov ? "0 0 44px rgba(245,158,11,0.14)" : "none",
        }}
      >
        <img
          src={profilePic}
          alt="Arbind Das"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hov ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
      {/* Status badge */}
      <div
        style={{
          position: "absolute",
          bottom: "13%",
          right: "0%",
          background: dark ? "rgba(9,9,11,0.92)" : "rgba(255,255,255,0.95)",
          border: "1px solid rgba(52,211,153,0.3)",
          borderRadius: 99,
          padding: "0.3rem 0.7rem",
          display: "flex",
          alignItems: "center",
          gap: "0.38rem",
          backdropFilter: "blur(12px)",
          zIndex: 2,
          boxShadow: "0 4px 18px rgba(0,0,0,0.28)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#34d399",
            boxShadow: "0 0 6px #34d399",
            animation: "pulse 2s infinite",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.55rem",
            color: "#34d399",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          OPEN TO WORK
        </span>
      </div>
      {/* Java badge */}
      <div
        style={{
          position: "absolute",
          top: "11%",
          left: "0%",
          background: dark ? "rgba(9,9,11,0.92)" : "rgba(255,255,255,0.95)",
          border: "1px solid rgba(245,158,11,0.22)",
          borderRadius: 8,
          padding: "0.3rem 0.58rem",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          backdropFilter: "blur(12px)",
          zIndex: 2,
          boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
        }}
      >
        <span style={{ fontSize: "0.8rem" }}>☕</span>
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.54rem",
            color: "#f59e0b",
            fontWeight: 600,
          }}
        >
          Modern Java
        </span>
      </div>
    </div>
  );
}
