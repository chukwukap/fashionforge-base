"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement project creation logic here
    console.log("Creating project:", { projectName, description });
    // After creation, redirect to the projects list
    router.push("/client/projects");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="projectName" className="block mb-1">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
