import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShirtIcon } from "lucide-react";
import { Collection } from "@/lib/types";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/designer/collections/${collection.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image
            src={collection.imageUrl}
            alt={collection.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{collection.name}</h2>
          <p className="text-gray-600 text-sm mb-3">{collection.description}</p>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <ShirtIcon className="mr-1 h-4 w-4" />
            {collection.designCount} designs
          </div>
          <div className="flex flex-wrap gap-2">
            {collection.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
