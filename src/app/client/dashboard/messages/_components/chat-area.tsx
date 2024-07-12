import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/lib/types";
import { FileIcon, ImageIcon } from "lucide-react";

interface ChatAreaProps {
  messages: Message[];
}

const ChatArea: React.FC<ChatAreaProps> = ({ messages }) => (
  <ScrollArea className="flex-grow p-4">
    {messages.map((message) => (
      <div
        key={message.id}
        className={`flex mb-4 ${
          message.sender === "You" ? "justify-end" : "justify-start"
        }`}
      >
        {message.sender !== "You" && (
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={message.avatar} alt={message.sender} />
            <AvatarFallback>{message.sender[0]}</AvatarFallback>
          </Avatar>
        )}
        <div
          className={`rounded-lg p-3 max-w-[70%] ${
            message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <p>{message.content}</p>
          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-2 space-y-2">
              {message.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center">
                  {attachment.type === "image" ? (
                    <ImageIcon className="mr-2" />
                  ) : (
                    <FileIcon className="mr-2" />
                  )}
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline"
                  >
                    {attachment.name}
                  </a>
                </div>
              ))}
            </div>
          )}
          <span className="text-xs opacity-70 mt-1 block">
            {message.timestamp}
          </span>
        </div>
      </div>
    ))}
  </ScrollArea>
);

export default ChatArea;
