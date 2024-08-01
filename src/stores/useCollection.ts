import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Collection, DesignerProfile, Design } from "@prisma/client";

interface CollectionWithRelations extends Collection {
  designer: DesignerProfile;
  designs: Design[];
}

interface CollectionState {
  collections: CollectionWithRelations[];
  loading: boolean;
  error: string | null;
  setCollections: (collections: CollectionWithRelations[]) => void;
  addCollection: (collection: CollectionWithRelations) => void;
  updateCollection: (
    id: string,
    collectionData: Partial<CollectionWithRelations>
  ) => void;
  deleteCollection: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set) => ({
      collections: [],
      loading: false,
      error: null,
      setCollections: (collections) => set({ collections }),
      addCollection: (collection) =>
        set((state) => ({ collections: [...state.collections, collection] })),
      updateCollection: (id, collectionData) =>
        set((state) => ({
          collections: state.collections.map((collection) =>
            collection.id === id
              ? { ...collection, ...collectionData }
              : collection
          ),
        })),
      deleteCollection: (id) =>
        set((state) => ({
          collections: state.collections.filter(
            (collection) => collection.id !== id
          ),
        })),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "collection-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
