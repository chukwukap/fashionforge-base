"use client";

import React, { useEffect, useState } from "react";
import { usePrivy, useLogin } from "@privy-io/react-auth";
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
  const { login } = useLogin({
    onComplete: async (user, isNewUser) => {
      if (isNewUser) {
        await userService.createUser({
          privyId: user.id,
          email: user.email?.address,
        });
      }
      await checkUserRole(user.id);
    },
  });
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);
  const router = useRouter();

  const checkUserRole = async (userId: string) => {
    const role = await userService.getUserRole(userId);
    setUserRole(role);
    setIsNewUser(role === null);
  };

  useEffect(() => {
    if (authenticated && user) {
      checkUserRole(user.id);
    }
  }, [authenticated, user]);

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    login();
    return null;
  }

  if (isNewUser === null || userRole === null) {
    return <div>Checking user status...</div>;
  }

  if (isNewUser && user) {
    return (
      <UserTypeSelection
        userId={user.id}
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
