"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ConversationList from "./_components/conversation-list";
import ChatArea from "./_components/chat-area";
import { Conversation, Message } from "@/lib/types";
import { sampleConversations, sampleMessages } from "./data";

const MessagesPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeConversation, setActiveConversation] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setConversations(sampleConversations);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectConversation = async (id: string) => {
    setActiveConversation(id);
    setMessages(sampleMessages.filter((msg) => msg.conversationId === id));
    setIsMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col ">
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-ff-dark">Messages</h1>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-ff-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open conversation list</span>
            <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="flex-grow flex overflow-hidden">
        <Transition.Root show={isMobileMenuOpen} as={"div"}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden z-20"
            onClose={setIsMobileMenuOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={"div"}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> */}
              </Transition.Child>
              <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                <Transition.Child
                  as={"div"}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div
                    className="relative w-screen max-w-md"
                    ref={mobileMenuRef}
                  >
                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Conversations
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        <ConversationList
                          conversations={conversations}
                          activeConversation={activeConversation}
                          onSelectConversation={handleSelectConversation}
                        />
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <ConversationList
                  conversations={conversations}
                  activeConversation={activeConversation}
                  onSelectConversation={handleSelectConversation}
                />
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative z-0 overflow-hidden focus:outline-none">
          {activeConversation ? (
            <ChatArea
              messages={messages}
              setMessages={setMessages}
              activeConversation={conversations.find(
                (c) => c.id === activeConversation
              )}
            />
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500 text-xl">
                Select a conversation to start messaging
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MessagesPage;
