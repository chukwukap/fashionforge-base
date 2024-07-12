import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Summer Breeze Dress", value: 400 },
  { name: "Cyber Punk Jacket", value: 300 },
  { name: "Eco-Friendly Jeans", value: 300 },
  { name: "Vintage Floral Blouse", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function DesignPopularity() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Design Popularity
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
