"use client";
import React, { useState, useEffect } from "react";
import { OrdersTable } from "./_components/orders-table";
import { OrderStatusFilter } from "./_components/order-status-filter";
import { OrderStatistics } from "./_components/order-statistics";
import { RecentActivities } from "./_components/recent-activities";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { toast } from "sonner";
import { CreateOrderDialog } from "./_components/create-order-dialog";

export type Order = {
  id: string;
  orderNumber: string;
  clientName: string;
  productName: string;
  designType: "digital_sketch" | "3d_model" | "pattern" | "full_design";
  quantity: number;
  status: "pending" | "in_progress" | "revision" | "completed" | "delivered";
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
};

// Dummy data
const dummyOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-001",
    clientName: "Alice Johnson",
    productName: "Summer Dress Design",
    designType: "digital_sketch",
    quantity: 1,
    status: "in_progress",
    totalAmount: 250,
    createdAt: "2023-05-01T10:00:00Z",
    updatedAt: "2023-05-02T14:30:00Z",
  },
  {
    id: "2",
    orderNumber: "ORD-002",
    clientName: "Bob Smith",
    productName: "Casual Shirt 3D Model",
    designType: "3d_model",
    quantity: 1,
    status: "pending",
    totalAmount: 350,
    createdAt: "2023-05-03T09:15:00Z",
    updatedAt: "2023-05-03T09:15:00Z",
  },
  {
    id: "3",
    orderNumber: "ORD-003",
    clientName: "Charlie Brown",
    productName: "Jeans Pattern",
    designType: "pattern",
    quantity: 1,
    status: "completed",
    totalAmount: 200,
    createdAt: "2023-04-28T11:30:00Z",
    updatedAt: "2023-05-01T16:45:00Z",
  },
  {
    id: "4",
    orderNumber: "ORD-004",
    clientName: "Diana Prince",
    productName: "Evening Gown Full Design",
    designType: "full_design",
    quantity: 1,
    status: "revision",
    totalAmount: 500,
    createdAt: "2023-05-02T13:00:00Z",
    updatedAt: "2023-05-04T10:20:00Z",
  },
  {
    id: "5",
    orderNumber: "ORD-005",
    clientName: "Ethan Hunt",
    productName: "Sportswear Concept",
    designType: "digital_sketch",
    quantity: 2,
    status: "delivered",
    totalAmount: 300,
    createdAt: "2023-04-25T14:45:00Z",
    updatedAt: "2023-05-03T11:10:00Z",
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(dummyOrders);
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  useEffect(() => {
    filterOrders();
  }, [orders, statusFilter, searchTerm]);

  const filterOrders = () => {
    let filtered = orders;
    if (statusFilter.length > 0) {
      filtered = filtered.filter((order) =>
        statusFilter.includes(order.status)
      );
    }
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(lowercasedTerm) ||
          order.clientName.toLowerCase().includes(lowercasedTerm) ||
          order.productName.toLowerCase().includes(lowercasedTerm)
      );
    }
    setFilteredOrders(filtered);
  };

  const handleCreateOrder = (
    newOrder: Omit<Order, "id" | "createdAt" | "updatedAt">
  ) => {
    const createdOrder: Order = {
      ...newOrder,
      id: `${orders.length + 1}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setOrders([...orders, createdOrder]);
    toast.success("Order created successfully");
    setIsCreateDialogOpen(false);
  };

  const handleUpdateOrderStatus = (
    orderId: string,
    newStatus: Order["status"]
  ) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: newStatus, updatedAt: new Date().toISOString() }
        : order
    );
    setOrders(updatedOrders);
    toast.success("Order status updated successfully");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create Order
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <OrderStatusFilter
              selectedStatuses={statusFilter}
              onStatusChange={setStatusFilter}
            />
          </div>

          <OrdersTable
            orders={filteredOrders}
            isLoading={isLoading}
            onUpdateStatus={handleUpdateOrderStatus}
          />
        </div>

        <div className="space-y-6">
          <OrderStatistics orders={orders} />
          <RecentActivities orders={orders} />
        </div>
      </div>

      <CreateOrderDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onCreateOrder={handleCreateOrder}
      />
    </div>
  );
}
