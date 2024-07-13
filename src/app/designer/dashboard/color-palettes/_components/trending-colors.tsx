import React, { useState } from "react";
import { Palette, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export const TrendingColorsSection: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const trendingColors = [
    { name: "Living Coral", hex: "#FF6F61" },
    { name: "Classic Blue", hex: "#0F4C81" },
    { name: "Neo Mint", hex: "#3B8C55" },
    { name: "Cassis", hex: "#78244C" },
    { name: "Mellow Yellow", hex: "#FFDB58" },
    { name: "Burnt Orange", hex: "#CC5500" },
  ];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-100 rounded-full filter blur-3xl opacity-50 -ml-16 -mb-16"></div>

      <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800 relative z-10">
        <Palette className="mr-3 h-8 w-8 text-indigo-500" />
        Trending Colors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {trendingColors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: color.hex }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <div className="p-6 h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-white shadow-text">
                {color.name}
              </h3>
              <div className="flex justify-between items-end">
                <span className="text-sm font-mono text-white shadow-text">
                  {color.hex}
                </span>
                <button
                  onClick={() => copyToClipboard(color.hex)}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {copiedColor === color.hex ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
