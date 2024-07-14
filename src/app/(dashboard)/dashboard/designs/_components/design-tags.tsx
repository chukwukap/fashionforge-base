import React from "react";
import { motion } from "framer-motion";

const tags = [
  { name: "Summer Collection", color: "bg-yellow-400" },
  { name: "Sustainable", color: "bg-green-400" },
  { name: "Bestsellers", color: "bg-red-400" },
  { name: "New Arrivals", color: "bg-blue-400" },
  { name: "Limited Edition", color: "bg-purple-400" },
  { name: "Collaboration", color: "bg-pink-400" },
];

export function DesignTags() {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <motion.div
          key={tag.name}
          className={`px-3 py-1 rounded-full ${tag.color} text-white font-semibold text-sm cursor-pointer transition-shadow hover:shadow-lg`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {tag.name}
        </motion.div>
      ))}
    </div>
  );
}
