"use client";

import { useState } from "react";
import { ClientMeasurement, ClientUser } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

type ClientSummary = Pick<ClientUser, "id" | "name" | "email">;

const sampleClientsMeasurements: ClientMeasurement[] = [
  {
    id: "1",
    clientId: "1",
    measurements: {
      bust: 36,
      waist: 28,
      hips: 38,
      height: 165,
      weight: 60,
    },
    customMeasurements: {
      "Shoulder Width": 16,
      "Arm Length": 24,
    },
  },
  {
    id: "2",
    clientId: "2",
    measurements: {
      bust: 40,
      waist: 34,
      hips: 42,
      height: 180,
      weight: 75,
    },
  },
];

const sampleClients: ClientSummary[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
  },
];

export default function DesignerClientsPage() {
  const [clients] = useState<ClientSummary[]>(sampleClients);
  const [clientMeasurements] = useState<ClientMeasurement[]>(
    sampleClientsMeasurements
  );
  const [selectedClient, setSelectedClient] = useState<ClientSummary | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getClientMeasurements = (clientId: string) => {
    return clientMeasurements.find((cm) => cm.clientId === clientId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 p-6">
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-amber-800">
            My Clients
          </CardTitle>
          <div className="relative mt-4">
            <Input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-64 bg-white/50 backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3">
              <h2 className="text-xl font-bold mb-4 text-purple-600">
                Client List
              </h2>
              <ul className="space-y-2">
                {filteredClients.map((client) => (
                  <li
                    key={client.id}
                    onClick={() => setSelectedClient(client)}
                    className="p-3 rounded-md cursor-pointer transition-colors hover:bg-amber-100"
                  >
                    <div className="font-medium text-gray-900">
                      {client.name}
                    </div>
                    <div className="text-sm text-gray-500">{client.email}</div>
                    {/* <div
                      className={`text-sm mt-1 ${
                        client.projectStatus === "In Progress"
                          ? "text-amber-600"
                          : "text-green-600"
                      }`}
                    >
                      {client.projectStatus}
                    </div> */}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-2/3">
              {selectedClient ? (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-pink-600">
                    {selectedClient.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Email: {selectedClient.email}
                  </p>
                  {(() => {
                    const measurements = getClientMeasurements(
                      selectedClient.id
                    );
                    if (measurements) {
                      return (
                        <>
                          <h3 className="text-xl font-semibold mt-4 mb-2 text-indigo-600">
                            Measurements
                          </h3>
                          <ul className="space-y-2">
                            {Object.entries(measurements.measurements).map(
                              ([key, value]) => (
                                <li key={key} className="text-gray-700">
                                  {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                                  {value}
                                </li>
                              )
                            )}
                          </ul>
                          {measurements.customMeasurements && (
                            <>
                              <h3 className="text-xl font-semibold mt-4 mb-2 text-indigo-600">
                                Custom Measurements
                              </h3>
                              <ul className="space-y-2">
                                {Object.entries(
                                  measurements.customMeasurements
                                ).map(([key, value]) => (
                                  <li key={key} className="text-gray-700">
                                    {key}: {value}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </>
                      );
                    } else {
                      return (
                        <p className="text-gray-600">
                          No measurements found for this client.
                        </p>
                      );
                    }
                  })()}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Select a client to view details
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
