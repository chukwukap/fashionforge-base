import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order } from "../page";

interface CreateOrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateOrder: (order: Omit<Order, "id" | "createdAt" | "updatedAt">) => void;
}

export const CreateOrderDialog: React.FC<CreateOrderDialogProps> = ({
  isOpen,
  onClose,
  onCreateOrder,
}) => {
  const [orderData, setOrderData] = useState({
    orderNumber: "",
    clientName: "",
    productName: "",
    designType: "digital_sketch" as Order["designType"],
    quantity: 1,
    status: "pending" as Order["status"],
    totalAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (
    name: string,
    value: Order["designType"] | Order["status"]
  ) => {
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateOrder(orderData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Order</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="orderNumber" className="text-right">
                Order Number
              </Label>
              <Input
                id="orderNumber"
                name="orderNumber"
                value={orderData.orderNumber}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="clientName" className="text-right">
                Client Name
              </Label>
              <Input
                id="clientName"
                name="clientName"
                value={orderData.clientName}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="productName" className="text-right">
                Product Name
              </Label>
              <Input
                id="productName"
                name="productName"
                value={orderData.productName}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="designType" className="text-right">
                Design Type
              </Label>
              <Select
                onValueChange={(value: Order["designType"]) =>
                  handleSelectChange("designType", value)
                }
                defaultValue={orderData.designType}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select design type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital_sketch">Digital Sketch</SelectItem>
                  <SelectItem value="3d_model">3D Model</SelectItem>
                  <SelectItem value="pattern">Pattern</SelectItem>
                  <SelectItem value="full_design">Full Design</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                value={orderData.quantity}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="totalAmount" className="text-right">
                Total Amount
              </Label>
              <Input
                id="totalAmount"
                name="totalAmount"
                type="number"
                value={orderData.totalAmount}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Order</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
