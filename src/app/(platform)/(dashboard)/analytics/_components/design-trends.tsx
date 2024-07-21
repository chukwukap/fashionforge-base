import React from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Minimalist", "Bohemian", "Vintage", "Streetwear", "Eco-friendly"],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Current Design Trends",
      color: "white",
      font: {
        size: 16,
      },
    },
  },
};

export function DesignTrends() {
  return (
    <motion.div
      className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Doughnut data={data} options={options} />
    </motion.div>
  );
}
