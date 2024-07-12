"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DesignsHeader } from "./_components/header";
import { DesignGallery } from "./_components/design-gallery";
import { DesignFilters } from "./_components/design-filters";
import { DesignSortBar } from "./_components/design-sortbar";
import { DesignStats } from "./_components/design-stats";
import { DesignTags } from "./_components/design-tags";
import { TrendingDesigns } from "./_components/trending-designs";
import { Button } from "@/components/ui/button";
import { Grid, List, SlidersHorizontal, Plus } from "lucide-react";

const BackgroundSVG = () => (
  <svg className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
    <defs>
      <pattern
        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
        width="200"
        height="200"
        x="50%"
        y="-1"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
    />
  </svg>
);

export default function DesignerDesignsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative p-6 space-y-8 overflow-hidden">
      <BackgroundSVG />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DesignsHeader />
      </motion.div>

      <DesignStats />

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Trending Designs</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      <TrendingDesigns />

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Popular Tags</h2>
        <DesignTags />
      </div>

      <motion.div
        className="bg-white rounded-lg shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">Your Designs</h2>
          <Button className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create New Design
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <DesignSortBar />
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`transition-colors duration-200 ${
                viewMode === "grid" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode("list")}
              className={`transition-colors duration-200 ${
                viewMode === "list" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={`transition-colors duration-200 ${
                showFilters ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {showFilters && (
            <motion.div
              className="w-full md:w-1/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DesignFilters />
            </motion.div>
          )}
          <motion.div
            className={`w-full ${showFilters ? "md:w-3/4" : "md:w-full"}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DesignGallery viewMode={viewMode} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
