import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Scissors, Shirt, Palette } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Evening Wear", "Streetwear", "Vintage"],
  datasets: [
    {
      data: [3, 7, 2],
      backgroundColor: ["#F472B6", "#60A5FA", "#FBBF24"],
      hoverBackgroundColor: ["#DB2777", "#3B82F6", "#D97706"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

const stats = [
  {
    label: "Total Collections",
    value: 12,
    icon: Scissors,
    color: "text-pink-500",
  },
  { label: "In Production", value: 7, icon: Shirt, color: "text-blue-500" },
  { label: "Completed", value: 3, icon: Palette, color: "text-amber-500" },
];

export function ProjectInsights() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Collection Insights
      </h2>
      <div className="mb-6">
        <Doughnut data={data} options={options} />
      </div>
      <div className="grid gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <stat.icon className={`h-8 w-8 ${stat.color} mr-3`} />
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
