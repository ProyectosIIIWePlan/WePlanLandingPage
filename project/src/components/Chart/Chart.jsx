import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registramos los elementos de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ProblemChart = ({ percentage, title, description, color }) => {
  const chartData = {
    labels: [`${percentage}%`, `${100 - percentage}%`],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, "#ddd"], // Colores vibrantes
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Deshabilitamos el tooltip, ya que tenemos las etiquetas personalizadas
      },
      legend: {
        display: false, // No mostramos la leyenda de las gráficas
      },
    },
  };

  return (
    <div className="problem-chart-container">
      <div className="chart-item">
        <div className="chart-queso">
          <Doughnut data={chartData} options={options} />
        </div>
        <div className="chart-label">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemChart;
