import { create } from "zustand";
import { Message, User, Conversation } from "@prisma/client";

interface MessageWithRelations extends Message {
  sender: User;
  receiver: User;
  conversation: Conversation;
}

interface MessageState {
  messages: MessageWithRelations[];
  loading: boolean;
  error: string | null;
  setMessages: (messages: MessageWithRelations[]) => void;
  addMessage: (message: MessageWithRelations) => void;
  updateMessage: (
    id: string,
    messageData: Partial<MessageWithRelations>
  ) => void;
  deleteMessage: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  loading: false,
  error: null,
  setMessages: (messages) => set({ messages }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  updateMessage: (id, messageData) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id ? { ...message, ...messageData } : message
      ),
    })),
  deleteMessage: (id) =>
    set((state) => ({
      messages: state.messages.filter((message) => message.id !== id),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
