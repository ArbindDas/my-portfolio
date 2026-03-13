import { useInView } from "../hooks";

export default function Reveal({ children, delay = 0, from = "bottom", style: ex = {} }) {
  const [ref, inView] = useInView();
  const transforms = {
    bottom: "translateY(36px)",
    left: "translateX(-36px)",
    right: "translateX(36px)",
    top: "translateY(-36px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translate(0)"
          : transforms[from] || "translateY(36px)",
        transition: `opacity 0.8s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
        ...ex,
      }}
    >
      {children}
    </div>
  );
}
