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
