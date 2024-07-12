"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  MessageSquare,
  TrendingUp,
  Users,
  Scissors,
  Clock,
} from "lucide-react";
import ProjectTimeline from "./_components/project-timeline";
import TeamMemberList from "./_components/team-member-list";
import ProjectStats from "./_components/project-stats";
import { Project } from "@/lib/types";

// This would typically come from an API call using the project ID
const projectDetails: Project = {
  id: "1",
  title: "Summer Breeze Collection",
  designer: "Aria Zhang",
  status: "In Progress",
  piecesCount: 5,
  progress: 65,
  dueDate: "2024-03-15",
  lastUpdate: "2 days ago",
  image:
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  trend: "up",
  teamSize: 5,
  commentsCount: 23,
  description:
    "A vibrant and airy collection inspired by coastal summers. Featuring lightweight fabrics, pastel hues, and breezy silhouettes perfect for beachside lounging and seaside soirées.",
  budget: 50000,
  startDate: "2023-09-01",
};

const ProjectDetailsPage: React.FC = () => {
  const params = useParams();
  const projectId = params.id;

  // In a real application, you would fetch the project details using the projectId
  // For now, we'll use the mock data

  return (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src={projectDetails.image}
          alt={projectDetails.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-4xl font-bold mb-2">{projectDetails.title}</h1>
          <p className="text-xl opacity-80">
            Designed by {projectDetails.designer}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{projectDetails.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Status:</span>
                <Badge
                  variant={
                    projectDetails.status === "In Progress"
                      ? "secondary"
                      : projectDetails.status === "Review"
                      ? "destructive"
                      : "default"
                  }
                >
                  {projectDetails.status}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Progress:</span>
                <span>{projectDetails.progress}%</span>
              </div>
              <Progress value={projectDetails.progress} className="h-2" />
              <div className="flex justify-between">
                <span>Start Date:</span>
                <span>{projectDetails.startDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Due Date:</span>
                <span>{projectDetails.dueDate}</span>
              </div>
              <div className="flex justify-between">
                <span>Budget:</span>
                <span>${projectDetails?.budget?.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <ProjectStats
          budget={projectDetails.budget || 0}
          expenses={projectDetails.budget || 0}
          completedPieces={projectDetails.piecesCount}
          totalDays={projectDetails.piecesCount}
          totalPieces={projectDetails.piecesCount}
          teamSize={projectDetails.teamSize}
          daysLeft={Math.ceil(
            (new Date(projectDetails.dueDate).getTime() -
              new Date().getTime()) /
              (1000 * 3600 * 24)
          )}
          commentsCount={projectDetails.commentsCount}
        />
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline">
          <ProjectTimeline projectId={projectId as string} />
        </TabsContent>
        <TabsContent value="team">
          <TeamMemberList projectId={projectId as string} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Request Changes</Button>
        <Button>Approve Current Stage</Button>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
