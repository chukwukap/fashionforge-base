import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  User,
  DesignerProfile,
  ClientProfile,
  AdminProfile,
} from "@prisma/client";

interface CurrentUserWithProfiles extends User {
  designerProfile?: DesignerProfile;
  clientProfile?: ClientProfile;
  adminProfile?: AdminProfile;
}

interface CurrentUserState {
  currentUser: CurrentUserWithProfiles | null;
  loading: boolean;
  error: string | null;
  setCurrentUser: (user: CurrentUserWithProfiles | null) => void;
  updateCurrentUser: (userData: Partial<CurrentUserWithProfiles>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCurrentUserStore = create<CurrentUserState>()(
  persist(
    (set) => ({
      currentUser: null,
      loading: false,
      error: null,
      setCurrentUser: (user) => set({ currentUser: user }),
      updateCurrentUser: (userData) =>
        set((state) => ({
          currentUser: state.currentUser
            ? { ...state.currentUser, ...userData }
            : null,
        })),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "current-user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
