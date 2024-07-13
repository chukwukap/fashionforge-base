"use client";
import { useUser } from "@/lib/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = (
  WrappedComponent: React.ComponentType,
  allowedRoles?: string[]
) => {
  const ProtectedComponent = (props: any) => {
    const router = useRouter();
    const { user, loading } = useUser();

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/login");
      } else if (user && allowedRoles && !allowedRoles.includes(user.role)) {
        router.replace("/unauthorized");
      }
    }, [user, loading, router]);

    if (loading) return <div>Loading...</div>;

    if (!user) return null; // Router will redirect, no need to render anything

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return null; // Router will redirect, no need to render anything
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default ProtectedRoute;
