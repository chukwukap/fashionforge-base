import React from "react";
import { Sparkles } from "lucide-react";

const fabrics = [
  { name: "Recycled Polyester", trend: "up", percentage: 15 },
  { name: "Organic Cotton", trend: "up", percentage: 22 },
  { name: "Bamboo Silk", trend: "new", percentage: 0 },
  { name: "Hemp Blend", trend: "up", percentage: 10 },
  { name: "Lyocell", trend: "steady", percentage: 0 },
];

export function TrendingFabrics() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Trending Fabrics
      </h3>
      <ul className="space-y-3">
        {fabrics.map((fabric, index) => (
          <li key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{fabric.name}</span>
            {fabric.trend === "up" && (
              <span className="text-green-500 text-sm font-medium">
                ↑ {fabric.percentage}%
              </span>
            )}
            {fabric.trend === "new" && (
              <span className="text-purple-500 text-sm font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-1" />
                New
              </span>
            )}
            {fabric.trend === "steady" && (
              <span className="text-gray-500 text-sm font-medium">―</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
