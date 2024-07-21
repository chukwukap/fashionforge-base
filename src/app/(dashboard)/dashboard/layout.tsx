import React from "react";
import { CollapsibleSidebar } from "./_components/side-bar";
import DashboardHeader from "./_components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <CollapsibleSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          toggleSidebar={async () => {
            "use server";
          }}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
