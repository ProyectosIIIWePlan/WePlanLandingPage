import React from "react";
import ProblemBarChart from "./Chart.jsx"; // Importamos el componente para el gráfico
import "./Chart.css"; // Estilos del gráfico

export default function ProblemCharts() {
  const data = [
    {
      title: "Estrés al planificar",
      percentage: 71,
    },
    {
      title: "Familias con hijos",
      percentage: 78,
    },
    {
      title: "Problemas con el presupuesto",
      percentage: 50,
    },
    {
      title: "Dificultades para coordinar",
      percentage: 36.8,
    },
    {
      title: "Itinerario desalentador",
      percentage: 66,
    },
    {
      title: "Tensiones por presupuesto",
      percentage: 43,
    },
  ];

  return (
    <section id="problema" className="problem-charts">
      <h2 className="section-title text-style">Problemas frecuentes al organizar un viaje</h2>
      <div className="charts-container">
        <ProblemBarChart
          data={data}
          title="Estadísticas sobre los problemas comunes al organizar un viaje"
        />
      </div>
    </section>
  );
}
