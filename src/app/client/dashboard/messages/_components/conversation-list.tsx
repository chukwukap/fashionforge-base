import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Conversation } from "@/lib/types";

interface ConversationListProps {
  conversations: Conversation[];
  activeConversation: string | null;
  onSelectConversation: (id: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  activeConversation,
  onSelectConversation,
}) => (
  <ScrollArea className="h-[calc(100vh-200px)] md:h-[calc(100vh-300px)]">
    {conversations.map((convo) => (
      <div
        key={convo.id}
        className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors duration-200 ${
          activeConversation === convo.id ? "bg-gray-100" : ""
        }`}
        onClick={() => onSelectConversation(convo.id)}
      >
        <div className="relative">
          <Avatar className="h-12 w-12 mr-3">
            <AvatarImage src={convo.avatar} alt={convo.with} />
            <AvatarFallback>{convo.with[0]}</AvatarFallback>
          </Avatar>
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
              convo.status === "online"
                ? "bg-green-500"
                : convo.status === "away"
                ? "bg-yellow-500"
                : "bg-gray-500"
            }`}
          ></span>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{convo.with}</h3>
            <span className="text-xs text-gray-500">{convo.timestamp}</span>
          </div>
          <p className="text-sm text-gray-600 truncate">{convo.lastMessage}</p>
        </div>
        {convo.unread > 0 && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
            {convo.unread}
          </span>
        )}
      </div>
    ))}
  </ScrollArea>
);

export default ConversationList;
