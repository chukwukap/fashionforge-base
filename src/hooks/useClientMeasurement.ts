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

// import { useState, useEffect } from "react";
// import { ClientMeasurement } from "@/lib/types";

// // Sample data
// const sampleClients: ClientMeasurement[] = [
//   {
//     id: "1",
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     measurements: {
//       bust: 88,
//       waist: 70,
//       hips: 96,
//     },
//     customMeasurements: {
//       shoulder: 38,
//       inseam: 76,
//     },
//   },
//   {
//     id: "2",
//     name: "Bob Smith",
//     email: "bob@example.com",
//     measurements: {
//       bust: 102,
//       waist: 86,
//       hips: 104,
//     },
//     customMeasurements: {
//       shoulder: 44,
//       inseam: 82,
//     },
//   },
//   {
//     id: "3",
//     name: "Carol Davis",
//     email: "carol@example.com",
//     measurements: {
//       bust: 92,
//       waist: 74,
//       hips: 100,
//     },
//     customMeasurements: {
//       shoulder: 40,
//       inseam: 78,
//     },
//   },
// ];

// export const useClientMeasurements = () => {
//   const [clients, setClients] = useState<ClientMeasurement[]>(sampleClients);

//   const addClient = (newClient: Omit<ClientMeasurement, "id">) => {
//     const clientWithId = { ...newClient, id: Date.now().toString() };
//     setClients((prevClients) => [...prevClients, clientWithId]);
//   };

//   const updateClient = (
//     id: string,
//     updatedData: Partial<ClientMeasurement>
//   ) => {
//     setClients((prevClients) =>
//       prevClients.map((client) =>
//         client.id === id ? { ...client, ...updatedData } : client
//       )
//     );
//   };

//   const deleteClient = (id: string) => {
//     setClients((prevClients) =>
//       prevClients.filter((client) => client.id !== id)
//     );
//   };

//   return { clients, addClient, updateClient, deleteClient };
// };
