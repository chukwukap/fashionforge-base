import { create } from "zustand";
import { Design, DesignerProfile, Collection } from "@prisma/client";

interface DesignWithRelations extends Design {
  designer: DesignerProfile;
  collection: Collection;
}

interface DesignState {
  designs: DesignWithRelations[];
  loading: boolean;
  error: string | null;
  setDesigns: (designs: DesignWithRelations[]) => void;
  addDesign: (design: DesignWithRelations) => void;
  updateDesign: (id: string, designData: Partial<DesignWithRelations>) => void;
  deleteDesign: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDesignStore = create<DesignState>((set) => ({
  designs: [],
  loading: false,
  error: null,
  setDesigns: (designs) => set({ designs }),
  addDesign: (design) =>
    set((state) => ({ designs: [...state.designs, design] })),
  updateDesign: (id, designData) =>
    set((state) => ({
      designs: state.designs.map((design) =>
        design.id === id ? { ...design, ...designData } : design
      ),
    })),
  deleteDesign: (id) =>
    set((state) => ({
      designs: state.designs.filter((design) => design.id !== id),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
