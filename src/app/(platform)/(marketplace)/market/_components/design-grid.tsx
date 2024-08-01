import React from "react";
import DesignCard from "./design-card";
import { Design } from "@prisma/client";

interface DesignGridProps {
  designs: Design[];
}

const DesignGrid: React.FC<DesignGridProps> = ({ designs }) => {
  if (designs.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No designs found. Try adjusting your search or filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {designs.map((design) => (
        <DesignCard key={design.id} design={design} />
      ))}
    </div>
  );
};

export default DesignGrid;
