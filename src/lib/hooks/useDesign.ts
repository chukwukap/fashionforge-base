import { useRootStore } from "../store/useRootStore";

export const useDesign = () => {
  const { designStore } = useRootStore();
  return designStore((state) => ({
    designs: state.designs,
    loading: state.loading,
    error: state.error,
    setDesigns: state.setDesigns,
    addDesign: state.addDesign,
    updateDesign: state.updateDesign,
    deleteDesign: state.deleteDesign,
    setLoading: state.setLoading,
    setError: state.setError,
  }));
};
