import { create } from "zustand";
import { User } from "@prisma/client";

interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  setUsers: (users: User[]) => void;
  setCurrentUser: (user: User | null) => void;
  addUser: (user: User) => void;
  updateUser: (id: string, userData: Partial<User>) => void;
  deleteUser: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,
  setUsers: (users) => set({ users }),
  setCurrentUser: (user) => set({ currentUser: user }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, userData) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...userData } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
