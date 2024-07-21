import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

export function ApiKeys() {
  const [apiKey, setApiKey] = useState("sk_test_51ABC123DEF456GHI789JKL");
  const [showApiKey, setShowApiKey] = useState(false);

  const handleGenerateNewKey = () => {
    // Logic to generate new API key
    setApiKey("sk_test_" + Math.random().toString(36).substr(2, 32));
  };

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    // Show a toast or notification that the key was copied
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        API Keys
      </h2>
      <div className="space-y-6">
        <div className="bg-white bg-opacity-10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="apiKey"
              className="text-sm font-medium text-gray-300"
            >
              Your API Key
            </label>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="p-1 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {showApiKey ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-300" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-300" />
                )}
              </button>
              <button
                onClick={handleCopyApiKey}
                className="p-1 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring"
              >
                <ClipboardDocumentIcon className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <KeyIcon className="h-5 w-5 text-pink-400" />
            <input
              id="apiKey"
              type={showApiKey ? "text" : "password"}
              value={apiKey}
              readOnly
              className="flex-grow bg-transparent border-none text-white focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <motion.button
          onClick={handleGenerateNewKey}
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Generate New API Key
        </motion.button>
        <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">API Usage</h3>
          <p className="text-sm text-gray-300 mb-4">
            Use this API key to authenticate requests. Keep it secure and do not
            share it in publicly accessible areas such as GitHub, client-side
            code, and so forth.
          </p>
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-300">
              curl https://api.example.com/v1/designs \<br />
              &nbsp;&nbsp;-H &quot;Authorization: Bearer{" "}
              {showApiKey ? apiKey : "YOUR_API_KEY"}&quot;
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
