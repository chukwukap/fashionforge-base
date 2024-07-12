"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, Image as ImageIcon, Smile } from "lucide-react";
import ConversationList from "./_components/conversation-list";
import ChatArea from "./_components/chat-area";
import { Conversation, Message } from "@/lib/types";
import {} from "@/components/ui/sonner";
import { toast } from "sonner";

const MessagesPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeConversation, setActiveConversation] = useState<string | null>(
    null
  );
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        // In a real app, this would be an API call
        const response = await fetch("/api/conversations");
        const data = await response.json();
        setConversations(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch conversations:", error);
        toast.error("Failed to load conversations.", {
          description: "Please try again later.",
        });

        setIsLoading(false);
      }
    };

    fetchConversations();
  }, [toast]);

  const handleSelectConversation = async (id: string) => {
    setActiveConversation(id);
    try {
      // In a real app, this would be an API call
      const response = await fetch(`/api/messages/${id}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      toast.error("Failed to load messages.", {
        description: "Please try again later.",
      });
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !activeConversation) return;

    try {
      // In a real app, this would be an API call
      await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify({
          conversationId: activeConversation,
          content: newMessage,
        }),
      });

      // Optimistically update the UI
      const newMsg: Message = {
        id: Date.now().toString(),
        sender: "You",
        avatar: "https://i.pravatar.cc/150?img=3",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
        unread: false,
      };
      setMessages((prev) => [...prev, newMsg]);
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message.", {
        description: "Please try again.",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Consider using a proper loading spinner component
  }

  return (
    <div className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg text-white mb-6"
      >
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-lg opacity-80">
          Stay connected with your design team
        </p>
      </motion.div>

      <Card className="flex-grow flex overflow-hidden">
        <div className="w-1/3 border-r">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <Input placeholder="Search conversations..." className="mt-2" />
          </CardHeader>
          <ConversationList
            conversations={conversations}
            activeConversation={activeConversation}
            onSelectConversation={handleSelectConversation}
          />
        </div>

        <div className="flex-grow flex flex-col">
          <CardHeader className="border-b">
            <CardTitle>
              {activeConversation
                ? conversations.find((c) => c.id === activeConversation)?.with
                : "Select a conversation"}
            </CardTitle>
          </CardHeader>
          <ChatArea messages={messages} />
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-grow"
              />
              <Button size="icon" variant="ghost">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Smile className="h-5 w-5" />
              </Button>
              <Button onClick={handleSendMessage}>
                <Send className="h-5 w-5 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessagesPage;
