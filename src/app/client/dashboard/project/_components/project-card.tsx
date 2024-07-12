import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  MessageSquare,
  TrendingUp,
  Users,
  Scissors,
} from "lucide-react";
import { Project } from "@/lib/types/";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
    <CardHeader className="p-0 relative h-64">
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm opacity-80">Designer: {project.designer}</p>
        <div className="flex items-center mt-2">
          <Users className="h-4 w-4 mr-1" />
          <span className="text-xs">{project.teamSize} team members</span>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Badge
          variant={
            project.status === "In Progress"
              ? "secondary"
              : project.status === "Review"
              ? "destructive"
              : "default"
          }
        >
          {project.status}
        </Badge>
        <span className="text-sm font-medium">
          {project.progress}% complete
        </span>
      </div>
      <Progress value={project.progress} className="h-2" />
      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
        <span className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          Due: {project.dueDate}
        </span>
        <span className="flex items-center">
          <MessageSquare className="h-4 w-4 mr-1" />
          {project.commentsCount} comments
        </span>
        <span className="flex items-center">
          <Scissors className="h-4 w-4 mr-1" />
          {project.piecesCount} pieces
        </span>
        <span className="flex items-center">
          <TrendingUp
            className={`h-4 w-4 mr-1 ${
              project.trend === "up"
                ? "text-green-500"
                : project.trend === "down"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          />
          {project.trend === "up"
            ? "Trending up"
            : project.trend === "down"
            ? "Trending down"
            : "Stable"}
        </span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button className="flex-1 mr-2">View Details</Button>
        <Button variant="outline">Update</Button>
      </div>
    </CardContent>
  </Card>
);

export default ProjectCard;
