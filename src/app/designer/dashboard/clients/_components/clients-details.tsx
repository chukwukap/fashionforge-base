import { ClientMeasurement } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ClientDetailsProps {
  client: ClientMeasurement;
  onUpdate: (updatedClient: ClientMeasurement) => void;
}

export default function ClientDetails({
  client,
  onUpdate,
}: ClientDetailsProps) {
  const [editedClient, setEditedClient] = useState(client);

  const handleInputChange = (field: string, value: string | number) => {
    setEditedClient((prev) => ({
      ...prev,
      [field]: value,
      measurements:
        field in prev.measurements
          ? { ...prev.measurements, [field]: Number(value) }
          : prev.measurements,
      customMeasurements:
        field in (prev.customMeasurements || {})
          ? { ...(prev.customMeasurements || {}), [field]: Number(value) }
          : prev.customMeasurements,
    }));
  };

  const handleSubmit = () => {
    onUpdate(editedClient);
  };

  return (
    <Card className="w-2/3 ml-6">
      <CardHeader>
        <CardTitle>Client Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4"
        >
          <Input
            placeholder="Name"
            value={editedClient.clientId}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <Input
            placeholder="Email"
            value={editedClient.clientId}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <h3 className="font-semibold mt-4">Measurements</h3>
          {Object.entries(editedClient.measurements).map(([key, value]) => (
            <Input
              key={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
              type="number"
            />
          ))}
          {editedClient.customMeasurements && (
            <>
              <h3 className="font-semibold mt-4">Custom Measurements</h3>
              {Object.entries(editedClient.customMeasurements).map(
                ([key, value]) => (
                  <Input
                    key={key}
                    placeholder={key}
                    value={value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    type="number"
                  />
                )
              )}
            </>
          )}
          <Button type="submit" className="mt-4">
            Update Client
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
