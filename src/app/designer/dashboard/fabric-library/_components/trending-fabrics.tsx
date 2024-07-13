import React from "react";
import Image from "next/image";
import { Fabric } from "@/lib/types";

interface TrendingFabricsProps {
  fabrics: Fabric[];
  onFabricClick: (fabric: Fabric) => void;
}

export const TrendingFabrics: React.FC<TrendingFabricsProps> = ({
  fabrics,
  onFabricClick,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {fabrics.map((fabric) => (
        <div
          key={fabric.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
          onClick={() => onFabricClick(fabric)}
        >
          <Image
            src={fabric.imageUrl}
            alt={fabric.name}
            width={300}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{fabric.name}</h3>
            <p className="text-sm text-gray-600">{fabric.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
