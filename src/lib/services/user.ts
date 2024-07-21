import { User, UserRole } from "@prisma/client";
import { useUserStore } from "@/lib/store/useUserStore";

export const userService = {
  async createUser(userData: Partial<User>) {
    const { addUser, setLoading, setError } = useUserStore.getState();
    return await this.apiCall(
      "/api/users",
      "POST",
      userData,
      addUser,
      setLoading,
      setError
    );
  },

  async getUserByPrivyId(privyId: string) {
    return await this.apiCall(`/api/users/privy/${privyId}`, "GET");
  },

  async checkUserRole(userId: string): Promise<boolean> {
    const data = await this.apiCall(`/api/users/${userId}/role`, "GET");
    return data?.hasRole || false;
  },

  async getUserRole(userId: string): Promise<UserRole | null> {
    const data = await this.apiCall(`/api/users/${userId}/role`, "GET");
    return data?.role || null;
  },

  async updateUserRole(userId: string, role: UserRole) {
    const { updateUser, setError } = useUserStore.getState();
    return await this.apiCall(
      `/api/users/${userId}/role`,
      "PUT",
      { role },
      updateUser,
      undefined,
      setError
    );
  },

  async checkIsNewUser(userId: string): Promise<boolean> {
    const data = await this.apiCall(`/api/users/${userId}/status`, "GET");
    return data?.isNewUser || false;
  },

  async updateUserRoleAndStatus(userId: string, role: UserRole) {
    const { updateUser, setError } = useUserStore.getState();
    return await this.apiCall(
      `/api/users/${userId}/role-and-status`,
      "PUT",
      { role },
      updateUser,
      undefined,
      setError
    );
  },

  async apiCall(
    url: string,
    method: string,
    body?: any,
    onSuccess?: Function,
    setLoading?: Function,
    setError?: Function
  ) {
    if (setLoading) setLoading(true);
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!response.ok) throw new Error(`Failed to ${method} ${url}`);
      const data = await response.json();
      if (onSuccess) onSuccess(data);
      return data;
    } catch (error) {
      if (setError) setError(error?.toString() || null);
      console.error(`Error in ${method} ${url}:`, error);
      return null;
    } finally {
      if (setLoading) setLoading(false);
    }
  },

  async updateProfileImage(userId: string, file: File) {
    const { updateUser, setLoading, setError } = useUserStore.getState();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("bucket", "profile-images");

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const { publicUrl } = await uploadResponse.json();

      const response = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileImage: publicUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user profile image");
      }

      const updatedUser = await response.json();
      updateUser(userId, updatedUser);
      return updatedUser;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },
};
