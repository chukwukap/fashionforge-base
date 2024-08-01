import { Message, User, Conversation } from "@prisma/client";
import { useMessageStore } from "@/stores/useMessageStore";

interface MessageWithRelations extends Message {
  sender: User;
  receiver: User;
  conversation: Conversation;
}

export const messageService = {
  async createMessage(messageData: Partial<Message>) {
    const { addMessage, setLoading, setError } = useMessageStore.getState();
    setLoading(true);
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageData),
      });
      if (!response.ok) throw new Error("Failed to create message");
      const newMessage: MessageWithRelations = await response.json();
      addMessage(newMessage);
      return newMessage;
    } catch (error) {
      setError(error?.toString() || null);
      return null;
    } finally {
      setLoading(false);
    }
  },
};
