import React from "react";
import Sidebar from "./_components/side-bar";
import Header from "./_components/header";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {/* <Header /> */}
        {children}
      </div>
    </div>
  );
}
