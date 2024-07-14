import { useState, useEffect } from "react";
import { User, UserRole } from "@prisma/client";
import { userService } from "@/lib/services/user";

export function useUser(privyId: string | null) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      if (!privyId) {
        setLoading(false);
        return;
      }

      try {
        const userData = await userService.getUserByPrivyId(privyId);
        setUser(userData);
      } catch (err) {
        setError("Failed to fetch user");
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [privyId]);

  const updateUserRole = async (role: UserRole) => {
    if (!user) return;

    try {
      await userService.updateUserRoleAndStatus(user.id, role);
      setUser((prevUser) => (prevUser ? { ...prevUser, role } : null));
    } catch (err) {
      setError("Failed to update user role");
      console.error("Error updating user role:", err);
    }
  };

  return { user, loading, error, updateUserRole };
}
