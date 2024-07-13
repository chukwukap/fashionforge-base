import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";

interface ClientsHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}

export default function ClientsHeader({
  searchTerm,
  onSearchChange,
  onAddClick,
}: ClientsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <h1 className="text-3xl font-bold text-amber-600">My Clients</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-64 bg-white/50 backdrop-blur-sm"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-amber-600" />
        </div>
        <Button
          onClick={onAddClick}
          className="bg-amber-600 hover:bg-amber-700"
        >
          <UserPlus className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </div>
    </div>
  );
}
