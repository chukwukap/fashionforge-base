import React from "react";
import { motion } from "framer-motion";
import { Plus, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold text-gray-800 mb-2">Atelier</h1>
      <p className="text-xl text-gray-600 mb-8">
        Where imagination meets fabric
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Search collections..."
            className="w-full sm:w-64 bg-white/70 backdrop-blur-sm"
            // startIcon={<Search className="h-4 w-4 text-gray-400" />}
          />
          <Button
            variant="outline"
            size="icon"
            className="bg-white/70 backdrop-blur-sm"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Collection
        </Button>
      </div>
    </motion.div>
  );
}
