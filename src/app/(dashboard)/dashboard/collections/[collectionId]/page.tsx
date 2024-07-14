"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { CollectionHeader } from "./_components/header";
import { CollectionMetadata } from "./_components/metadata";
import { DesignsList } from "./_components/designs-list";
import { AddDesignModal } from "./_components/add-design-modal";
import { sampleCollections } from "@/lib/mocks/sample-collections";
import { sampleDesigns } from "@/lib/mocks/sample-designs";
import { Collection, Design } from "@/lib/types";
import { FeaturedDesign } from "./_components/featured-design";
import { DesignerInfo } from "./_components/designer-info";
import { RelatedCollections } from "./_components/related-collections";

export default function CollectionDetailPage() {
  const params = useParams();
  const collectionId = params.collectionId as string;

  const [collection, setCollection] = useState<Collection | null>(null);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [isAddDesignModalOpen, setIsAddDesignModalOpen] = useState(false);

  useEffect(() => {
    const foundCollection = sampleCollections.find(
      (c) => c.id === collectionId
    );
    setCollection(foundCollection || null);

    const collectionDesigns = sampleDesigns.filter(
      (d) => d.collectionId === collectionId
    );
    setDesigns(collectionDesigns);
  }, [collectionId]);

  const handleAddDesign = (newDesign: Design) => {
    setDesigns([...designs, newDesign]);
    setIsAddDesignModalOpen(false);
  };

  if (!collection) {
    return <div className="text-center py-20">Collection not found</div>;
  }

  const featuredDesign = designs[0];
  const designerInfo = {
    id: collection.designer,
    name: "Jane Doe",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Award-winning fashion designer with a passion for sustainable and innovative designs.",
    totalSales: 1234,
    followers: 56000,
    collections: 15,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${collection.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {collection.name}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <FeaturedDesign design={featuredDesign} />
            <CollectionMetadata collection={collection} className="mt-8" />
          </div>
          <div>
            <DesignerInfo designer={designerInfo} />
            <button
              onClick={() => setIsAddDesignModalOpen(true)}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add New Design
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Designs in this Collection
          </h2>
          <DesignsList designs={designs} />
        </div>

        <RelatedCollections currentCollectionId={collection.id} />
      </div>

      <AddDesignModal
        isOpen={isAddDesignModalOpen}
        onClose={() => setIsAddDesignModalOpen(false)}
        onAddDesign={handleAddDesign}
        collectionId={collection.id}
      />
    </div>
  );
}
