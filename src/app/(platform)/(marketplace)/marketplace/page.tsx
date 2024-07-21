"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Scissors, Palette, Shirt, Star } from "lucide-react";
import Image from "next/image";

const DesignCard = ({ design }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="relative h-48">
      <Image
        src={design.image}
        alt={design.title}
        layout="fill"
        objectFit="cover"
      />
      <Badge className="absolute top-2 right-2 bg-amber-100 text-amber-800">
        {design.category}
      </Badge>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900">{design.title}</h3>
      <p className="text-sm text-gray-500">{design.designer}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-purple-600 font-bold">${design.price}</span>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-amber-400 mr-1" />
          <span className="text-sm text-gray-600">{design.rating}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showBlockchainOnly, setShowBlockchainOnly] = useState(false);

  // Dummy data for demonstration
  const designs = [
    {
      id: 1,
      title: "Summer Breeze Dress",
      designer: "Aria Zhang",
      price: 250,
      rating: 4.8,
      category: "Dresses",
      image: "/images/design1.jpg",
    },
    {
      id: 2,
      title: "Urban Chic Jacket",
      designer: "Liam Foster",
      price: 350,
      rating: 4.6,
      category: "Outerwear",
      image: "/images/design2.jpg",
    },
    // Add more designs...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            FashionForge Marketplace
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Filters
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="dresses">Dresses</SelectItem>
                    <SelectItem value="outerwear">Outerwear</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">
                    ${priceRange[0]}
                  </span>
                  <span className="text-sm text-gray-500">
                    ${priceRange[1]}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Blockchain Verified Only
                </span>
                <Switch
                  checked={showBlockchainOnly}
                  onCheckedChange={setShowBlockchainOnly}
                />
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="mb-6 flex gap-4">
              <Input
                type="text"
                placeholder="Search designs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {designs.map((design) => (
                <DesignCard key={design.id} design={design} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketplacePage;
