import React from "react";
import { Design } from "@/lib/types";
import Image from "next/image";

export const DesignsList: React.FC<{ designs: Design[] }> = ({ designs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designs.map((design) => (
        <div
          key={design.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <Image
            src={design.mainImage}
            alt={design.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{design.name}</h3>
            <p className="text-gray-600 text-sm mb-2">
              {design.description.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold">{design.price.toString()} ETH</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
