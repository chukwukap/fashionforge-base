import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const satisfactionData = [
  { rating: 5, percentage: 65, color: "bg-green-500" },
  { rating: 4, percentage: 25, color: "bg-lime-500" },
  { rating: 3, percentage: 7, color: "bg-yellow-500" },
  { rating: 2, percentage: 2, color: "bg-orange-500" },
  { rating: 1, percentage: 1, color: "bg-red-500" },
];

export function ClientSatisfaction() {
  return (
    <motion.div
      className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-white">
        Client Satisfaction
      </h2>
      <div className="space-y-4">
        {satisfactionData.map((item, index) => (
          <motion.div
            key={item.rating}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-1 w-20">
              {[...Array(item.rating)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
            <div className="flex-grow">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
            <span className="text-white font-medium w-12 text-right">
              {item.percentage}%
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
