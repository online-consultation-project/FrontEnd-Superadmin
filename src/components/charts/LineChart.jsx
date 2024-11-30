import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Chart data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], 
    datasets: [
      {
        label: "Daily Appointments",
        data: [50, 75, 40, 90, 120, 70, 100], 
        borderColor: "#36A2EB", 
        backgroundColor: "rgba(54, 162, 235, 0.2)", 
        tension: 0.4,
        fill: true,
      },
      {
        label: "Daily Users",
        data: [40, 60, 55, 80, 110, 65, 90], 
        borderColor: "#FF6384", 
        backgroundColor: "rgba(255, 99, 132, 0.2)", 
        tension: 0.4, 
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Legend position
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days of the Week",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true, // Start y-axis at 0
      },
    },
  };

  return (
    <div className="w-[590px] m-auto">
      <h2 className="text-center mb-4">Daily Appointments and Users</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
