import React from "react";
import { ProjectCard } from "./project-card";

const projects = [
  {
    id: 1,
    name: "Ethereal Elegance",
    description: "A dreamy collection inspired by cloud formations",
    status: "In Progress",
    progress: 65,
    deadline: "2023-08-15",
    team: ["Alice", "Bob", "Charlie"],
    image:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
    type: "Evening Wear",
  },
  {
    id: 2,
    name: "Urban Nomad",
    description: "Sustainable streetwear for the modern traveler",
    status: "Planning",
    progress: 20,
    deadline: "2023-09-30",
    team: ["David", "Eve"],
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
    type: "Streetwear",
  },
  {
    id: 3,
    name: "Retro Revival",
    description: "70s-inspired pieces with a contemporary twist",
    status: "Completed",
    progress: 100,
    deadline: "2023-07-01",
    team: ["Frank", "Grace", "Henry"],
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
    type: "Vintage",
  },
];

export function ProjectList() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Current Collections
        </h2>
        <ul className="space-y-4 sm:space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
