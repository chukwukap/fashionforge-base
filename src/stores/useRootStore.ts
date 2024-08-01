import { useCurrentUserStore } from "./useCurrentUserStore";
import { useProjectStore } from "./useProjectStore";
import { useDesignStore } from "./useDesignStore";
import { useCollectionStore } from "./useCollection";
import { useFabricStore } from "./useFabricStore";
import { useMessageStore } from "./useMessageStore";

export const useRootStore = () => ({
  userStore: useCurrentUserStore,
  projectStore: useProjectStore,
  designStore: useDesignStore,
  collectionStore: useCollectionStore,
  fabricStore: useFabricStore,
  messageStore: useMessageStore,
});
