import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { LockClosedIcon, FingerPrintIcon } from "@heroicons/react/24/outline";

export function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Security Settings
      </h2>
      <form onSubmit={handlePasswordChange} className="space-y-6">
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Current Password
          </label>
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-white placeholder-gray-400"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Change Password
        </motion.button>
      </form>
      <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FingerPrintIcon className="h-6 w-6 text-pink-400" />
            <span className="text-white">Two-Factor Authentication</span>
          </div>
          <Switch
            checked={twoFactor}
            onChange={setTwoFactor}
            className={`${
              twoFactor ? "bg-purple-600" : "bg-gray-600"
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
          >
            <span
              className={`${
                twoFactor ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Enable two-factor authentication for an extra layer of security on
          your account.
        </p>
      </div>
    </motion.div>
  );
}
