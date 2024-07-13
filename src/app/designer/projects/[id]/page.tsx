"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Save, X } from "lucide-react";

export default function ProjectPage() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [projectData, setProjectData] = useState({
    name: "Summer Collection 2024",
    description:
      "A vibrant and sustainable summer collection featuring recycled materials and bold prints.",
    status: "In Progress",
    deadline: "2024-05-01",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to your backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any changes made
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Project Details</h1>
          {!isEditing ? (
            <Button onClick={handleEdit}>
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </Button>
          ) : (
            <div>
              <Button onClick={handleSave} className="mr-2">
                <Save className="mr-2 h-4 w-4" /> Save
              </Button>
              <Button onClick={handleCancel} variant="outline">
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <Input
              type="text"
              value={projectData.name}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              value={projectData.description}
              onChange={(e) =>
                setProjectData({ ...projectData, description: e.target.value })
              }
              disabled={!isEditing}
              rows={4}
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <Input
                type="text"
                value={projectData.status}
                onChange={(e) =>
                  setProjectData({ ...projectData, status: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <Input
                type="date"
                value={projectData.deadline}
                onChange={(e) =>
                  setProjectData({ ...projectData, deadline: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Project Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/placeholder-design-${item}.jpg`}
                    alt={`Design ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
