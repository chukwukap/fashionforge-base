import React from "react";
import { ProjectList } from "./project-list";
import { ProjectInsights } from "./project-insights";

export function ProjectsOverview() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <ProjectList />
      </div>
      <div>
        <ProjectInsights />
      </div>
    </div>
  );
}
