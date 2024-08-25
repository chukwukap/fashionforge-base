"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon } from "@/components/common/icons";
import { X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setSearchQuery("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        className="relative z-10"
      >
        <form onSubmit={handleSearch}>
          <motion.div
            variants={{
              expanded: { width: "300px" },
              collapsed: { width: "40px" },
            }}
            className="bg-gray-700 border border-gray-600 rounded-full shadow-sm overflow-hidden"
          >
            <div className="flex items-center h-10">
              <motion.button
                type="button"
                variants={{
                  expanded: { opacity: 0 },
                  collapsed: { opacity: 1 },
                }}
                onClick={handleExpand}
                className="p-2 focus:outline-none"
              >
                <SearchIcon className="w-5 h-5 text-gray-300" />
              </motion.button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.input
                    ref={inputRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 text-white bg-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {isExpanded && searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    type="button"
                    onClick={handleCollapse}
                    className="p-2 focus:outline-none"
                  >
                    <X className="w-5 h-5 text-gray-300" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </form>
      </motion.div>
      {isExpanded && (
        <div className="fixed inset-0 z-0" onClick={handleCollapse} />
      )}
    </div>
  );
};
