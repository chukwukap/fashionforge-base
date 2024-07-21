import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import {
  BellIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const notificationTypes = [
  { id: "emailNotifications", name: "Email Notifications", icon: EnvelopeIcon },
  {
    id: "pushNotifications",
    name: "Push Notifications",
    icon: DevicePhoneMobileIcon,
  },
  { id: "newMessages", name: "New Messages", icon: BellIcon },
  { id: "newOrders", name: "New Orders", icon: ShoppingBagIcon },
  { id: "promotions", name: "Promotions and Offers", icon: TagIcon },
];

export function NotificationPreferences() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    newMessages: true,
    newOrders: true,
    promotions: false,
  });

  const togglePreference = (id: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Notification Preferences
      </h2>
      <div className="space-y-6">
        {notificationTypes.map(({ id, name, icon: Icon }) => (
          <div
            key={id}
            className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-xl"
          >
            <div className="flex items-center space-x-4">
              <Icon className="h-6 w-6 text-pink-400" />
              <span className="text-white">{name}</span>
            </div>
            <Switch
              checked={preferences[id as keyof typeof preferences]}
              onChange={() => togglePreference(id as keyof typeof preferences)}
              className={`${
                preferences[id as keyof typeof preferences]
                  ? "bg-purple-600"
                  : "bg-gray-600"
              } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
            >
              <span
                className={`${
                  preferences[id as keyof typeof preferences]
                    ? "translate-x-6"
                    : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>
      <motion.button
        className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Save Preferences
      </motion.button>
    </motion.div>
  );
}
