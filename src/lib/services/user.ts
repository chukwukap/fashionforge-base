import { User, UserRole } from "@prisma/client";
import { useUserStore } from "@/lib/store/useUserStore";

export const userService = {
  async createUser(userData: Partial<User>) {
    const { addUser, setLoading, setError } = useUserStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error("Failed to create user");
      const newUser = await response.json();
      addUser(newUser);
      return newUser;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },

  async checkUserRole(userId: string): Promise<boolean> {
    try {
      const response = await fetch(`/api/users/${userId}/role`);
      if (!response.ok) throw new Error("Failed to check user role");
      const data = await response.json();
      return data.hasRole;
    } catch (error) {
      console.error("Error checking user role:", error);
      return false;
    }
  },

  async updateUserRole(userId: string, role: UserRole) {
    const { updateUser, setError } = useUserStore.getState();
    try {
      const response = await fetch(`/api/users/${userId}/role`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      if (!response.ok) throw new Error("Failed to update user role");
      const updatedUser = await response.json();
      updateUser(userId, updatedUser);
    } catch (error) {
      setError(error?.toString() || null);
    }
  },
  async checkIsNewUser(userId: string): Promise<boolean> {
    try {
      const response = await fetch(`/api/users/${userId}/status`);
      if (!response.ok) throw new Error("Failed to check user status");
      const data = await response.json();
      return data.isNewUser;
    } catch (error) {
      console.error("Error checking user status:", error);
      return false;
    }
  },

  async getUserRole(userId: string): Promise<UserRole | null> {
    const response = await fetch(`/api/users/${userId}/role`);
    if (!response.ok) throw new Error("Failed to get user role");
    const data = await response.json();
    return data.role;
  },

  async updateUserRoleAndStatus(userId: string, role: UserRole) {
    const { updateUser, setError } = useUserStore.getState();
    try {
      const response = await fetch(`/api/users/${userId}/role-and-status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      if (!response.ok)
        throw new Error("Failed to update user role and status");
      const updatedUser = await response.json();
      updateUser(userId, updatedUser);
    } catch (error) {
      setError(error?.toString() || null);
    }
  },
};
