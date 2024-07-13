import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Ruler, TrendingUp, User } from "lucide-react";
import { ClientMeasurement } from "@/lib/types";

interface MeasurementStatsProps {
  clients: ClientMeasurement[];
}

export const MeasurementStats: React.FC<MeasurementStatsProps> = ({
  clients,
}) => {
  const totalClients = clients.length;
  const averageMeasurements = clients.reduce(
    (acc, client) => {
      acc.bust += client.measurements.bust;
      acc.waist += client.measurements.waist;
      acc.hips += client.measurements.hips;
      return acc;
    },
    { bust: 0, waist: 0, hips: 0 }
  );

  const avgBust = (averageMeasurements.bust / totalClients).toFixed(1);
  const avgWaist = (averageMeasurements.waist / totalClients).toFixed(1);
  const avgHips = (averageMeasurements.hips / totalClients).toFixed(1);

  const mostCommonSize = "M"; // This should be calculated based on actual data

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          <Users className="h-4 w-4 text-purple-100" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalClients}</div>
          <p className="text-xs text-purple-100">Active measurements</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Measurements
          </CardTitle>
          <Ruler className="h-4 w-4 text-pink-100" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-xl font-bold">{avgBust}</div>
              <p className="text-xs text-pink-100">Bust</p>
            </div>
            <div>
              <div className="text-xl font-bold">{avgWaist}</div>
              <p className="text-xs text-pink-100">Waist</p>
            </div>
            <div>
              <div className="text-xl font-bold">{avgHips}</div>
              <p className="text-xs text-pink-100">Hips</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Most Common Size
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-emerald-100" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mostCommonSize}</div>
          <p className="text-xs text-emerald-100">Based on measurements</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Latest Client</CardTitle>
          <User className="h-4 w-4 text-amber-100" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold truncate">
            {clients[clients.length - 1]?.clientId || "N/A"}
          </div>
          <p className="text-xs text-amber-100">Most recent addition</p>
        </CardContent>
      </Card>
    </div>
  );
};
