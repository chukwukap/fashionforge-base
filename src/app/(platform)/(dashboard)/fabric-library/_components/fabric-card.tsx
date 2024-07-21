import React from "react";
import Image from "next/image";
import { Fabric } from "@/lib/types";
import { Ruler, Weight } from "lucide-react";

interface FabricCardProps {
  fabric: Fabric;
  onClick: () => void;
}

export const FabricCard: React.FC<FabricCardProps> = ({ fabric, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <Image
        src={fabric.imageUrl}
        alt={fabric.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{fabric.name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {fabric.description.substring(0, 80)}...
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-600">
            {fabric.category}
          </span>
          <span className="text-sm font-medium text-green-600">
            {fabric.availability}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Weight className="mr-1" />
            {fabric.weight} g/m²
          </div>
          <div className="flex items-center">
            <Ruler className="mr-1" />
            {fabric.width} cm
          </div>
        </div>
      </div>
    </div>
  );
};
