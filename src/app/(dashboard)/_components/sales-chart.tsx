import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000, nftSales: 2400 },
  { name: "Feb", sales: 3000, nftSales: 1398 },
  { name: "Mar", sales: 2000, nftSales: 9800 },
  { name: "Apr", sales: 2780, nftSales: 3908 },
  { name: "May", sales: 1890, nftSales: 4800 },
  { name: "Jun", sales: 2390, nftSales: 3800 },
  { name: "Jul", sales: 3490, nftSales: 4300 },
];

export function SalesChart() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Sales Overview
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="nftSales"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
