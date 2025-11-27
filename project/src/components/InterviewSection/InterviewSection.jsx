import React from "react";
import InterviewItem from "../Interview/Interview.jsx";
import "./InterviewSection.css";
import logo from "../../assets/WePlanLogoTransparente.png";



export default function InterviewsSection() {
  const interviews = [
    {
      name: "Laura Martínez",
      image: logo,
      quote:
        "Organizar el viaje con mis amigos siempre era un caos. Esta app nos ahorraría horas de mensajes."
    },
    {
      name: "Carlos Rivera",
      image: logo,
      quote:
        "Lo que más valoro es tener las tareas y pagos en un solo sitio. Simplifica muchísimo."
    },
    {
      name: "Ana López",
      image: logo,
      quote:
        "Antes tardábamos días en decidir actividades. Con votaciones rápidas sería todo más fluido."
    }
  ];

  return (
    <section className="interviews-section">

      {interviews.map((interview, index) => (
        <InterviewItem
          key={index}
          index={index}
          name={interview.name}
          image={interview.image}
          quote={interview.quote}
        />
      ))}
    </section>
  );
}