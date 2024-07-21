import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const projects = [
  { id: 1, name: "Summer Collection 2024", progress: 75, status: "On Track" },
  { id: 2, name: "Sustainable Denim Line", progress: 40, status: "At Risk" },
  { id: 3, name: "Athleisure Expansion", progress: 90, status: "Ahead" },
];

export function TeamProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Active Team Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">
                    {project.name}
                  </h3>
                  <Badge
                    variant={
                      project.status === "On Track"
                        ? "default"
                        : project.status === "At Risk"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
                <p className="text-sm text-gray-600 mt-2">
                  {project.progress}% Complete
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
