"use client";

import React, { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { UserRole } from "@prisma/client";
import { userService } from "@/lib/services/user";
import { useRouter } from "next/navigation";

const userRoles: UserRole[] = ["CLIENT", "DESIGNER", "ADMIN"];

export const UserTypeSelection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>("CLIENT");
  const { user } = usePrivy();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      await userService.updateUserRole(user.id, selectedRole);
      // Redirect to dashboard or reload the page
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select your user type</h2>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value as UserRole)}
      >
        {userRoles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button type="submit">Continue</button>
    </form>
  );
};
