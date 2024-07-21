"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  StarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { PerformanceOverview } from "./_components/performance-overview";
import { SalesChart } from "./_components/sales-chart";
import { ClientSatisfaction } from "./_components/client-satisfaction";
import { TopDesigns } from "./_components/top-designs";
import { DesignTrends } from "./_components/design-trends";

const tabs = [
  { name: "Overview", icon: ChartBarIcon, component: PerformanceOverview },
  { name: "Sales", icon: CurrencyDollarIcon, component: SalesChart },
  { name: "Satisfaction", icon: UserGroupIcon, component: ClientSatisfaction },
  { name: "Top Designs", icon: StarIcon, component: TopDesigns },
  { name: "Trends", icon: ArrowTrendingUpIcon, component: DesignTrends },
];

export default function AnalyticsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Designer Analytics Dashboard
        </motion.h1>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex p-2 space-x-2 bg-white bg-opacity-5">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm leading-5 font-medium rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 ${
                      selected
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow"
                        : "text-gray-300 hover:bg-white hover:bg-opacity-10"
                    }`
                  }
                >
                  <div className="flex items-center justify-center space-x-2">
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="p-4 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabs.map((tab, index) => (
                    <Tab.Panel
                      key={tab.name}
                      className={index === selectedIndex ? "" : "hidden"}
                    >
                      <tab.component />
                    </Tab.Panel>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
