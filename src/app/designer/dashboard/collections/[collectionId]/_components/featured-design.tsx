import React from "react";
import { Design } from "@/lib/types";
import Image from "next/image";

export const FeaturedDesign: React.FC<{ design: Design }> = ({ design }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={design.mainImage}
        alt={design.name}
        width={800}
        height={600}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{design.name}</h3>
        <p className="text-gray-600 mb-4">{design.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">
            {design.price.toString()} ETH
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
