import { useState } from "react";

export default function CodeBlock({ dark }) {
  const [copied, setCopied] = useState(false);
  const bg = dark ? "#09090b" : "#fafaf9";
  const textCol = dark ? "#e4e4e7" : "#18181b";
  const muted = dark ? "#52525b" : "#a1a1aa";
  const lineNCol = dark ? "#3f3f46" : "#d4d4d8";

  const copy = () => {
    navigator.clipboard?.writeText("new ArbindDas().hire()");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: bg,
        borderRadius: 14,
        overflow: "hidden",
        border: dark ? "1px solid #27272a" : "1px solid #e4e4e7",
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: "0.72rem",
        lineHeight: 1.9,
        boxShadow: dark
          ? "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.025)"
          : "0 24px 48px rgba(0,0,0,0.07)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.65rem 1.1rem",
          background: dark ? "rgba(255,255,255,0.018)" : "rgba(0,0,0,0.02)",
          borderBottom: dark ? "1px solid #1c1c1f" : "1px solid #ebebeb",
        }}
      >
        <div style={{ display: "flex", gap: "0.38rem" }}>
          {["#ef4444", "#eab308", "#22c55e"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: c,
                opacity: 0.85,
              }}
            />
          ))}
        </div>
        <span
          style={{ color: muted, fontSize: "0.58rem", letterSpacing: "0.06em" }}
        >
          ArbindDas.java
        </span>
        <button
          onClick={copy}
          style={{
            background: copied
              ? "rgba(52,211,153,0.1)"
              : "rgba(245,158,11,0.07)",
            border: `1px solid ${copied ? "rgba(52,211,153,0.28)" : "rgba(245,158,11,0.14)"}`,
            color: copied ? "#34d399" : "#f59e0b",
            borderRadius: 5,
            padding: "0.1rem 0.48rem",
            cursor: "pointer",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.56rem",
            transition: "all 0.2s",
          }}
        >
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      {/* Code with line numbers */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "1.2rem 0.8rem 1.2rem 0.6rem",
            textAlign: "right",
            color: lineNCol,
            fontSize: "0.6rem",
            userSelect: "none",
            borderRight: dark ? "1px solid #1c1c1f" : "1px solid #f0f0f0",
            lineHeight: 1.9,
            flexShrink: 0,
          }}
        >
          {Array.from({ length: 18 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div style={{ padding: "1.2rem 1.4rem", overflowX: "auto", flex: 1 }}>
          <div style={{ color: muted }}>
            {" ─── Java Backend Developer ───"}
          </div>
          <div>
            <span style={{ color: "#818cf8" }}>@SpringBootApplication</span>
          </div>
          <div>
            <span style={{ color: "#fb7185" }}>public class </span>
            <span style={{ color: "#fbbf24" }}>ArbindDas</span>
            <span style={{ color: textCol }}>{" {"}</span>
          </div>
          <div style={{ paddingLeft: "1.4rem" }}>
            <br />
            <div>
              <span style={{ color: "#fb7185" }}>private final </span>
              <span style={{ color: "#34d399" }}>String </span>
              <span style={{ color: "#38bdf8" }}>role</span>
              <span style={{ color: muted }}> = </span>
              <span style={{ color: "#a3e635" }}>"Java Backend Developer"</span>
              <span style={{ color: muted }}>;</span>
            </div>
            <br />
            <div>
              <span style={{ color: "#fb7185" }}>private final </span>
              <span style={{ color: "#34d399" }}>List</span>
              <span style={{ color: textCol }}>&lt;</span>
              <span style={{ color: "#34d399" }}>String</span>
              <span style={{ color: textCol }}>&gt; </span>
              <span style={{ color: "#38bdf8" }}>stack</span>
              <span style={{ color: muted }}> = </span>
              <span style={{ color: "#34d399" }}>List</span>
              <span style={{ color: textCol }}>.of(</span>
            </div>
            <div style={{ paddingLeft: "1.4rem" }}>
              {[
                "Spring Boot",
                "REST APIs",
                "Spring Security",
                "Kafka",
                "Redis",
                "Multithreading",
              ].map((s, i, a) => (
                <div key={s}>
                  <span style={{ color: "#a3e635" }}>"{s}"</span>
                  {i < a.length - 1 && <span style={{ color: muted }}>,</span>}
                </div>
              ))}
            </div>
            <div>
              <span style={{ color: textCol }}>);</span>
            </div>
            <br />
            <div>
              <span style={{ color: "#818cf8" }}>@Bean</span>
            </div>
            <div>
              <span style={{ color: "#fb7185" }}>public </span>
              <span style={{ color: "#34d399" }}>Developer </span>
              <span style={{ color: "#fbbf24" }}>hire</span>
              <span style={{ color: textCol }}>{`() {`}</span>
            </div>
            <div style={{ paddingLeft: "1.4rem" }}>
              <div>
                <span style={{ color: "#fb7185" }}>return </span>
                <span style={{ color: "#34d399" }}>Developer</span>
                <span style={{ color: textCol }}>.builder()</span>
              </div>
              <div style={{ paddingLeft: "1.4rem" }}>
                <div>
                  <span style={{ color: textCol }}>.name(</span>
                  <span style={{ color: "#a3e635" }}>"Arbind Das"</span>
                  <span style={{ color: textCol }}>)</span>
                </div>
                <div>
                  <span style={{ color: textCol }}>.available(</span>
                  <span style={{ color: "#fb7185" }}>true</span>
                  <span style={{ color: textCol }}>)</span>
                </div>
                <div>
                  <span style={{ color: textCol }}>.build()</span>
                  <span style={{ color: muted }}>;</span>
                </div>
              </div>
            </div>
            <div>
              <span style={{ color: textCol }}>{"}"}</span>
            </div>
          </div>
          <div>
            <span style={{ color: textCol }}>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
