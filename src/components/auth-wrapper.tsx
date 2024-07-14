"use client";

import React, { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { UserTypeSelection } from "./forms/user-type";
import { userService } from "@/lib/services/user";
import { UserRole } from "@prisma/client";

interface AuthWrapperProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  allowedRoles,
}) => {
  const { ready, authenticated, user } = usePrivy();
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (authenticated && user) {
      userService.getUserRole(user.id).then((role) => {
        setUserRole(role);
        setIsNewUser(role === null);
      });
    }
  }, [authenticated, user]);

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    router.push("/login");
    return null;
  }

  if (isNewUser === null || userRole === null) {
    return <div>Checking user status...</div>;
  }

  if (isNewUser) {
    return (
      <UserTypeSelection
        userId={user?.id}
        setUserRole={setUserRole}
        setIsNewUser={setIsNewUser}
      />
    );
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    router.push("/unauthorized");
    return null;
  }

  return <>{children}</>;
};
