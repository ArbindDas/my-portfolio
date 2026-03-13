import { useMemo, useState } from "react";
import { Reveal, Label, H2, MagBtn } from "../components";

export default function ContactSection({ dark, isDesktop, isMobile, px, bg, surface, textMain, textSub, textMut, bord }) {
  const accent = "#f59e0b";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitState, setSubmitState] = useState("idle");
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });

  const validateField = (field, value) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        else if (!/^[a-zA-Z\s]*$/.test(value)) error = "Name can only contain letters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        else if (value.trim().length < 3) error = "Subject must be at least 3 characters";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      default: break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const validateAllFields = () => {
    const nameError = validateField("name", form.name);
    const emailError = validateField("email", form.email);
    const subjectError = validateField("subject", form.subject);
    const messageError = validateField("message", form.message);
    return !(nameError || emailError || subjectError || messageError);
  };

  const isFormValid = useMemo(() => {
    return (
      form.name?.trim() && form.email?.trim() && form.subject?.trim() && form.message?.trim() &&
      !errors.name && !errors.email && !errors.subject && !errors.message
    );
  }, [form, errors]);

  const handleSubmit = () => {
    const isValid = validateAllFields();
    if (!isValid) return;
    setSubmitState("sending");
    setTimeout(() => {
      setSubmitState("done");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitState("idle"), 3000);
    }, 1400);
  };

  const inp = {
    background: surface,
    border: `1px solid ${bord}`,
    borderRadius: 8,
    padding: "0.78rem 1rem",
    color: textMain,
    width: "100%",
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: "0.8rem",
    outline: "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
  };

  const renderField = (fieldName, type, placeholder, isTextarea = false) => {
    const error = errors[fieldName];
    const value = form[fieldName];
    const Tag = isTextarea ? "textarea" : "input";
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.34rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.1em", color: textSub }}>
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
          </label>
          {error && <span style={{ color: "#ef4444", fontSize: "0.6rem", fontFamily: "'JetBrains Mono',monospace" }}>{error}</span>}
        </div>
        <Tag
          type={type}
          placeholder={placeholder}
          value={value}
          rows={isTextarea ? 5 : undefined}
          onChange={(e) => {
            setForm((s) => ({ ...s, [fieldName]: e.target.value }));
            validateField(fieldName, e.target.value);
          }}
          style={{
            ...inp,
            ...(isTextarea ? { resize: "vertical" } : {}),
            borderColor: error ? "#ef4444" : value && !error ? "#34d399" : bord,
            boxShadow: error ? "0 0 0 3px rgba(239,68,68,0.08)" : "none",
          }}
          onFocus={(e) => {
            if (!error) {
              e.target.style.borderColor = accent;
              e.target.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.08)";
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.target.style.borderColor = value ? "#34d399" : bord;
              e.target.style.boxShadow = "none";
            }
          }}
        />
      </div>
    );
  };

  return (
    <section
      id="contact"
      style={{
        padding: `6rem ${px}`,
        background: bg,
        width: "100%",
        position: "relative",
        zIndex: 1,
        transition: "background 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
          gap: isDesktop ? "5rem" : "3rem",
          alignItems: "start",
        }}
      >
        <Reveal from="left">
          <Label>Contact</Label>
          <H2>
            Let's <em style={{ color: accent }}>Connect</em>
          </H2>
          <p style={{ color: textSub, lineHeight: 1.82, marginBottom: "2.2rem", fontSize: "0.95rem" }}>
            Open to backend roles, full-stack opportunities, and interesting Java projects. Let's build something great.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {[
              { icon: "🐙", label: "GitHub", sub: "github.com/ArbindDas", href: "https://github.com/ArbindDas", color: "#e4e4e7" },
              { icon: "✉", label: "Email", sub: "dasarbind269@gmail.com", href: "mailto:dasarbind269@gmail.com", color: "#f59e0b" },
              { icon: "💼", label: "LinkedIn", sub: "Connect professionally", href: "https://www.linkedin.com/in/arbinddas/", color: "#38bdf8" },
            ].map(({ icon, label, sub, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.9rem",
                  padding: "0.82rem 0.95rem",
                  background: surface, border: `1px solid ${bord}`,
                  borderRadius: 11, textDecoration: "none", color: textMain,
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)";
                  e.currentTarget.style.transform = "translateX(6px)";
                  e.currentTarget.style.background = dark ? "#131315" : "#fffbf5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = bord;
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = surface;
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 8, fontSize: "1rem", background: `${color}10`, border: `1px solid ${color}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.07rem", fontWeight: 600 }}>{label}</strong>
                  <span style={{ fontSize: "0.74rem", color: textSub, fontFamily: "'JetBrains Mono',monospace" }}>{sub}</span>
                </div>
                <span style={{ marginLeft: "auto", color: textMut, fontSize: "0.78rem" }}>↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal from="right" delay={isDesktop ? 0.1 : 0}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.82rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.82rem" }}>
              {renderField("name", "text", "Your name")}
              {renderField("email", "email", "your@email.com")}
            </div>
            {renderField("subject", "text", "Job opportunity / Project")}
            {renderField("message", "text", "Tell me about the role...", true)}

            <MagBtn
              onClick={handleSubmit}
              disabled={submitState === "sending" || !isFormValid}
              style={{
                background: submitState === "done" ? "#34d399" : !isFormValid ? "#9ca3af" : accent,
                color: "#09090d",
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.9rem",
                borderRadius: 9,
                border: "none",
                cursor: submitState === "sending" || !isFormValid ? "not-allowed" : "pointer",
                transition: "background 0.3s, box-shadow 0.3s",
                boxShadow: submitState === "idle" && isFormValid ? "0 6px 22px rgba(245,158,11,0.22)" : "none",
                opacity: submitState === "sending" || !isFormValid ? 0.7 : 1,
                width: "100%",
              }}
            >
              {submitState === "idle" ? "Send Message →" : submitState === "sending" ? "Sending…" : "✓ Sent!"}
            </MagBtn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
