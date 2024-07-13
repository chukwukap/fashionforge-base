import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface MeasurementVisualizationProps {
  measurements: {
    bust: number;
    waist: number;
    hips: number;
    shoulder: number;
    inseam: number;
  };
}

export const MeasurementVisualization: React.FC<
  MeasurementVisualizationProps
> = ({ measurements }) => {
  const data = {
    labels: ["Bust", "Waist", "Hips", "Shoulder", "Inseam"],
    datasets: [
      {
        label: "Measurements",
        data: [
          measurements.bust,
          measurements.waist,
          measurements.hips,
          measurements.shoulder,
          measurements.inseam,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Measurement Visualization</h3>
      <Radar data={data} />
    </div>
  );
};
