import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Custom Designs", "Ready-to-Wear", "Accessories", "Consultations"],
  datasets: [
    {
      data: [45, 30, 15, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    tooltip: {
      backgroundColor: "#f8fafc",
      titleColor: "#1e293b",
      bodyColor: "#1e293b",
      borderColor: "#e2e8f0",
      borderWidth: 1,
      borderRadius: 8,
      padding: 12,
    },
  },
};

export function RevenueBreakdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="w-full h-[400px]">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Doughnut data={data} options={options} />
        </CardContent>
      </Card>
    </motion.div>
  );
}
