"use client";

import React, { useState } from "react";
import { CollectionsHeader } from "./_components/header";
import { CollectionsList } from "./_components/list";
import { CreateCollectionModal } from "./_components/create-collection-modal";
import { CollectionStatistics } from "./_components/stats";
import { FeaturedCollections } from "./_components/featured";
import { RecentActivity } from "./_components/recent-activity";
import { sampleCollections } from "@/lib/mocks/sample-collections";
import { Collection } from "@/lib/types";

export default function DesignerCollectionsPage() {
  const [collections, setCollections] =
    useState<Collection[]>(sampleCollections);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCollection = (newCollection: Collection) => {
    setCollections([...collections, newCollection]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CollectionsHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onCreateClick={() => setIsCreateModalOpen(true)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CollectionStatistics collections={collections} />
        <FeaturedCollections collections={collections} />
        <RecentActivity />
      </div>
      <CollectionsList collections={filteredCollections} />
      <CreateCollectionModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateCollection={handleCreateCollection}
      />
    </div>
  );
}
