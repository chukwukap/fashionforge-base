"use client";
import { usePrizy } from "@/lib/hooks/usePrivy";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/router";

const ProtectedRoute = (
  WrappedComponent: React.ComponentType,
  allowedRoles?: string[]
) => {
  const ProtectedComponent = (props: any) => {
    const router = useRouter();
    const { user, ready, authenticated } = usePrivy();

    if (!ready) return <div>Loading...</div>;

    if (!(ready && authenticated) || !user) {
      router.replace("/login");
      return null;
    }

    if (allowedRoles && (!user?.role || !allowedRoles.includes(user.role))) {
      router.replace("/unauthorized");
      return null;
    }
    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default ProtectedRoute;
