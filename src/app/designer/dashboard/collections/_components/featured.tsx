import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collection } from "@/lib/types";
import Image from "next/image";

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  const featuredCollections = collections.slice(0, 3); // Get the first 3 collections as featured

  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Collections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {featuredCollections.map((collection) => (
            <div key={collection.id} className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-md overflow-hidden">
                <Image
                  src={collection.imageUrl}
                  alt={collection.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{collection.name}</h3>
                <p className="text-sm text-gray-500">
                  {collection.designCount} designs
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
