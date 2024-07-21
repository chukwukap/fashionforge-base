import React from "react";
import { sampleCollections } from "@/lib/mocks/sample-collections";
import Image from "next/image";

export const RelatedCollections: React.FC<{ currentCollectionId: string }> = ({
  currentCollectionId,
}) => {
  const relatedCollections = sampleCollections
    .filter((collection) => collection.id !== currentCollectionId)
    .slice(0, 3);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Related Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedCollections.map((collection) => (
          <div
            key={collection.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={collection.imageUrl}
              alt={collection.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
              <p className="text-gray-600 text-sm">{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
