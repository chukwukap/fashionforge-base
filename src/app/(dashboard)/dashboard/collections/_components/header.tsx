import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CollectionsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onCreateClick: () => void;
}

export function CollectionsHeader({
  searchTerm,
  onSearchChange,
  onCreateClick,
}: CollectionsHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Collections</h1>
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search collections..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-xs"
        />
        <Button onClick={onCreateClick}>
          <Plus className="mr-2 h-4 w-4" /> Create Collection
        </Button>
      </div>
    </motion.div>
  );
}
