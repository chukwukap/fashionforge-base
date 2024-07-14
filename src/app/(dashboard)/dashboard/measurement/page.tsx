"use client";
import React, { useState } from "react";
import { MeasurementsTable } from "./_components/measurement-table";
import { MeasurementHistory } from "./_components/measurement-history";
import { MeasurementComparison } from "./_components/measurement-comparison";
import { SizeRecommendations } from "./_components/size-recommendations";
import { MeasurementVisualization } from "./_components/measurement-visualization";
import { CustomMeasurements } from "./_components/custom-measurement-fields";
import { SearchBar } from "./_components/search-bar";
import { MeasurementStats } from "./_components/measurement-stats";
import { useClientMeasurements } from "@/lib/hooks/useClientMeasurement";
import { ClientMeasurement } from "@/lib/types";
import { sampleHistoryData } from "@/lib/mocks";

type HistoryEntry = {
  date: string;
  measurements: ClientMeasurement;
};
const MeasurementsPage: React.FC = () => {
  const { clients, addClient, updateClient, deleteClient } =
    useClientMeasurements();
  const [selectedClient, setSelectedClient] =
    useState<ClientMeasurement | null>(clients[0]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to get client measurement history
  const getClientHistory = (
    clientId: string
  ): { date: string; bust: number; waist: number; hips: number }[] => {
    const history: HistoryEntry[] = sampleHistoryData[clientId] || [];
    return history.map(({ date, measurements }) => ({
      date,
      bust: measurements.measurements.bust,
      waist: measurements.measurements.waist,
      hips: measurements.measurements.hips,
    }));
  };
  // Function to calculate average measurements across all clients
  const getAverageMeasurements = () => {
    // In a real application, you would calculate this based on all client data
    // Here, we're using a simplified average based on our sample data
    const allMeasurements = Object.values(sampleHistoryData).flatMap(
      (history) => history.map((entry) => entry.measurements)
    );

    const totalClients = allMeasurements.length;
    const sumMeasurements = allMeasurements.reduce(
      (sum, measurement) => ({
        bust: sum.bust + measurement.measurements.bust,
        waist: sum.waist + measurement.measurements.waist,
        hips: sum.hips + measurement.measurements.hips,
      }),
      { bust: 0, waist: 0, hips: 0 }
    );

    return {
      bust: Math.round(sumMeasurements.bust / totalClients),
      waist: Math.round(sumMeasurements.waist / totalClients),
      hips: Math.round(sumMeasurements.hips / totalClients),
    };
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Client Measurements
      </h1>

      <MeasurementStats clients={clients} />

      <SearchBar
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
      />

      <MeasurementsTable
        clientMeasurements={clients}
        onAddClient={addClient}
        onUpdateClient={updateClient}
        onDeleteClient={deleteClient}
        onSelectClient={setSelectedClient}
      />

      {selectedClient && (
        <div className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MeasurementHistory history={getClientHistory(selectedClient.id)} />
            <MeasurementComparison
              clientMeasurements={selectedClient.measurements}
              averageMeasurements={getAverageMeasurements()}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SizeRecommendations measurements={selectedClient.measurements} />
            <MeasurementVisualization
              measurements={{
                ...selectedClient.measurements,
                shoulder: 0, // Add a default value or fetch from selectedClient
                inseam: 0, // Add a default value or fetch from selectedClient
              }}
            />
            <CustomMeasurements
              customMeasurements={selectedClient.customMeasurements || {}}
              onUpdate={(updatedMeasurements) => {
                updateClient(selectedClient.id, {
                  customMeasurements: updatedMeasurements,
                });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MeasurementsPage;
