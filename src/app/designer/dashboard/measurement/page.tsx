"use client";

import React, { useState } from "react";
import { MeasurementsTable } from "./_components/measurement-table";
import { AddClientModal } from "./_components/add-client-modal";
import { MeasurementStats } from "./_components/measurement-stats";
import { SearchBar } from "./_components/search-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useClientMeasurements } from "@/lib/hooks/useClientMeasurement";

const MeasurementsPage: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { clients, addClient, updateClient, deleteClient } =
    useClientMeasurements();

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Client Measurements
      </h1>

      <MeasurementStats clients={clients} />

      <div className="flex justify-between items-center mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </div>

      <MeasurementsTable
        clients={filteredClients}
        onUpdateClient={updateClient}
        onDeleteClient={deleteClient}
      />

      <AddClientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddClient={addClient}
      />
    </div>
  );
};

export default MeasurementsPage;
