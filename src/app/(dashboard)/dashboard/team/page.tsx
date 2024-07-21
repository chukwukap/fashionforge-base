"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamMemberList } from "./_components/team-member-list";
import { TeamStats } from "./_components/team-stats";
import { CollaborationTools } from "./_components/collaboration-tools";
import { TeamProjects } from "./_components/team-projects";
import { TeamPerformance } from "./_components/team-performance";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Design Team Collaboration Hub
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TeamMemberList />
          <TeamProjects />
          <TeamPerformance />
        </div>
        <div className="space-y-6">
          <TeamStats />
          <CollaborationTools />
        </div>
      </div>
    </div>
  );
}
