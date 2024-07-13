import React, { useState } from "react";
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

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddClient: (client: Omit<ClientMeasurement, "id">) => void;
}

export const AddClientModal: React.FC<AddClientModalProps> = ({
  isOpen,
  onClose,
  onAddClient,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddClient({
      clientId: name,

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
          <DialogTitle>Add New Client</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="bust">Bust (cm)</Label>
            <Input
              id="bust"
              type="number"
              value={bust}
              onChange={(e) => setBust(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="waist">Waist (cm)</Label>
            <Input
              id="waist"
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="hips">Hips (cm)</Label>
            <Input
              id="hips"
              type="number"
              value={hips}
              onChange={(e) => setHips(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Add Client</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
