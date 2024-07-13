import { useState, useEffect } from "react";
import { ClientMeasurement } from "@/lib/types";

export const useClientMeasurements = () => {
  const [clients, setClients] = useState<ClientMeasurement[]>([]);

  useEffect(() => {
    // Fetch clients from API or load from local storage
    const loadedClients = localStorage.getItem("clients");
    if (loadedClients) {
      setClients(JSON.parse(loadedClients));
    }
  }, []);

  const addClient = (newClient: Omit<ClientMeasurement, "id">) => {
    const clientWithId = { ...newClient, id: Date.now().toString() };
    setClients((prevClients) => [...prevClients, clientWithId]);
    localStorage.setItem("clients", JSON.stringify([...clients, clientWithId]));
  };

  const updateClient = (
    id: string,
    updatedData: Partial<ClientMeasurement>
  ) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id ? { ...client, ...updatedData } : client
      )
    );
    localStorage.setItem("clients", JSON.stringify(clients));
  };

  const deleteClient = (id: string) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
    localStorage.setItem(
      "clients",
      JSON.stringify(clients.filter((client) => client.id !== id))
    );
  };

  return { clients, addClient, updateClient, deleteClient };
};
