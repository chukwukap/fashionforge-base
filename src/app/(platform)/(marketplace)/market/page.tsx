"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MarketHeader from "./_components/market-header";
import DesignGrid from "./_components/design-grid";
import { designService } from "@/services/design";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const MarketPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const {
    data: designs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["designs", searchTerm, status, sortBy],
    queryFn: () => designService.fetchDesigns({ searchTerm, status, sortBy }),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-lg mx-auto mt-8">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred while fetching designs. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Fashion Market
      </h1>
      <MarketHeader
        onSearch={setSearchTerm}
        onStatusChange={setStatus}
        onSortChange={setSortBy}
      />
      <DesignGrid designs={designs || []} />
    </div>
  );
};

export default MarketPage;
