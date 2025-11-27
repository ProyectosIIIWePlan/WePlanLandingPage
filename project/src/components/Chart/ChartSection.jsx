import React from "react";
import Chart from "./Chart.jsx"; // Asegúrate de que el componente Chart esté importado correctamente
import "./Chart.css"; // Importamos los estilos del gráfico

export default function ProblemCharts() {
  const data = [
    {
      title: "Tiempo perdido en planificación",
      percentage: 70,
      description: "El 70% de las personas pierden más de 5 horas organizando detalles de viaje.",
      color: "#FF6F61", // Color del segmento
    },
    {
      title: "Problemas con presupuesto",
      percentage: 50,
      description: "El 50% de los viajeros pierden tiempo resolviendo el presupuesto.",
      color: "#5C6BC0",
    },
    {
      title: "Coordinación de actividades",
      percentage: 60,
      description: "El 60% de los grupos tienen dificultades para decidir actividades.",
      color: "#00BFAE",
    },
  ];

  return (
    <section className="problem-charts">
      <h2 className="section-title text-style">El Problema</h2>
      <div className="charts-container">
        {data.map((item, index) => (
          <div
            key={index}
            className={`chart-item ${index % 2 === 0 ? "left" : "right"}`}>
            <Chart
              title={item.title}
              percentage={item.percentage}
              description={item.description}
              color={item.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
