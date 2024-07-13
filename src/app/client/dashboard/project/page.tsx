"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./_components/project-card";
import ProjectStats from "./_components/project-stats";
import { Project } from "@/lib/types/";
import Image from "next/image";
import { ethers } from "ethers";

const projects: Project[] = [
  {
    id: "1",
    title: "Summer Breeze Collection",
    designerId: "Aria Zhang",
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
    budget: BigInt(50000),
    startDate: "2023-09-01",
    clientId: "client123",
    designs: [],
    contractAddress: "0x1234567890123456789012345678901234567890",
  },
  {
    id: "2",
    title: "Urban Chic Essentials",
    designerId: "Liam Foster",
    status: "Review",
    piecesCount: 8,
    progress: 90,
    dueDate: "2024-02-28",
    lastUpdate: "1 week ago",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "stable",
    teamSize: 4,
    commentsCount: 17,
    description:
      "A sleek and modern collection designed for the urban professional. Featuring versatile pieces that transition seamlessly from office to evening events.",
    budget: BigInt(75000),
    startDate: "2023-10-15",
    clientId: "client456",
    designs: [],
    contractAddress: "0x2345678901234567890123456789012345678901",
  },
  {
    id: "3",
    title: "Eco-Friendly Activewear",
    designerId: "Zoe Chen",
    status: "Completed",
    piecesCount: 10,
    progress: 100,
    dueDate: "2024-01-30",
    lastUpdate: "3 weeks ago",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    trend: "up",
    teamSize: 6,
    commentsCount: 31,
    description:
      "An innovative activewear collection made from sustainable materials. Designed for high performance while minimizing environmental impact.",
    budget: BigInt(100000),
    startDate: "2023-08-01",
    clientId: "client789",
    designs: [],
    contractAddress: "0x3456789012345678901234567890123456789012",
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
