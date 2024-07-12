import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  PaperClipIcon,
  PhotoIcon,
  FaceSmileIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Message, Conversation } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { toast } from "sonner";

interface ChatAreaProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  activeConversation: Conversation | undefined;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  setMessages,
  activeConversation,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLDivElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSendMessage = () => {
    if (!newMessage.trim() && attachments.length === 0) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "You",
      avatar: "https://i.pravatar.cc/150?img=4",
      content: newMessage,
      timestamp: new Date().toISOString(),
      unread: false,
      conversationId: activeConversation?.id || "",
      attachments: attachments.map((file) => ({
        type: file.type.startsWith("image/") ? "image" : "file",
        url: URL.createObjectURL(file),
        name: file.name,
      })),
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
    setAttachments([]);
    if (chatInputRef.current) {
      chatInputRef.current.innerHTML = "";
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    if (chatInputRef.current) {
      chatInputRef.current.innerHTML += emojiData.emoji;
      setNewMessage(chatInputRef.current.innerText);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => file.size <= MAX_FILE_SIZE);

    if (validFiles.length < files.length) {
      toast.warning(
        "Some files were too large and were not added. Maximum file size is 5MB."
      );
    }

    setAttachments((prev) => [...prev, ...validFiles]);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="border-b border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={activeConversation?.avatar}
                alt={activeConversation?.with}
              />
              <AvatarFallback>{activeConversation?.with[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-900">
                {activeConversation?.with}
              </p>
              <p className="text-sm text-gray-500">
                {activeConversation?.status === "online" ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        {messages.map((message) => (
          <animated.div
            key={message.id}
            style={fadeIn}
            className={`flex ${
              message.sender === "You" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`flex max-w-xs md:max-w-md ${
                message.sender === "You" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {message.sender !== "You" && (
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={message.avatar} alt={message.sender} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 ${
                  message.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                {message.attachments &&
                  message.attachments.map((attachment, index) => (
                    <div key={index} className="mt-2">
                      {attachment.type === "image" ? (
                        <img
                          src={attachment.url}
                          alt={attachment.name}
                          className="max-w-full h-auto rounded"
                        />
                      ) : (
                        <a
                          href={attachment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline"
                        >
                          {attachment.name}
                        </a>
                      )}
                    </div>
                  ))}
                <p className="text-xs mt-1 opacity-70">
                  {formatDistanceToNow(new Date(message.timestamp), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </animated.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded p-1"
              >
                <span className="text-sm truncate max-w-xs">{file.name}</span>
                <button
                  onClick={() => removeAttachment(index)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <XCircleIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center">
          <div
            ref={chatInputRef}
            contentEditable
            className="flex-1 mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[40px] max-h-[120px] overflow-y-auto"
            onInput={(e) => setNewMessage(e.currentTarget.innerText)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple
            className="hidden"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
          >
            <PaperClipIcon className="h-5 w-5 text-gray-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
          >
            <PhotoIcon className="h-5 w-5 text-gray-400" />
          </Button>
          <div className="relative" ref={emojiPickerRef}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <FaceSmileIcon className="h-5 w-5 text-gray-400" />
            </Button>
            {showEmojiPicker && (
              <div className="absolute bottom-10 right-0">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
