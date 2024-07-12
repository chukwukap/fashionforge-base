import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const designers = [
  { name: "Alice Johnson", projectsCompleted: 8, rating: 4.8 },
  { name: "Bob Smith", projectsCompleted: 6, rating: 4.5 },
  { name: "Carol Williams", projectsCompleted: 7, rating: 4.9 },
];

const DesignerStats: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Designers</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {designers.map((designer, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{designer.name}</span>
                <span className="text-sm text-muted-foreground">
                  {designer.projectsCompleted} projects
                </span>
              </div>
              <Progress value={designer.rating * 20} className="h-2" />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DesignerStats;
