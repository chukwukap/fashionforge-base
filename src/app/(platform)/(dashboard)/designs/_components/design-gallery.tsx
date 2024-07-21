import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MoreVertical,
  Heart,
  ShoppingCart,
  Edit,
  Copy,
  Trash2,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const designs = [
  {
    id: 1,
    name: "Summer Breeze Dress",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 129.99,
    likes: 24,
    views: 120,
    status: "On Sale",
    tags: ["Summer Collection", "Bestseller"],
  },
  {
    id: 2,
    name: "Urban Chic Jacket",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 199.99,
    likes: 18,
    views: 95,
    status: "In Review",
    tags: ["New Arrival", "Limited Edition"],
  },
  // ... add more designs
];

interface DesignGalleryProps {
  viewMode: "grid" | "list";
}

export function DesignGallery({ viewMode }: DesignGalleryProps) {
  return (
    <div
      className={`grid gap-8 ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      }`}
    >
      {designs.map((design, index) => (
        <motion.div
          key={design.id}
          className={`bg-white rounded-xl shadow-lg overflow-hidden ${
            viewMode === "list" ? "flex" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div
            className={`relative ${viewMode === "grid" ? "h-80" : "h-48 w-48"}`}
          >
            <Image
              src={design.image}
              alt={design.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-2 left-2">
              <Badge
                variant="secondary"
                className="bg-white/90 text-gray-800 font-semibold"
              >
                {design.status}
              </Badge>
            </div>
            <div className="absolute top-2 right-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                  >
                    <MoreVertical className="h-4 w-4 text-gray-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="h-4 w-4 mr-2" />
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className={`p-6 ${viewMode === "list" ? "flex-grow" : ""}`}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
              {design.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {design.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-3xl font-bold text-gray-900">
                ${design.price.toFixed(2)}
              </span>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Heart className="h-5 w-5 mr-1 text-red-500" />
                  <span className="font-medium">{design.likes}</span>
                </span>
                <span className="flex items-center">
                  <Eye className="h-5 w-5 mr-1 text-blue-500" />
                  <span className="font-medium">{design.views}</span>
                </span>
              </div>
            </div>
            <Button variant="default" size="lg" className="w-full">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
