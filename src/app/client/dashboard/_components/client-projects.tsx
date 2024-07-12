import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const projects = [
  {
    name: "Summer Collection",
    client: "Fashion Co.",
    status: "In Progress",
    progress: 65,
    deadline: "2024-08-15",
  },
  {
    name: "Autumn Lookbook",
    client: "Style Inc.",
    status: "Planning",
    progress: 20,
    deadline: "2024-09-30",
  },
  {
    name: "Winter Essentials",
    client: "Cozy Brands",
    status: "Completed",
    progress: 100,
    deadline: "2024-07-31",
  },
];

const ClientProjects: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Scissors className="h-5 w-5 mr-2" />
          Active Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{project.name}</span>
                <Badge
                  variant={
                    project.status === "Completed" ? "secondary" : "default"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {project.client}
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {project.progress}% complete
                </span>
                <span className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  Due {project.deadline}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ClientProjects;
