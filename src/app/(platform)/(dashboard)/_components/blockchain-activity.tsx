// frontend/src/app/(platform)/(dashboard)/_components/blockchain-activity.tsx
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
    <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-7 py-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <TrendingUp className="h-5 w-5 text-blue-400" />
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
              className="flex items-center justify-between border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gray-700 p-2">
                  <DollarSign className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{tx.type}</p>
                  <p className="text-sm text-gray-400">{tx.amount}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${
                    tx.status === "Completed"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {tx.status}
                </p>
                <p className="flex items-center text-xs text-gray-400">
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
