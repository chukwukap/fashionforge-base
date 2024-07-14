import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClientMeasurement } from "@/lib/types";

interface EditClientModalProps {
  clientMeasurements: ClientMeasurement;
  isOpen: boolean;
  onClose: () => void;
  onUpdateClient: (data: Partial<ClientMeasurement>) => void;
}

// Mock function to fetch client data
const fetchClientData = (clientId: string) => {
  const mockClients = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com" },
    { id: "2", name: "Bob Smith", email: "bob@example.com" },
  ];
  return mockClients.find((client) => client.id === clientId);
};

export const EditClientModal: React.FC<EditClientModalProps> = ({
  clientMeasurements,
  isOpen,
  onClose,
  onUpdateClient,
}) => {
  const clientData = fetchClientData(clientMeasurements.clientId);
  const [name, setName] = useState(clientData?.name || "");
  const [email, setEmail] = useState(clientData?.email || "");
  const [height, setHeight] = useState(
    clientMeasurements.measurements.height.toString()
  );
  const [weight, setWeight] = useState(
    clientMeasurements.measurements.weight.toString()
  );

  const [bust, setBust] = useState(
    clientMeasurements.measurements.bust.toString()
  );
  const [waist, setWaist] = useState(
    clientMeasurements.measurements.waist.toString()
  );
  const [hips, setHips] = useState(
    clientMeasurements.measurements.hips.toString()
  );

  useEffect(() => {
    const updatedClientData = fetchClientData(clientMeasurements.clientId);
    setName(updatedClientData?.name || "");
    setEmail(updatedClientData?.email || "");
    setBust(clientMeasurements.measurements.bust.toString());
    setWaist(clientMeasurements.measurements.waist.toString());
    setHips(clientMeasurements.measurements.hips.toString());
  }, [clientMeasurements]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateClient({
      clientId: clientMeasurements.clientId,
      measurements: {
        bust: parseFloat(bust),
        waist: parseFloat(waist),
        hips: parseFloat(hips),
        height: parseFloat(height),
        weight: parseFloat(weight),
      },
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="edit-name">Name</Label>
            <Input
              id="edit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled
            />
          </div>
          <div>
            <Label htmlFor="edit-email">Email</Label>
            <Input
              id="edit-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
            />
          </div>
          <div>
            <Label htmlFor="edit-bust">Bust (cm)</Label>
            <Input
              id="edit-bust"
              type="number"
              value={bust}
              onChange={(e) => setBust(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="edit-waist">Waist (cm)</Label>
            <Input
              id="edit-waist"
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="edit-hips">Hips (cm)</Label>
            <Input
              id="edit-hips"
              type="number"
              value={hips}
              onChange={(e) => setHips(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Update Client</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
