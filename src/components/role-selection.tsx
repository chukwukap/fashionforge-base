// components/RoleSelection.tsx
import React from "react";
import { useUser } from "@/hooks/useUser";
import { UserRole } from "@/lib/types";

export default function RoleSelection() {
  const { setRole } = useUser();

  const handleRoleSelection = (role: UserRole) => {
    setRole(role);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to FashionForge</h1>
      <p className="text-xl mb-8">Please select your role:</p>
      <div className="space-x-4">
        <button
          onClick={() => handleRoleSelection("CLIENT")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          I'm a Client
        </button>
        <button
          onClick={() => handleRoleSelection("DESIGNER")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          I'm a Designer
        </button>
      </div>
    </div>
  );
}
