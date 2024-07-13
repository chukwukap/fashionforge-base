import React, { useState } from "react";
import { Design } from "@/lib/types";
import { BigNumber } from "ethers";

interface AddDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDesign: (design: Design) => void;
  collectionId: string;
}

export const AddDesignModal: React.FC<AddDesignModalProps> = ({
  isOpen,
  onClose,
  onAddDesign,
  collectionId,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDesign: Design = {
      id: Date.now().toString(),
      name,
      description,
      mainImage: imageUrl,
      collectionId,
      status: "Drafted",
      price: BigNumber.from(price),
      likes: 0,
      views: 0,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      variations: [],
      tags: [],
      designer: "", // You'll need to set this to the current designer's ID
    };
    onAddDesign(newDesign);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Design</h2>
        <form onSubmit={handleSubmit}>
          {/* Add form fields for name, description, price, and imageUrl */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          >
            Add Design
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-gray-500">
          Cancel
        </button>
      </div>
    </div>
  );
};
