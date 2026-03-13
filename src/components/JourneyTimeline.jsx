import { useState } from "react";
import { JOURNEY_ITEMS } from "../constants";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function JourneyTimeline({ dark, isMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const textMain = dark ? "#e4e4e7" : "#18181b";
  const textSub = dark ? "#71717a" : "#52525b";
  const bord = dark ? "#27272a" : "#e4e4e7";
  const accent = "#f59e0b";
  const surface = dark ? "#0f0f12" : "#ffffff";

  return (
    <div style={{ position: "relative", marginTop: "3rem" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "1rem" : "50%",
          top: 0, bottom: 0, width: "2px",
          background: `linear-gradient(180deg, ${accent}22, ${accent}, ${accent}22)`,
          transform: isMobile ? "none" : "translateX(-50%)",
        }}
      />

      {JOURNEY_ITEMS.map((item, index) => (
        <Reveal key={index} delay={index * 0.1} from={!isMobile && index % 2 === 0 ? "left" : "right"}>
          <div
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse",
              alignItems: isMobile ? "flex-start" : "center",
              marginBottom: "4rem",
              position: "relative",
              gap: isMobile ? "1rem" : "2rem",
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: isMobile ? "calc(1rem - 12px)" : "50%",
                top: isMobile ? "0" : "50%",
                transform: isMobile ? "none" : "translate(-50%, -50%)",
                width: 24, height: 24, borderRadius: "50%",
                background: activeIndex === index ? item.color : dark ? "#18181b" : "#f4f4f5",
                border: `2px solid ${activeIndex === index ? item.color : accent}`,
                zIndex: 2,
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: activeIndex === index ? `0 0 20px ${item.color}` : "none",
              }}
            >
              {activeIndex === index && (
                <div
                  style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 8, height: 8, borderRadius: "50%",
                    background: item.color, animation: "pulse 2s infinite",
                  }}
                />
              )}
            </div>

            {/* Card */}
            <div
              style={{
                width: isMobile ? "100%" : "calc(50% - 3rem)",
                marginLeft: isMobile ? "2.5rem" : index % 2 === 0 ? "0" : "auto",
                marginRight: isMobile ? "0" : index % 2 === 0 ? "auto" : "0",
              }}
            >
              <TiltCard>
                <div
                  style={{
                    background: surface,
                    border: `1px solid ${activeIndex === index ? `${item.color}40` : bord}`,
                    borderRadius: 16, padding: "1.8rem",
                    position: "relative", overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                    transform: activeIndex === index ? "translateY(-4px)" : "none",
                    boxShadow: activeIndex === index
                      ? dark ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px ${item.color}20` : `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${item.color}20`
                      : "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 2,
                      background: `linear-gradient(90deg, ${item.color}, ${accent})`,
                      opacity: activeIndex === index ? 1 : 0.5,
                      transition: "opacity 0.3s",
                    }}
                  />

                  <div
                    style={{
                      display: "inline-block",
                      fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem",
                      background: `${item.color}15`, color: item.color,
                      padding: "0.3rem 0.8rem", borderRadius: 99,
                      border: `1px solid ${item.color}30`,
                      marginBottom: "1rem", letterSpacing: "0.05em",
                    }}
                  >
                    {item.year}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1.8rem", filter: activeIndex === index ? "none" : "grayscale(0.3)", transition: "filter 0.3s" }}>
                      {item.icon}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Instrument Serif','Georgia',serif",
                          fontSize: "1.3rem", fontWeight: 400, fontStyle: "italic",
                          color: textMain, marginBottom: "0.2rem",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.9rem", color: textSub, lineHeight: 1.7, marginBottom: "1.2rem" }}>
                    {item.description}
                  </p>

                  <ul style={{ listStyle: "none", marginBottom: "1.2rem" }}>
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex", gap: "0.6rem", alignItems: "flex-start",
                          marginBottom: "0.6rem", fontSize: "0.85rem", color: textSub,
                        }}
                      >
                        <span style={{ color: item.color, fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", marginTop: "0.2rem", flexShrink: 0 }}>▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem",
                          padding: "0.2rem 0.5rem", borderRadius: 4,
                          background: `${item.color}10`, color: item.color,
                          border: `1px solid ${item.color}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {activeIndex === index && (
                    <div
                      style={{
                        position: "absolute", top: "50%", left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%", height: "100%",
                        background: `radial-gradient(circle at 50% 50%, ${item.color}10, transparent 70%)`,
                        pointerEvents: "none", borderRadius: 16,
                      }}
                    />
                  )}
                </div>
              </TiltCard>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
