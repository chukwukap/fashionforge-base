import React from "react";
import Image from "next/image";
import {
  Calendar,
  Users,
  MoreVertical,
  Scissors,
  Palette,
  Shirt,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projectTypeIcons = {
  "Evening Wear": Scissors,
  Streetwear: Shirt,
  Vintage: Palette,
};

export function ProjectCard({ project }: any) {
  return (
    <li className="bg-white rounded-lg p-4 shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-24 h-40 sm:h-24 relative rounded-md overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500 mb-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : project.status === "In Progress"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {project.status}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {project.deadline}
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {project.team.length} designers
            </span>
            {project.type && (
              <span className="flex items-center">
                {project.type &&
                  projectTypeIcons[
                    project.type as keyof typeof projectTypeIcons
                  ] &&
                  React.createElement(
                    projectTypeIcons[
                      project.type as keyof typeof projectTypeIcons
                    ],
                    {
                      className: "h-4 w-4 mr-1",
                    }
                  )}
                {project.type}
              </span>
            )}
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2 bg-rose-500" />
          </div>
        </div>
      </div>
    </li>
  );
}
