"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab } from "@headlessui/react";
import {
  CogIcon,
  BellIcon,
  LockClosedIcon,
  CreditCardIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { ProfileSettings } from "./_components/profile-settings";
import { NotificationPreferences } from "./_components/notification-preferences";
import { SecuritySettings } from "./_components/security-settings";
import { BillingSettings } from "./_components/billing-settings";
import { ApiKeys } from "./_components/api-keys";

const tabs = [
  { name: "Profile", icon: CogIcon, component: ProfileSettings },
  { name: "Notifications", icon: BellIcon, component: NotificationPreferences },
  { name: "Security", icon: LockClosedIcon, component: SecuritySettings },
  { name: "Billing", icon: CreditCardIcon, component: BillingSettings },
  { name: "API", icon: KeyIcon, component: ApiKeys },
];

export default function SettingsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
          Designer Dashboard Settings
        </h1>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className="sm:flex">
              <Tab.List className="sm:w-64 bg-white bg-opacity-5 p-4 sm:p-8 space-y-2">
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      `w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out focus:outline-none ${
                        selected
                          ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                          : "text-gray-300 hover:bg-white hover:bg-opacity-10"
                      }`
                    }
                  >
                    <tab.icon className="h-6 w-6" />
                    <span>{tab.name}</span>
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="flex-1 p-4 sm:p-8">
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
            </div>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
