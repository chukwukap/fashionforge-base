import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Order } from "../page";

interface OrdersTableProps {
  orders: Order[];
  isLoading: boolean;
  onUpdateStatus: (orderId: string, newStatus: Order["status"]) => void;
}

export const OrdersTable: React.FC<OrdersTableProps> = ({
  orders,
  isLoading,
  onUpdateStatus,
}) => {
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in_production":
        return "bg-blue-100 text-blue-800";
      case "quality_check":
        return "bg-purple-100 text-purple-800";
      case "shipped":
        return "bg-green-100 text-green-800";
      case "delivered":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order Number</TableHead>
          <TableHead>Client Name</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Updated At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.orderNumber}</TableCell>
            <TableCell>{order.clientName}</TableCell>
            <TableCell>{order.productName}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  order.status
                )}`}
              >
                {order.status.replace("_", " ")}
              </span>
            </TableCell>
            <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
            <TableCell>{new Date(order.updatedAt).toLocaleString()}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Update Status <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => onUpdateStatus(order.id, "pending")}
                  >
                    Pending
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onUpdateStatus(order.id, "in_production")}
                  >
                    In Production
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onUpdateStatus(order.id, "quality_check")}
                  >
                    Quality Check
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onUpdateStatus(order.id, "shipped")}
                  >
                    Shipped
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onUpdateStatus(order.id, "delivered")}
                  >
                    Delivered
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
