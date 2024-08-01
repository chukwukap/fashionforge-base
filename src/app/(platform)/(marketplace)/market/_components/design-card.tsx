import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Tag } from "lucide-react";
import { Design } from "@prisma/client";
// import { formatCurrency } from "@/lib/utils";

interface DesignCardProps {
  design: Design;
}

const DesignCard: React.FC<DesignCardProps> = ({ design }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-64">
          <Image
            src={design.mainImage}
            alt={design.name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
            <Tag className="inline-block mr-1" size={14} />
            {design.status}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{design.name}</h3>
          <p className="text-sm text-gray-600 truncate">
            by {design.designerId}
          </p>
          <p className="text-sm text-gray-600 truncate">
            {design.collectionId}
          </p>
          <p className="text-lg font-bold mt-2 text-primary">
            {design.price.toString()}
          </p>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span className="flex items-center">
              <Heart size={16} className="mr-1" /> {design.likes}
            </span>
            <span className="flex items-center">
              <Eye size={16} className="mr-1" /> {design.views}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/market/design/${design.id}`} passHref className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DesignCard;
