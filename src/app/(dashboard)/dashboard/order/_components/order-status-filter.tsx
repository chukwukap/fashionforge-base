import React from "react";
import { Button } from "@/components/ui/button";

interface OrderStatusFilterProps {
  selectedStatuses: string[];
  onStatusChange: (statuses: string[]) => void;
}

const statuses = [
  { value: "pending", label: "Pending" },
  { value: "in_production", label: "In Production" },
  { value: "quality_check", label: "Quality Check" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
];

export const OrderStatusFilter: React.FC<OrderStatusFilterProps> = ({
  selectedStatuses,
  onStatusChange,
}) => {
  const toggleStatus = (status: string) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter((s) => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  };

  return (
    <div className="flex space-x-2">
      {statuses.map((status) => (
        <Button
          key={status.value}
          variant={
            selectedStatuses.includes(status.value) ? "default" : "outline"
          }
          onClick={() => toggleStatus(status.value)}
        >
          {status.label}
        </Button>
      ))}
    </div>
  );
};
