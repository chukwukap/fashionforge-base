"use client";
import React from "react";
import { PageHeader } from "./_components/page-header";
import { ProjectsOverview } from "./_components/projects-overview";
import { InspirationCorner } from "./_components/inspiration-corner";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <PageHeader />
        <ProjectsOverview />
        <InspirationCorner />
      </div>
    </div>
  );
}
