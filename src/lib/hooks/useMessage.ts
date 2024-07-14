import { useRootStore } from "../store/useRootStore";

export const useMessage = () => {
  const { messageStore } = useRootStore();
  return messageStore((state) => ({
    messages: state.messages,
    loading: state.loading,
    error: state.error,
    setMessages: state.setMessages,
    addMessage: state.addMessage,
    updateMessage: state.updateMessage,
    deleteMessage: state.deleteMessage,
    setLoading: state.setLoading,
    setError: state.setError,
  }));
};
