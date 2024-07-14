import React from "react";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  title: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onCreateClick: () => void;
  createButtonText: string;
}

export function DashboardHeader({
  title,
  searchTerm,
  onSearchChange,
  onCreateClick,
  createButtonText,
}: DashboardHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent py-6 px-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="relative max-w-xs">
          <Input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <Button onClick={onCreateClick}>
          <Plus className="mr-2 h-4 w-4" /> {createButtonText}
        </Button>
      </div>
    </motion.div>
  );
}
