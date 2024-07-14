"use client";

import React, { useState } from "react";
import { UserRole } from "@prisma/client";
import { userService } from "@/lib/services/user";
import { useRouter } from "next/navigation";

const userRoles: UserRole[] = ["CLIENT", "DESIGNER", "ADMIN"];

interface UserTypeSelectionProps {
  userId: string;
  setUserRole: (role: UserRole) => void;
  setIsNewUser: (isNew: boolean) => void;
}

export const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({
  userId,
  setUserRole,
  setIsNewUser,
}) => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole>("CLIENT");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await userService.updateUserRoleAndStatus(userId, selectedRole);
    setUserRole(selectedRole);
    setIsNewUser(false);
    // Redirect to dashboard or reload the page
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome! Please select your user type</h2>
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
