import React, { useEffect, useRef, useState } from "react";
import "./InterviewSection.css";
import foto1 from "../../assets/david_aranda_bracamonte.png";

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
      image: "/images/laura.jpg",
      text:
        "Paula tiene 22 años, es de Plasencia (Extremadura) y estudia un doble grado de Comunicación Audiovisual y Diseño Digital y Multimedia en Madrid. \n\n" +
"Es una persona extrovertida, creativa y muy unida a su grupo de amigos de toda la vida, que ahora vive repartido por distintas ciudades de España. " +
"\n\nPara ella, los viajes en grupo son esenciales para mantener la amistad y seguir compartiendo experiencias juntos. " +
"Le apasionan la fotografía, el arte y descubrir destinos poco comunes, priorizando el enriquecimiento cultural frente a la fiesta o el turismo gastronómico. " +
"Sin embargo, se define como caótica y desastrosa para la organización, por lo que planificar un viaje le resulta una tarea muy tediosa. " +
"\n\nCuando se reúnen en Navidad suelen plantear la idea del viaje de verano, pero al regresar cada uno a su ciudad la organización se complica y se va posponiendo. " +
"En su grupo nadie quiere asumir el tiempo de buscar alojamientos, transporte y actividades, y las decisiones se vuelven largas y poco eficientes. " +
"\n\nPaula ha probado herramientas como Tricount para controlar los gastos y plataformas como Booking para el alojamiento, pero siente que solo resuelven partes del problema. " +
"Por eso, ve en WePlan una solución completa que les permita organizar el viaje de forma sencilla, ahorrar tiempo, evitar discusiones por pagos y disfrutar de viajar como cuando lo hacía con sus padres, sin preocuparse de nada."
    },
    {
      name: "David Aranda Bracamonte",
      role: "Estudiante de fisioterapia que organiza los viajes de su grupo de amigos.",
      image: foto1,
      text:
        "David tiene 20 años y estudia Fisioterapia; desde hace años se ha convertido en el organizador oficial de los viajes de su grupo de amigos, formado por 23 personas. " +
"Le encanta viajar en grupo y vivir experiencias juntos, pero cada viaje termina suponiéndole un esfuerzo enorme de coordinación y gestión. " +
"\n\nEs quien se encarga de proponer fechas, buscar destinos, comparar alojamientos, mirar transportes y montar una especie de planning general para que todos sepan qué se va a hacer. " +
"Aunque sus amigos valoran su papel, David siente que muchas veces la responsabilidad recae solo sobre él. " +
"\n\nUno de los mayores problemas es la gestión de los pagos: siempre hay alguien que tarda en hacer el Bizum, se mezclan adelantos, reservas y gastos compartidos, y al final acaba llevando una cuenta caótica en notas del móvil o en hojas de cálculo. " +
"Además, coordinar a 23 personas para que todos reserven lo mismo (mismo vuelo, mismo alojamiento, mismas actividades) es casi misión imposible: siempre hay despistados que compran tarde o se equivocan de horario. " +
"\n\nTambién se pierde mucho tiempo repitiendo información en diferentes grupos de chat, reenviando enlaces y aclarando qué está incluido y qué no. " +
"David imagina WePlan como una herramienta que centralice todo el viaje: que sea el lugar único donde ver el itinerario, las reservas y los plazos importantes. " +
"Le gustaría que la app simplificara los pagos con un fondo común o registros claros, evitando tener que perseguir a sus amigos uno a uno para cuadrar cuentas. " +
"\n\nPara él, el mayor beneficio sería ahorrar tiempo, reducir el estrés de organizar a tanta gente y poder disfrutar del viaje como uno más del grupo, sin tener que estar todo el rato pendiente de que nada se descontrole."
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
