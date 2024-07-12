import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  { name: "Summer Collection", status: "In Progress", deadline: "2024-08-15" },
  { name: "Autumn Lookbook", status: "Planning", deadline: "2024-09-30" },
  { name: "Winter Essentials", status: "Completed", deadline: "2024-07-31" },
];

const ProjectList: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">
                  Due: {project.deadline}
                </p>
              </div>
              <Badge
                variant={
                  project.status === "Completed" ? "secondary" : "default"
                }
              >
                {project.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectList;
