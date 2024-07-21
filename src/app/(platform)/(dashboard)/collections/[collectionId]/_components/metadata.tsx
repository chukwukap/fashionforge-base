import React from "react";
import { Collection } from "@/lib/types";
import { Heart, Eye, Tag } from "lucide-react";

interface CollectionMetadataProps {
  collection: Collection;
  className?: string;
}

export const CollectionMetadata: React.FC<CollectionMetadataProps> = ({
  collection,
  className,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Collection Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Heart className="text-red-500 mr-2" />
          <span>{collection.likes} Likes</span>
        </div>
        <div className="flex items-center">
          <Eye className="text-blue-500 mr-2" />
          <span>{collection.views} Views</span>
        </div>
        <div className="flex items-center">
          <Tag className="text-green-500 mr-2" />
          <span>{collection.designCount} Designs</span>
        </div>
        <div>
          <span className="font-semibold">Created:</span>{" "}
          {new Date(collection.createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {collection.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
