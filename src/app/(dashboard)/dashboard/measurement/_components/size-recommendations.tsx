import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type MeasurementType = "bust" | "waist" | "hips";

interface Measurements {
  bust: number;
  waist: number;
  hips: number;
}

interface SizeRecommendationsProps {
  measurements: Measurements;
}

const sizeCharts: Record<MeasurementType, number[]> = {
  bust: [80, 88, 96, 104],
  waist: [60, 68, 76, 84],
  hips: [88, 96, 104, 112],
};

const sizes = ["XS", "S", "M", "L", "XL"] as const;
type Size = (typeof sizes)[number];

export const SizeRecommendations: React.FC<SizeRecommendationsProps> = ({
  measurements,
}) => {
  const getSizeRecommendation = (
    measurement: number,
    type: MeasurementType
  ): Size => {
    const chart = sizeCharts[type];
    const index = chart.findIndex((value) => measurement < value);
    return index === -1 ? sizes[sizes.length - 1] : sizes[index];
  };

  const getProgressPercentage = (
    measurement: number,
    type: MeasurementType
  ): number => {
    const [min, max] = sizeCharts[type].slice(0, -1);
    return Math.min(
      100,
      Math.max(0, ((measurement - min) / (max - min)) * 100)
    );
  };

  const recommendedSizes = useMemo(
    () =>
      Object.entries(measurements).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: getSizeRecommendation(value, key as MeasurementType),
        }),
        {} as Record<MeasurementType, Size>
      ),
    [measurements]
  );

  const overallSize = useMemo(() => {
    const sortedSizes = Object.values(recommendedSizes).sort(
      (a, b) => sizes.indexOf(a) - sizes.indexOf(b)
    );
    return sortedSizes[Math.floor(sortedSizes.length / 2)];
  }, [recommendedSizes]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Size Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">
              Overall Recommended Size
            </p>
            <p className="text-4xl font-bold text-indigo-600">{overallSize}</p>
          </div>
          <div className="space-y-4">
            {(
              Object.entries(recommendedSizes) as [MeasurementType, Size][]
            ).map(([type, size]) => (
              <div key={type} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-700 capitalize">
                    {type}
                  </p>
                  <p className="text-sm font-semibold text-indigo-600">
                    {size}
                  </p>
                </div>
                <Progress
                  value={getProgressPercentage(measurements[type], type)}
                  className="h-2"
                />
                <p className="text-xs text-gray-500 text-right">
                  {measurements[type]} cm
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
