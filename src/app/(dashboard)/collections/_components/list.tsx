import React from "react";
import { CollectionCard } from "./collections-card";
import { Collection } from "@/lib/types";

interface CollectionsListProps {
  collections: Collection[];
}

export function CollectionsList({ collections }: CollectionsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
      {collections.length === 0 && (
        <p className="text-center text-gray-500 mt-8 col-span-full">
          No collections found.
        </p>
      )}
    </div>
  );
}
