import { createStore } from "zustand";
import { createClientComponent } from "@/lib/supabase";
import { User, UserRole } from "@/lib/types";

interface UserState {
  user: User | null;
  loading: boolean;
  isNewUser: boolean;
}

interface UserActions {
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setIsNewUser: (isNewUser: boolean) => void;
  fetchUser: (address: string) => Promise<void>;
  setUserRole: (
    address: string,
    role: UserRole,
    signature: string
  ) => Promise<void>;
}

export const useUserStore = createStore<UserState & UserActions>((set) => ({
  user: null,
  loading: true,
  isNewUser: false,

  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setIsNewUser: (isNewUser) => set({ isNewUser }),

  fetchUser: async (address) => {
    const supabase = createClientComponent();
    set({ loading: true });

    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("walletAddress", address)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          set({ isNewUser: true, user: null });
        } else {
          console.error("Error fetching user:", error);
          set({ user: null });
        }
      } else {
        set({ user: data as User, isNewUser: false });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },

  setUserRole: async (address, role, signature) => {
    const supabase = createClientComponent();
    set({ loading: true });

    try {
      const newUser = {
        walletAddress: address,
        role: role,
        signature: signature,
      };

      const { data, error } = await supabase
        .from("users")
        .insert(newUser)
        .single();

      if (error) {
        console.error("Error creating user:", error);
      } else {
        set({ user: data as User, isNewUser: false });
      }
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
