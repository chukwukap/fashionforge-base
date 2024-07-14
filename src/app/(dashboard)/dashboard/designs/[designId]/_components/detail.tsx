import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ethers } from "ethers";
import { Design } from "@/lib/types";
import { motion } from "framer-motion";
import { Heart, Eye, Tag, Palette } from "lucide-react";

interface DesignDetailsProps {
  design: Design;
  onVariationClick: (index: number) => void;
}

export function DesignDetails({
  design,
  onVariationClick,
}: DesignDetailsProps) {
  return (
    <div className="md:w-1/2 p-8 bg-white rounded-l-3xl shadow-inner">
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">{design.name}</h2> */}
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        {design.description}
      </p>

      <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-sm">
        <div>
          <span className="text-sm text-gray-500 block mb-1">
            Current Price
          </span>
          <span className="text-4xl font-bold text-indigo-600">
            {ethers.formatEther(design.price)} ETH
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center bg-pink-100 rounded-full px-3 py-1 mb-1">
              <Heart className="h-4 w-4 mr-1 text-pink-500" />
              <span className="font-semibold text-pink-700">
                {design.likes}
              </span>
            </div>
            <span className="text-xs text-gray-500">Likes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center bg-blue-100 rounded-full px-3 py-1 mb-1">
              <Eye className="h-4 w-4 mr-1 text-blue-500" />
              <span className="font-semibold text-blue-700">
                {design.views}
              </span>
            </div>
            <span className="text-xs text-gray-500">Views</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <Palette className="mr-2 h-5 w-5 text-indigo-500" /> Variations
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {design.variations.map((variation, index) => (
            <motion.div
              key={variation.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-lg overflow-hidden cursor-pointer shadow-md"
              onClick={() => onVariationClick(index)}
            >
              <Image
                src={variation.image}
                alt={variation.name}
                width={120}
                height={120}
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <span className="text-xs font-medium text-white">
                  {variation.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <Tag className="mr-2 h-5 w-5 text-indigo-500" /> Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {design.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-indigo-200 hover:from-indigo-100 hover:to-purple-100 transition-colors duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
