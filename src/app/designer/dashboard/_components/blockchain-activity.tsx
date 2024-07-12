import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "NFT Mint",
    amount: "0.5 ETH",
    time: "2 hours ago",
    status: "Completed",
  },
  {
    id: 2,
    type: "Royalty Payment",
    amount: "0.25 ETH",
    time: "1 day ago",
    status: "Completed",
  },
  {
    id: 3,
    type: "Design Transfer",
    amount: "- -",
    time: "3 days ago",
    status: "Pending",
  },
];

export function BlockchainActivity() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 px-7 py-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <TrendingUp className="h-5 w-5 text-indigo-500" />
          Blockchain Activity
        </h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {transactions.map((tx, index) => (
            <motion.li
              key={tx.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-indigo-100 p-2">
                  <DollarSign className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{tx.amount}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${
                    tx.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {tx.status}
                </p>
                <p className="flex items-center text-xs text-gray-500">
                  <Clock className="mr-1 h-3 w-3" />
                  {tx.time}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
