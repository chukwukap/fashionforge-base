import React from "react";
import Sidebar from "./_components/side-bar";
import Header from "./_components/header";
import MobileMenu from "./_components/mobile-menu";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar className="hidden md:block" />
      <div className="flex-1 flex flex-col">
        <Header>
          <MobileMenu />
        </Header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
