import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface MarketHeaderProps {
  onSearch: (term: string) => void;
  onStatusChange: (status: string | null) => void;
  onSortChange: (sortBy: string | null) => void;
}

const MarketHeader: React.FC<MarketHeaderProps> = ({
  onSearch,
  onStatusChange,
  onSortChange,
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex space-x-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search designs..."
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Button>Search</Button>
      </div>
      <div className="flex space-x-4">
        <Select onValueChange={onStatusChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Statuses</SelectItem>
            <SelectItem value="FOR_SALE">For Sale</SelectItem>
            <SelectItem value="MINTED">Minted</SelectItem>
            <SelectItem value="DRAFTED">Drafted</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
            <SelectItem value="views_desc">Most Viewed</SelectItem>
            <SelectItem value="likes_desc">Most Liked</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MarketHeader;
