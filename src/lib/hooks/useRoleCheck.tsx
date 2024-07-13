import { useAuthenticatedUser } from "./useAuthenticatedUser";
import { UserRole } from "@/lib/types";

export function useRoleCheck(allowedRoles: UserRole[]) {
  const { user, loading } = useAuthenticatedUser();

  if (loading) return { allowed: false, loading: true };

  const allowed = user ? allowedRoles.includes(user.role) : false;

  return { allowed, loading: false };
}
