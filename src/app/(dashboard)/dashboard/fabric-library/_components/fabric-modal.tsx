import React from "react";
import Image from "next/image";
import { Fabric } from "@/lib/types";
import { X } from "lucide-react";

interface FabricModalProps {
  fabric: Fabric;
  onClose: () => void;
}

export const FabricModal: React.FC<FabricModalProps> = ({
  fabric,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-90vh overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{fabric.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <Image
          src={fabric.imageUrl}
          alt={fabric.name}
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-4">{fabric.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <p>{fabric.category}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Availability</h3>
            <p>{fabric.availability}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Texture</h3>
            <p>{fabric.texture}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Color</h3>
            <p>{fabric.color}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Weight</h3>
            <p>{fabric.weight} g/m²</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Width</h3>
            <p>{fabric.width} cm</p>
          </div>
        </div>
      </div>
    </div>
  );
};
