import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function DesignsHeader() {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg p-6 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">Your Design Universe</h1>
          <p className="text-purple-200">
            Explore, create, and inspire with your designs
          </p>
        </div>
        <div className="flex space-x-4">
          <Button
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-purple-100"
          >
            Upload Design
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600"
          >
            Create New
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your designs..."
            className="w-full py-2 px-4 pr-10 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-purple-200" />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <motion.div
          className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎨 Total Designs: 128
        </motion.div>
        <motion.div
          className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🌟 Featured: 12
        </motion.div>
        <motion.div
          className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Trending: 5
        </motion.div>
      </div>
    </motion.div>
  );
}
