import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MoodBoard } from "./moodboard";
import { FashionTimeline } from "./fashion-timeline";
import { TrendingFabrics } from "./trending-fabrics";

export function InspirationCorner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
        <Sparkles className="h-6 w-6 mr-2 text-amber-500" />
        Inspiration Corner
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <MoodBoard />
        <FashionTimeline />
        <TrendingFabrics />
      </div>
    </motion.div>
  );
}
