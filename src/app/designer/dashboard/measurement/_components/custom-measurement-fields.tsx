import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CustomMeasurementsProps {
  customMeasurements: Record<string, number>;
}

export const CustomMeasurements: React.FC<CustomMeasurementsProps> = ({
  customMeasurements,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Measurements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(customMeasurements).map(([key, value]) => (
            <div key={key}>
              <p className="font-semibold">{key}</p>
              <p>{value} cm</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
