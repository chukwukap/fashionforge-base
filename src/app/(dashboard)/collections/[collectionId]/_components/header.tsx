import React from "react";
import { Button } from "@/components/ui/button";
import { Collection } from "@/lib/types";
import { Plus } from "lucide-react";

interface CollectionHeaderProps {
  collection: Collection;
  onAddDesign: () => void;
}

export function CollectionHeader({
  collection,
  onAddDesign,
}: CollectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">{collection.name}</h1>
      <Button onClick={onAddDesign}>
        <Plus className="mr-2 h-4 w-4" /> Add Design
      </Button>
    </div>
  );
}
