import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Conversation } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

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
  <nav className="mt-5 px-2 space-y-1">
    {conversations.map((convo) => (
      <button
        key={convo.id}
        onClick={() => onSelectConversation(convo.id)}
        className={`w-full text-left px-2 py-2 rounded-md flex items-center space-x-3 transition-colors duration-200 ${
          activeConversation === convo.id
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }`}
      >
        <div className="relative flex-shrink-0">
          <Avatar className="h-10 w-10">
            <AvatarImage src={convo.avatar} alt={convo.with} />
            <AvatarFallback>{convo.with[0]}</AvatarFallback>
          </Avatar>
          <span
            className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${
              convo.status === "online"
                ? "bg-green-400"
                : convo.status === "away"
                ? "bg-yellow-400"
                : "bg-gray-400"
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 truncate">
              {convo.with}
            </p>
            <p className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(convo.timestamp), {
                addSuffix: true,
              })}
            </p>
          </div>
          <p className="text-sm text-gray-500 truncate">{convo.lastMessage}</p>
        </div>
        {convo.unread > 0 && (
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {convo.unread}
          </span>
        )}
      </button>
    ))}
  </nav>
);

export default ConversationList;
