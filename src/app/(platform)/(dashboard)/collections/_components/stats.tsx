import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collection } from "@/lib/types";
import { ShirtIcon, StarIcon, TrendingUpIcon } from "lucide-react";

interface CollectionStatisticsProps {
  collections: Collection[];
}

export function CollectionStatistics({
  collections,
}: CollectionStatisticsProps) {
  const totalDesigns = collections.reduce(
    (sum, collection) => sum + collection.designCount,
    0
  );
  const totalLikes = collections.reduce(
    (sum, collection) => sum + (collection.likes || 0),
    0
  );
  const averageViews = Math.round(
    collections.reduce((sum, collection) => sum + (collection.views || 0), 0) /
      collections.length
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collection Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <ShirtIcon className="mr-2 h-4 w-4 text-indigo-500" />
            <span className="text-sm text-gray-500">Total Designs:</span>
            <span className="ml-auto font-semibold">{totalDesigns}</span>
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-2 h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-500">Total Likes:</span>
            <span className="ml-auto font-semibold">{totalLikes}</span>
          </div>
          <div className="flex items-center">
            <TrendingUpIcon className="mr-2 h-4 w-4 text-green-5000" />
            <span className="text-sm text-gray-500">Average Views:</span>
            <span className="ml-auto font-semibold">{averageViews}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
