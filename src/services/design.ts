import { Design, DesignerProfile, Collection } from "@prisma/client";
import { useDesignStore } from "@/stores/useDesignStore";

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

  async fetchDesigns() {
    const { setDesigns, setLoading, setError } = useDesignStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/designs");
      if (!response.ok) throw new Error("Failed to fetch designs");
      const designs: DesignWithRelations[] = await response.json();
      setDesigns(designs);
      return designs;
    } catch (error) {
      setError(error?.toString() || null);
      return [];
    } finally {
      setLoading(false);
    }
  },

  async updateDesign(id: string, designData: Partial<Design>) {
    const { updateDesign, setLoading, setError } = useDesignStore.getState();
    setLoading(true);
    try {
      const response = await fetch(`/api/designs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(designData),
      });
      if (!response.ok) throw new Error("Failed to update design");
      const updatedDesign: DesignWithRelations = await response.json();
      updateDesign(id, updatedDesign);
      return updatedDesign;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },

  async deleteDesign(id: string) {
    const { deleteDesign, setLoading, setError } = useDesignStore.getState();
    setLoading(true);
    try {
      const response = await fetch(`/api/designs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete design");
      deleteDesign(id);
      return true;
    } catch (error) {
      setError(error?.toString() || null);
      return false;
    } finally {
      setLoading(false);
    }
  },
};
