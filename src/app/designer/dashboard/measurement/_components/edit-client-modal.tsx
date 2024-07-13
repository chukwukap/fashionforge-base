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
  client: ClientMeasurement;
  isOpen: boolean;
  onClose: () => void;
  onUpdateClient: (data: Partial<ClientMeasurement>) => void;
}

export const EditClientModal: React.FC<EditClientModalProps> = ({
  client,
  isOpen,
  onClose,
  onUpdateClient,
}) => {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [bust, setBust] = useState(client.measurements.bust.toString());
  const [waist, setWaist] = useState(client.measurements.waist.toString());
  const [hips, setHips] = useState(client.measurements.hips.toString());

  useEffect(() => {
    setName(client.name);
    setEmail(client.email);
    setBust(client.measurements.bust.toString());
    setWaist(client.measurements.waist.toString());
    setHips(client.measurements.hips.toString());
  }, [client]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateClient({
      name,
      email,
      measurements: {
        bust: parseFloat(bust),
        waist: parseFloat(waist),
        hips: parseFloat(hips),
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
