import hora from "../../assets/hora.png";
import travel from "../../assets/travel.png";
import dinero from "../../assets/dinero.png";
import molecular from "../../assets/molecular.png";
import "./BenefitsSection.css";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Ahorra tiempo",
      description:
        "Agiliza la planificación de tu viaje al máximo para dedicar tu tiempo a lo que más importa: disfrutar.",
      icon: hora,
    },
    {
      title: "Gestiones en grupo",
      description:
        "Organizad el viaje mediante grupos para que todos los miembros tengan una visión clara del viaje.",
       icon: travel,
    },
    {
      title: "Control de gastos",
      description:
        "Mantén el control de los gastos del viaje de forma clara y organizada. Todos los pagos, en un solo lugar.",
       icon: dinero,
    },
    {
      title: "Una sola aplicación",
      description:
        "Documentos, actividades, presupuesto y tareas, todo disponible para todos los miembros del grupo, siempre al alcance.",
       icon: molecular,
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
