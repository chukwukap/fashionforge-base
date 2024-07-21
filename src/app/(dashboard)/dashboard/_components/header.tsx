"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Settings,
  ChevronRight,
  User,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "./search-bar";
import { toast } from "sonner";

interface DashboardHeaderProps {
  toggleSidebar: () => void;
}

type SearchResult = {
  id: string;
  title: string;
  type: string;
  url: string;
};
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleSidebar }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((crumb) => crumb.replace(/-/g, " "));

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      // Replace this with your actual API call
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("Search failed");
      }
      const data = await response.json();
      setSearchResults(data.results);

      toast.success(`Found ${data.results.length} results for "${query}"`);
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Search Error", {
        description: "An error occurred while searching. Please try again.",
      });
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <motion.header
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-b border-gray-200 border-opacity-20 sticky top-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left section: Toggle sidebar and Breadcrumbs */}
          <div className="flex items-center">
            <nav className="hidden md:flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                    <Link
                      href={`/${breadcrumbs.slice(0, index + 1).join("/")}`}
                      className={`ml-4 text-sm font-medium ${
                        index === breadcrumbs.length - 1
                          ? "text-gray-200 cursor-default"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                      aria-current={
                        index === breadcrumbs.length - 1 ? "page" : undefined
                      }
                    >
                      {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* Center section: Search bar */}
          <div className="flex-1 max-w-xl mx-4">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Right section: Notifications, Settings, and User menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-300" />
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-80 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
              >
                <DropdownMenuLabel className="text-gray-200">
                  Notifications
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Add notification items here */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings */}
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-gray-300" />
            </Button>

            {/* User profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@fashionforge"
                    />
                    <AvatarFallback>FF</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">
                      fashionforge
                    </p>
                    <p className="text-xs leading-none text-gray-400">
                      m@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
