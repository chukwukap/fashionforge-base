import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SizeRecommendationsProps {
  measurements: {
    bust: number;
    waist: number;
    hips: number;
  };
}

export const SizeRecommendations: React.FC<SizeRecommendationsProps> = ({
  measurements,
}) => {
  const getSizeRecommendation = (
    measurement: number,
    type: "bust" | "waist" | "hips"
  ) => {
    // This is a simplified example. You'd want to replace this with your actual size chart logic.
    const sizeCharts = {
      bust: [80, 88, 96, 104],
      waist: [60, 68, 76, 84],
      hips: [88, 96, 104, 112],
    };
    const sizes = ["XS", "S", "M", "L", "XL"];
    const chart = sizeCharts[type];
    for (let i = 0; i < chart.length; i++) {
      if (measurement < chart[i]) return sizes[i];
    }
    return sizes[sizes.length - 1];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Size Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="font-semibold">Bust</p>
            <p>{getSizeRecommendation(measurements.bust, "bust")}</p>
          </div>
          <div>
            <p className="font-semibold">Waist</p>
            <p>{getSizeRecommendation(measurements.waist, "waist")}</p>
          </div>
          <div>
            <p className="font-semibold">Hips</p>
            <p>{getSizeRecommendation(measurements.hips, "hips")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
