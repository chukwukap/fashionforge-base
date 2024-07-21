import React from "react";
import Image from "next/image";
import { Fabric } from "@/lib/types";
import { Star } from "lucide-react";

interface FeaturedFabricProps {
  fabric: Fabric;
  onClick: () => void;
}

export const FeaturedFabric: React.FC<FeaturedFabricProps> = ({
  fabric,
  onClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={fabric.imageUrl}
            alt={fabric.name}
            width={600}
            height={400}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <div className="flex items-center mb-2">
            <Star className="text-yellow-400 mr-2" />
            <span className="text-sm font-semibold text-gray-600">
              Featured Fabric
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{fabric.name}</h2>
          <p className="text-gray-600 mb-4">{fabric.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="font-semibold">Category:</span> {fabric.category}
            </div>
            <div>
              <span className="font-semibold">Texture:</span> {fabric.texture}
            </div>
            <div>
              <span className="font-semibold">Color:</span> {fabric.color}
            </div>
            <div>
              <span className="font-semibold">Weight:</span> {fabric.weight}{" "}
              g/m²
            </div>
          </div>
          <button
            onClick={onClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
