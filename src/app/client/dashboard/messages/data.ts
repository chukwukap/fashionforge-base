import { Conversation, Message } from "@/lib/types";

export const sampleConversations: Conversation[] = [
  {
    id: "1",
    with: "Aria Zhang",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "The new sketches for the Summer Breeze collection are ready!",
    timestamp: "Fri Jul 12 2024 15:30:45 GMT+0100 (West Africa Standard Time)",
    unread: 2,
    status: "online",
  },
  {
    id: "2",
    with: "Liam Eco",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Can we discuss the sustainable fabric options?",
    timestamp: "Fri Jul 12 2024 15:30:45 GMT+0100 (West Africa Standard Time)",
    unread: 0,
    status: "away",
  },
  {
    id: "3",
    with: "Sofia Rossi",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "I've updated the color palette for the Autumn collection.",
    timestamp: "Fri Jul 12 2024 15:30:45 GMT+0100 (West Africa Standard Time)",
    unread: 1,
    status: "offline",
  },
  // Add more conversations as needed
];

export const sampleMessages: Message[] = [
  {
    id: "1",
    sender: "Aria Zhang",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "Hi there! I've just uploaded the latest sketches for the Summer Breeze collection. Would love your thoughts!",
    timestamp: "Fri Jul 12 2024 15:30:45 GMT+0100 (West Africa Standard Time)",
    unread: true,
    attachments: [
      {
        type: "image",
        url: "https://example.com/sketch1.jpg",
        name: "Summer Breeze Sketch 1",
      },
      {
        type: "image",
        url: "https://example.com/sketch2.jpg",
        name: "Summer Breeze Sketch 2",
      },
    ],
    conversationId: "1",
  },
  {
    id: "2",
    sender: "You",
    avatar: "https://i.pravatar.cc/150?img=4",
    content:
      "Thanks, Aria! These look fantastic. I especially love the floral patterns in sketch 2. Can we explore more pastel colors for this design?",
    timestamp: "Fri Jul 12 2024 15:30:45 GMT+0100 (West Africa Standard Time)",
    unread: false,
    conversationId: "1",
  },
  {
    id: "3",
    sender: "Aria Zhang",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "Absolutely! I'll work on a pastel variant and send it over by tomorrow Any specific shades you had in mind?",
    timestamp: "Fri Jul 12 2024 15:30:45 GMT+0100 (West Africa Standard Time)",
    unread: true,
    conversationId: "1",
  },
  // Add more messages as needed
];
