import react from "../../assets/react.svg";
import "./BenefitsSection.css";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Ahorra tiempo",
      description:
        "La planificación de tu viaje se vuelve fácil y rápida. Organiza todo en un solo lugar y dedica tu tiempo a lo que importa: disfrutar.",
      icon: react,
    },
    {
      title: "Colaboración en tiempo real",
      description:
        "Todos los miembros del grupo pueden aportar y decidir en tiempo real. Votaciones y comentarios instantáneos.",
       icon: react,
    },
    {
      title: "Control de gastos",
      description:
        "Mantén el control de los gastos del viaje de forma clara y organizada. Todos los pagos, en un solo lugar.",
       icon: react,
    },
    {
      title: "Todo en un solo lugar",
      description:
        "Documentos, actividades, presupuesto y tareas, todo disponible para todos los miembros del grupo, siempre al alcance.",
       icon: react,
    },
  ];

  return (
    <section className="benefits-section">
      <h2 className="section-title text-style">Beneficios</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="benefit-icon"
            />
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
