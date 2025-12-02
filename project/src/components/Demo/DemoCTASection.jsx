import React from "react";
import "./DemoCTASection.css";
import imagen from "../../assets/elputoqr.jpg";

export default function DemoCTASection({
  qrSrc = imagen,   
  title = "Prueba la demo ahora",
  subtitle = "Escanea el código o haz clic en el botón para abrir la demo interactiva de WEPLAN.",
  buttonText = "Abrir demo",
  buttonHref = "https://proyectosiiiweplan.github.io/WePlanDemoReact/"
}) {
  return (
    <section className="demo-cta">
      <div className="demo-cta-inner">
        <div className="demo-cta-qr-card">
          <img
            src={qrSrc}
            alt="Código QR para probar la demo"
            className="demo-cta-qr-image"
          />
          <p className="demo-cta-qr-caption">
            Escanéalo con tu móvil
          </p>
        </div>

        <div className="demo-cta-content">
          <h2 className="demo-cta-title text-style">{title}</h2>
          <p className="demo-cta-subtitle">
            {subtitle}
          </p>

          <a
            href={buttonHref}
            className="demo-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
