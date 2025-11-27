import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registramos los elementos de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProblemBarChart = ({ data, title }) => {
  const chartData = {
    labels: data.map(item => item.title),  // Títulos de los problemas
    datasets: [
      {
        label: '% de personas afectadas',
        data: data.map(item => item.percentage),  // Porcentajes
        backgroundColor: ['#FF6F61', '#3F51B5', '#00BCD4', '#FFEB3B', '#9C27B0', '#8BC34A'],  // Colores personalizados
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 24,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}%`; // Mostrar el porcentaje en el tooltip
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Empieza en 0 para que se vea bien la escala
        ticks: {
          stepSize: 10, // Pasos en el eje Y
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ProblemBarChart;
