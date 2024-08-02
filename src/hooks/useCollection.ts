import { useRootStore } from "../stores/useRootStore";

export const useCollection = () => {
  const { collectionStore } = useRootStore();
  return collectionStore((state) => ({
    collections: state.collections,
    loading: state.loading,
    error: state.error,
    setCollections: state.setCollections,
    addCollection: state.addCollection,
    updateCollection: state.updateCollection,
    deleteCollection: state.deleteCollection,
    setLoading: state.setLoading,
    setError: state.setError,
  }));
};
