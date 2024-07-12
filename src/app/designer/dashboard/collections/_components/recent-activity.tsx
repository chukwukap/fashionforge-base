import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Heart, Eye } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      icon: Plus,
      text: "New collection 'Summer Vibes' created",
      time: "2 hours ago",
    },
    {
      icon: Heart,
      text: "'Autumn Elegance' received 10 new likes",
      time: "5 hours ago",
    },
    { icon: Eye, text: "'Urban Chic' reached 1000 views", time: "1 day ago" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <activity.icon className="h-5 w-5 text-indigo-500 mt-1" />
              <div>
                <p className="text-sm">{activity.text}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
