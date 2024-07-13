import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";

interface CustomMeasurementsProps {
  customMeasurements: Record<string, number>;
  onUpdate: (measurements: Record<string, number>) => void;
}

export const CustomMeasurements: React.FC<CustomMeasurementsProps> = ({
  customMeasurements,
  onUpdate,
}) => {
  const [newMeasurementName, setNewMeasurementName] = useState("");
  const [newMeasurementValue, setNewMeasurementValue] = useState("");

  const handleAddMeasurement = () => {
    if (newMeasurementName && newMeasurementValue) {
      const updatedMeasurements = {
        ...customMeasurements,
        [newMeasurementName]: parseFloat(newMeasurementValue),
      };
      onUpdate(updatedMeasurements);
      setNewMeasurementName("");
      setNewMeasurementValue("");
    }
  };

  const handleRemoveMeasurement = (key: string) => {
    const { [key]: _, ...updatedMeasurements } = customMeasurements;
    onUpdate(updatedMeasurements);
  };

  const handleUpdateMeasurement = (key: string, value: string) => {
    const updatedMeasurements = {
      ...customMeasurements,
      [key]: parseFloat(value),
    };
    onUpdate(updatedMeasurements);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Measurements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(customMeasurements).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Label className="w-1/3">{key}</Label>
              <Input
                type="number"
                value={value}
                onChange={(e) => handleUpdateMeasurement(key, e.target.value)}
                className="w-1/3"
              />
              <span className="w-1/6 text-sm">cm</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveMeasurement(key)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <div className="flex items-end space-x-2">
            <div className="w-1/3">
              <Label htmlFor="new-measurement-name">Name</Label>
              <Input
                id="new-measurement-name"
                value={newMeasurementName}
                onChange={(e) => setNewMeasurementName(e.target.value)}
              />
            </div>
            <div className="w-1/3">
              <Label htmlFor="new-measurement-value">Value</Label>
              <Input
                id="new-measurement-value"
                type="number"
                value={newMeasurementValue}
                onChange={(e) => setNewMeasurementValue(e.target.value)}
              />
            </div>
            <span className="w-1/6 text-sm">cm</span>
            <Button onClick={handleAddMeasurement}>
              <Plus className="h-4 w-4 mr-2" /> Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
