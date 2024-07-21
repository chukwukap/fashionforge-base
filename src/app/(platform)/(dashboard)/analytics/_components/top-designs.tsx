import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

const topDesigns = [
  {
    id: 1,
    name: "Summer Breeze Dress",
    sales: 89,
    revenue: "$4,450",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Urban Chic Jacket",
    sales: 76,
    revenue: "$6,080",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Boho Bliss Skirt",
    sales: 62,
    revenue: "$3,100",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Elegant Evening Gown",
    sales: 58,
    revenue: "$8,700",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Casual Denim Collection",
    sales: 51,
    revenue: "$3,570",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
];
export function TopDesigns() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Top Selling Designs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {topDesigns.map((design, index) => (
              <motion.li
                key={design.id}
                className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center"
                >
                  {index + 1}
                </Badge>
                <Image
                  src={design.image}
                  alt={design.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="flex-grow">
                  <p className="font-medium text-gray-800">{design.name}</p>
                  <p className="text-sm text-gray-500">{design.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    {design.revenue}
                  </p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
