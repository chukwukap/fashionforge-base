import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MeasurementHistoryProps {
  history: {
    date: string;
    bust: number;
    waist: number;
    hips: number;
  }[];
}

export const MeasurementHistory: React.FC<MeasurementHistoryProps> = ({
  history,
}) => {
  const data = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
        label: "Bust",
        data: history.map((entry) => entry.bust),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Waist",
        data: history.map((entry) => entry.waist),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Hips",
        data: history.map((entry) => entry.hips),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Measurement History</h3>
      <Line data={data} />
    </div>
  );
};
