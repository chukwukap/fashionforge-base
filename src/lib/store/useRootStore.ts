import { useUserStore } from "./useUserStore";
import { useProjectStore } from "./useProjectStore";
import { useDesignStore } from "./useDesignStore";
import { useCollectionStore } from "./useCollection";
import { useFabricStore } from "./useFabricStore";
import { useMessageStore } from "./useMessageStore";

export const useRootStore = () => ({
  userStore: useUserStore,
  projectStore: useProjectStore,
  designStore: useDesignStore,
  collectionStore: useCollectionStore,
  fabricStore: useFabricStore,
  messageStore: useMessageStore,
});
