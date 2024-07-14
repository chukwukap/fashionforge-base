import { Collection, DesignerProfile, Design } from "@prisma/client";
import { useCollectionStore } from "@/lib/store/useCollection";

interface CollectionWithRelations extends Collection {
  designer: DesignerProfile;
  designs: Design[];
}

export const collectionService = {
  async createCollection(collectionData: Partial<Collection>) {
    const { addCollection, setLoading, setError } =
      useCollectionStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(collectionData),
      });
      if (!response.ok) throw new Error("Failed to create collection");
      const newCollection: CollectionWithRelations = await response.json();
      addCollection(newCollection);
      return newCollection;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },
};
