"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./_components/project-card";
import ProjectStats from "./_components/project-stats";
import { Project } from "@/lib/types/";
import Image from "next/image";

const projects: Project[] = [
  {
    id: "1",
    title: "Summer Breeze Collection",
    designer: "Aria Zhang",
    status: "In Progress",
    progress: 65,
    dueDate: "2024-03-15",
    lastUpdate: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "up",
    teamSize: 5,
    commentsCount: 23,
    piecesCount: 15,
  },
  {
    id: "2",
    title: "Urban Nights Lookbook",
    designer: "Liam Eco",
    status: "Review",
    progress: 90,
    dueDate: "2024-05-01",
    lastUpdate: "1 week ago",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "stable",
    teamSize: 3,
    commentsCount: 17,
    piecesCount: 10,
  },
  {
    id: "3",
    title: "Eco-Chic Essentials",
    designer: "Zoe Neon",
    status: "Completed",
    progress: 100,
    dueDate: "2023-11-30",
    lastUpdate: "1 month ago",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "up",
    teamSize: 4,
    commentsCount: 31,
    piecesCount: 20,
  },
  {
    id: "4",
    title: "Autumn Harvest Gala",
    designer: "Marcus Feng",
    status: "In Progress",
    progress: 40,
    dueDate: "2024-08-30",
    lastUpdate: "3 days ago",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "up",
    teamSize: 6,
    commentsCount: 28,
    piecesCount: 18,
  },
  {
    id: "5",
    title: "Minimalist Chic Capsule",
    designer: "Emma Blanc",
    status: "Review",
    progress: 85,
    dueDate: "2024-06-15",
    lastUpdate: "5 days ago",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "stable",
    teamSize: 4,
    commentsCount: 19,
    piecesCount: 12,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/fashion-pattern.png"
            alt="Fashion Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 relative z-10">
          My Fashion Projects
        </h1>
        <p className="text-white text-opacity-80 relative z-10">
          Bringing your style visions to life
        </p>
      </div>

      <ProjectStats
        totalProjects={projects.length}
        inProgressProjects={
          projects.filter((p) => p.status === "In Progress").length
        }
        completedProjects={
          projects.filter((p) => p.status === "Completed").length
        }
        upcomingDeadlines={
          projects.filter((p) => new Date(p.dueDate) > new Date()).length
        }
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="review">In Review</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </TabsContent>
        {/* Add similar TabsContent for other tabs */}
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
