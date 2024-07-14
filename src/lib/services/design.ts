import { Design, DesignerProfile, Collection } from "@prisma/client";
import { useDesignStore } from "@/lib/store/useDesignStore";

interface DesignWithRelations extends Design {
  designer: DesignerProfile;
  collection: Collection;
}

export const designService = {
  async createDesign(designData: Partial<Design>) {
    const { addDesign, setLoading, setError } = useDesignStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/designs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(designData),
      });
      if (!response.ok) throw new Error("Failed to create design");
      const newDesign: DesignWithRelations = await response.json();
      addDesign(newDesign);
      return newDesign;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },
};
