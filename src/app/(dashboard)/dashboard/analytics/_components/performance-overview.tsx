import React from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import {
  CurrencyDollarIcon,
  UsersIcon,
  ShoppingBagIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const metrics = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+15%",
    icon: CurrencyDollarIcon,
    color: "text-emerald-400",
  },
  {
    title: "New Clients",
    value: "54",
    change: "+8%",
    icon: UsersIcon,
    color: "text-blue-400",
  },
  {
    title: "Designs Sold",
    value: "89",
    change: "-3%",
    icon: ShoppingBagIcon,
    color: "text-purple-400",
  },
  {
    title: "Avg. Rating",
    value: "4.8",
    change: "+0.2",
    icon: StarIcon,
    color: "text-yellow-400",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.5%",
    icon: ArrowTrendingUpIcon,
    color: "text-pink-400",
  },
  {
    title: "Engagement",
    value: "78%",
    change: "+5%",
    icon: BoltIcon,
    color: "text-indigo-400",
  },
];

export function PerformanceOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <metric.icon className={`w-8 h-8 ${metric.color}`} />
            <span
              className={`text-sm font-medium ${
                metric.change.startsWith("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {metric.change.startsWith("+") ? (
                <ArrowUpIcon className="w-4 h-4 inline mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 inline mr-1" />
              )}
              {metric.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
          <p className="text-sm text-gray-300">{metric.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
