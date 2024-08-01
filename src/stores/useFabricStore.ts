import { create } from "zustand";
import { Fabric } from "@prisma/client";

interface FabricState {
  fabrics: Fabric[];
  loading: boolean;
  error: string | null;
  setFabrics: (fabrics: Fabric[]) => void;
  addFabric: (fabric: Fabric) => void;
  updateFabric: (id: string, fabricData: Partial<Fabric>) => void;
  deleteFabric: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useFabricStore = create<FabricState>()((set) => ({
  fabrics: [],
  loading: false,
  error: null,
  setFabrics: (fabrics) => set({ fabrics }),
  addFabric: (fabric) =>
    set((state) => ({ fabrics: [...state.fabrics, fabric] })),
  updateFabric: (id, fabricData) =>
    set((state) => ({
      fabrics: state.fabrics.map((fabric) =>
        fabric.id === id ? { ...fabric, ...fabricData } : fabric
      ),
    })),
  deleteFabric: (id) =>
    set((state) => ({
      fabrics: state.fabrics.filter((fabric) => fabric.id !== id),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
