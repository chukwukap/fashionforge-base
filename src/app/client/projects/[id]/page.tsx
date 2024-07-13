"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const ProjectPage: React.FC = () => {
  const params = useParams();
  const projectId = params.id;
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // Simulating an API call to fetch project details
    const fetchProject = async () => {
      // In a real app, you'd fetch data from an API here
      const mockProject = {
        id: projectId,
        title: "Futuristic Streetwear Collection",
        designer: "Neo Visions",
        status: "In Progress",
        progress: 75,
        image: "https://example.com/project-image.jpg",
        description: "A bold fusion of cyberpunk aesthetics and urban fashion.",
        startDate: "2023-09-01",
        dueDate: "2024-03-31",
        budget: 75000,
      };
      setProject(mockProject);
    };

    fetchProject();
  }, [projectId]);

  if (!project) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl opacity-80">Designed by {project.designer}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{project.description}</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Status:</span>
              <Badge variant="secondary">{project.status}</Badge>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Progress:</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
            <div className="flex justify-between">
              <span>Start Date:</span>
              <span>{project.startDate}</span>
            </div>
            <div className="flex justify-between">
              <span>Due Date:</span>
              <span>{project.dueDate}</span>
            </div>
            <div className="flex justify-between">
              <span>Budget:</span>
              <span>${project.budget.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="designs">Designs</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline">
          <Card>
            <CardContent className="pt-6">
              <p>Project timeline will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team">
          <Card>
            <CardContent className="pt-6">
              <p>Team members and their roles will be listed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="designs">
          <Card>
            <CardContent className="pt-6">
              <p>Design drafts and final pieces will be showcased here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Request Changes</Button>
        <Button>Approve Current Stage</Button>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
