import { useCurrentUserStore } from "./useCurrentUserStore";
import { useProjectStore } from "./useProjectStore";
import { useDesignStore } from "./useDesignStore";
import { useCollectionStore } from "./useCollection";
import { useFabricStore } from "./useFabricStore";
import { useMessageStore } from "./useMessageStore";
import { useUIStore } from "./uiStore";

export const useRootStore = () => ({
  user: useCurrentUserStore(),
  project: useProjectStore(),
  design: useDesignStore(),
  collection: useCollectionStore(),
  fabric: useFabricStore(),
  message: useMessageStore(),
  ui: useUIStore(),
});
