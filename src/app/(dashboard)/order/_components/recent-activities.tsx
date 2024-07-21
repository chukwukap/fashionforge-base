import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Order } from "../page";

interface RecentActivitiesProps {
  orders: Order[];
}

export const RecentActivities: React.FC<RecentActivitiesProps> = ({
  orders,
}) => {
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  const recentActivities = sortedOrders.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentActivities.map((order) => (
            <li key={order.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{order.orderNumber}</p>
                <p className="text-sm text-gray-500">{order.clientName}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${order.totalAmount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  {new Date(order.updatedAt).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
