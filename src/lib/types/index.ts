export interface Project {
  id: string;
  title: string;
  designer: string;
  status: "In Progress" | "Review" | "Completed";
  progress: number;
  dueDate: string;
  lastUpdate: string;
  image: string;
  trend: "up" | "down" | "stable";
  teamSize: number;
  commentsCount: number;
  description?: string;
  budget?: number;
  startDate?: string;
  piecesCount: number;
}

export interface Message {
  id: string;
  conversationId: string; // Add this line
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  unread: boolean;
  attachments?: { type: "image" | "file"; url: string; name: string }[];
}

export interface Conversation {
  id: string;
  with: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  status: "online" | "offline" | "away";
}

import { BigNumber } from "ethers";

export interface Design {
  id: string;
  name: string;
  description: string;
  price: string;
  likes: number;
  views: number;
  status: "Minted" | "ForSale" | "Sold" | "Drafted";
  designer: string;
  createdAt: number;
  updatedAt: number;
  mainImage: string;
  variations: Variation[];
  tags: string[];
  collectionId: string;
}

export interface Variation {
  id: string;
  name: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  designCount: number;
  tags: string[];
  likes: number;
  views: number;
  createdAt: string;
  designer: string;
}

export type FabricCategory = "Cotton" | "Silk" | "Wool" | "Synthetic" | "Linen";

export interface Fabric {
  id: string;
  name: string;
  description: string;
  category: FabricCategory;
  imageUrl: string;
  texture: string;
  color: string;
  availability: string;
  weight: number;
  width: number;
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  tags: string[];
}

export interface ClientMeasurement {
  id: string;
  name: string;
  email: string;
  measurements: {
    bust: number;
    waist: number;
    hips: number;
  };
}
