import React, { useEffect, useRef, useState } from "react";
import "./InterviewSection.css";
import foto1 from "../../assets/david_aranda_bracamonte.png";
import foto2 from "../../assets/pala.png";

function InterviewItem({ index, name, role, image, text }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);  // entra → aparece
        } else {
          setVisible(false); // sale → se oculta para volver a animar luego
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const sideClass =
    index % 2 === 0 ? "interview-row--left" : "interview-row--right";

  return (
    <div
      ref={ref}
      className={`interview-row ${sideClass} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="interview-card">
        <div className="interview-photo-wrapper">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="interview-photo"
          />
        </div>
        <div className="interview-content">
          <h3 className="interview-name">{name}</h3>
          {role && <p className="interview-role">{role}</p>}
          <p className="interview-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InterviewsLongSection() {
  // Ejemplos — aquí luego pegas las entrevistas reales completas
  const interviews = [
    {
      name: "Paula Galán Santibáñez",
      role: "Estudiante que viaja en grupo con sus amigos",
      image: foto2,
      text:
        "Paula tiene 22 años, es de Plasencia y estudia un doble grado de Comunicación Audiovisual y Diseño Digital y Multimedia en Madrid." +
"Es extrovertida, creativa y muy unida a su grupo de amigos, ahora repartidos por distintas ciudades de España." +
"Le encantan la fotografía, el arte y los destinos poco comunes, priorizando el enriquecimiento cultural frente a la fiesta.\n\n" +
"Le cuesta organizarse y nadie en el grupo quiere asumir la planificación del viaje, por lo que todo se vuelve tedioso." +
"Ha usado Tricount y Booking, pero ve en WePlan una solución más completa para organizar el viaje, ahorrar tiempo y evitar discusiones por pagos."
    },
    {
      name: "David Aranda Bracamonte",
      role: "Estudiante de fisioterapia que organiza los viajes de su grupo de amigos.",
      image: foto1,
      text:
        "David tiene 20 años y estudia Fisioterapia; es el organizador oficial de los viajes de su grupo de 23 amigos." +
"Le encanta viajar en grupo y vivir experiencias juntos, pero cada viaje le supone un gran esfuerzo de coordinación y gestión.\n\n" +
"Se encarga de proponer fechas, buscar destinos, comparar alojamientos y coordinar transportes, asumiendo casi toda la responsabilidad." +
"La gestión de pagos y reservas suele ser caótica: Bizums atrasados, adelantos mezclados y gente que reserva tarde o se equivoca." +
"Por eso imagina WePlan como la herramienta ideal para centralizar itinerarios y pagos, ahorrar tiempo y reducir el estrés de organizar a tanta gente."
    },
    {
      name: "Ana López",
      role: "Viajes improvisados con distintos grupos",
      image: "/images/ana.jpg",
      text:
        "Lo que más me agobia es cuando en un grupo nadie se decide. En el chat se proponen ideas pero se pierden, nadie sabe qué se ha votado, " +
        "y al final se decide todo a última hora. Me gustaría poder abrir una app, ver propuestas claras, votar rápido y que quede registrado " +
        "qué se va a hacer cada día. Creo que eso evitaría muchos malentendidos y discusiones de último momento."
    }
  ];

  return (
    <section className="interviews-long-section">
      <div className="interviews-long-inner">
        <h2 className="interviews-long-title text-style">
          Lo que dicen nuestros entrevistados
        </h2>
        <p className="interviews-long-subtitle">
          Hablamos con personas que organizan viajes en grupo a menudo. Estas son algunas
          de sus experiencias y dolores a la hora de planificar.
        </p>

        <div className="interviews-long-list">
          {interviews.map((interview, index) => (
            <InterviewItem
              key={index}
              index={index}
              name={interview.name}
              role={interview.role}
              image={interview.image}
              text={interview.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
