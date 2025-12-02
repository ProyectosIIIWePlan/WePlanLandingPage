import React, { useEffect, useRef, useState } from "react";
import "./DemoSection.css";

function DemoStep({ title, text, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);     // aparece si entra
        } else {
          setVisible(false);    // se vuelve a ocultar si sale
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const sideClass = index % 2 === 0 ? "demo-step--left" : "demo-step--right";

  return (
    <div
      ref={ref}
      className={`demo-step ${sideClass} ${visible ? "is-visible" : ""}`}>
      <div className="demo-step-card">
        <span className="demo-step-number">{index + 1}</span>
        <h3 className="demo-step-title">{title}</h3>
        <p className="demo-step-text">{text}</p>
      </div>
    </div>
  );
}

export default function DemoSection() {
  const steps = [
    {
      title: "Crea tu viaje en segundos",
      text: "Introduce el destino, las fechas y quién viaja. WEPLAN genera el espacio del viaje automáticamente."
    },
    {
      title: "Invita a tu grupo",
      text: "Comparte el enlace con tus amigos o familia para que todos puedan ver y participar en la planificación."
    },
    {
      title: "Añade hoteles y transportes",
      text: "Prueba diferentes opciones de alojamiento y transporte. WEPLAN calcula costes y horarios para todos."
    },
    {
      title: "Organiza tareas y pagos",
      text: "Añade tareas, actividades y gastos. Cada miembro del grupo puede marcar lo que hace o lo que paga."
    },
    {
      title: "Lleva el viaje contigo",
      text: "Consulta el itinerario, los horarios y los pagos desde el móvil durante el viaje."
    }
  ];

  return (
    <section id="demo" className="demo-section">
      <div className="demo-inner">
        <h2 className="demo-title text-style">¿Cómo funciona?</h2>

        <div className="demo-steps">
          {steps.map((step, index) => (
            <DemoStep
              key={index}
              index={index}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>

        <div className="demo-video-block">
          <h3 className="demo-video-title text-style">
            Nuestra demo en acción
          </h3>
          <p className="demo-video-subtitle">
            Un recorrido rápido por la app para que veas cómo se organiza un viaje real.
          </p>

          <div className="demo-video-wrapper">
            
            <iframe
              className="demo-video-iframe"
              src="https://www.youtube.com/embed/fhr9PYeuXEk?si=XhzGpJkTAK2tI514"
              title="Demo WEPLAN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
