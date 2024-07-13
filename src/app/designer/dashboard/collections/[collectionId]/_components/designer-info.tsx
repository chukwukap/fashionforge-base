import React from "react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

interface DesignerInfoProps {
  designer: {
    id: string;
    name: string;
    profileImage: string;
    bio: string;
    totalSales: number;
    followers: number;
    collections: number;
  };
  className?: string;
}

export const DesignerInfo: React.FC<DesignerInfoProps> = ({
  designer,
  className,
}) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      <div className="relative h-32 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="absolute -bottom-16 left-6">
          <Image
            src={designer.profileImage}
            alt={designer.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="pt-20 px-6 pb-6">
        <h3 className="text-2xl font-bold mb-2">{designer.name}</h3>
        <p className="text-gray-600 mb-4">{designer.bio}</p>
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <span className="block font-bold">{designer.totalSales}</span>
            <span className="text-sm text-gray-500">Sales</span>
          </div>
          <div className="text-center">
            <span className="block font-bold">{designer.followers}</span>
            <span className="text-sm text-gray-500">Followers</span>
          </div>
          <div className="text-center">
            <span className="block font-bold">{designer.collections}</span>
            <span className="text-sm text-gray-500">Collections</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-4000 hover:text-blue-500">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
