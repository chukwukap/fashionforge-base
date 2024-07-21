import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

export function SalesChart() {
  return (
    <motion.div
      className="bg-white bg-opacity-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">Top Designs</h2>
      <div className="space-y-6">
        {topDesigns.map((design, index) => (
          <motion.div
            key={design.id}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={design.image}
                alt={design.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-white">
                {design.name}
              </h3>
              <p className="text-sm text-gray-300">
                Sales: {design.sales} | Revenue: {design.revenue}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
