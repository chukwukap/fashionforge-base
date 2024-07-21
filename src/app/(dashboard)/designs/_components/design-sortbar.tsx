import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DesignSortBar() {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Sort by:</span>
      <Select defaultValue="newest">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
