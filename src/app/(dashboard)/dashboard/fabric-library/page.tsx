"use client";

import React, { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import { Fabric, FabricCategory } from "@/lib/types";
import { sampleFabrics } from "@/lib/mocks/";
import { FabricCard } from "./_components/fabric-card";
import { FabricModal } from "./_components/fabric-modal";
import { FeaturedFabric } from "./_components/featured-fabric";
import { TrendingFabrics } from "./_components/trending-fabrics";

export default function FabricLibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    FabricCategory | "all"
  >("all");
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);

  const filteredFabrics = sampleFabrics.filter(
    (fabric) =>
      (selectedCategory === "all" || fabric.category === selectedCategory) &&
      (fabric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fabric.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories: FabricCategory[] = [
    "Cotton",
    "Silk",
    "Wool",
    "Synthetic",
    "Linen",
  ];
  const featuredFabric = sampleFabrics[0]; // Assume the first fabric is featured
  const trendingFabrics = sampleFabrics.slice(1, 5); // Get the next 4 fabrics for trending

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Fabric Library</h1>

        <FeaturedFabric
          fabric={featuredFabric}
          onClick={() => setSelectedFabric(featuredFabric)}
        />

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Trending Fabrics</h2>
          <TrendingFabrics
            fabrics={trendingFabrics}
            onFabricClick={setSelectedFabric}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explore All Fabrics</h2>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="relative mb-4 md:mb-0 md:w-1/2">
              <input
                type="text"
                placeholder="Search fabrics..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>

            <div className="flex items-center">
              <Filter className="mr-2 text-gray-600" />
              <select
                className="border rounded-lg px-4 py-2"
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as FabricCategory | "all")
                }
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFabrics.map((fabric) => (
              <FabricCard
                key={fabric.id}
                fabric={fabric}
                onClick={() => setSelectedFabric(fabric)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedFabric && (
        <FabricModal
          fabric={selectedFabric}
          onClose={() => setSelectedFabric(null)}
        />
      )}
    </div>
  );
}
