import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Design } from "@/lib/types";
import { motion } from "framer-motion";

interface DesignHeaderProps {
  design: Design;
  onImageClick: () => void;
}

export function DesignHeader({ design, onImageClick }: DesignHeaderProps) {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full cursor-pointer"
        onClick={onImageClick}
      >
        <Image
          src={design.mainImage}
          alt={design.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-3xl"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-bold text-white">{design.name}</h1>
          <Badge
            variant="secondary"
            className="text-lg font-semibold bg-white/20 text-white"
          >
            {design.status}
          </Badge>
        </div>
      </div>
    </div>
  );
}
