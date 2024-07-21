import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MeasurementComparisonProps {
  clientMeasurements: {
    bust: number;
    waist: number;
    hips: number;
  };
  averageMeasurements: {
    bust: number;
    waist: number;
    hips: number;
  };
}

export const MeasurementComparison: React.FC<MeasurementComparisonProps> = ({
  clientMeasurements,
  averageMeasurements,
}) => {
  const data = {
    labels: ["Bust", "Waist", "Hips"],
    datasets: [
      {
        label: "Client Measurements",
        data: [
          clientMeasurements.bust,
          clientMeasurements.waist,
          clientMeasurements.hips,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Average Measurements",
        data: [
          averageMeasurements.bust,
          averageMeasurements.waist,
          averageMeasurements.hips,
        ],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Measurement Comparison</h3>
      <Bar data={data} />
    </div>
  );
};
