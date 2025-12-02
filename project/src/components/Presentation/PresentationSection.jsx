import React from "react";
import "./PresentationSection.css";

export default function PresentationSection({
  title = "Presentación del proyecto",
  subtitle = "Descubre en detalle cómo WEPLAN ayuda a reducir el estrés de organizar viajes en grupo.",
  embedSrc = "https://www.canva.com/design/DAG6MiHg9ec/LlwtIJ12r0tzlusXVHKg1g/view?embed"
}) {
  return (
    <section className="presentation-section">
      <div className="presentation-inner">
        <h2 className="presentation-title text-style">{title}</h2>
        <p className="presentation-subtitle">
          {subtitle}
        </p>

        <div className="presentation-frame-wrapper">
          <iframe
            className="presentation-iframe"
            src={embedSrc}
            title="Presentación WEPLAN"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
