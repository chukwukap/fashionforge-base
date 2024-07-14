import React from "react";
import CollapsibleSidebar from "./_components/side-bar";
import DashboardHeader from "./_components/header";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen bg-background w-full bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <CollapsibleSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
