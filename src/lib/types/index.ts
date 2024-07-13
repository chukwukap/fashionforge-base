import ethers from "ethers";

// User and Authentication
export type UserRole = "CLIENT" | "DESIGNER" | "ADMIN";
export type UserStatus = "ACTIVE" | "PENDING" | "SUSPENDED";

export interface BaseUser {
  id: string;
  privy_id: string;
  email: string;
  name: string;
  avatar?: string;
  walletAddress?: string;
  createdAt: Date;
  updatedAt: Date;
  status: UserStatus;
}

export interface ClientUser extends BaseUser {
  role: "CLIENT";
  measurements?: ClientMeasurement;
  projects: string[];
}

export interface DesignerUser extends BaseUser {
  role: "DESIGNER";
  expertise: string[];
  yearsOfExperience: number;
  portfolio?: string;
  designs: string[];
  clients: string[];
}

export interface AdminUser extends BaseUser {
  role: "ADMIN";
  permissions: string[];
}

export type User = ClientUser | DesignerUser | AdminUser;

export interface RoleDetails {
  id: string;
  name: UserRole;
  description: string;
  permissions: string[];
}

export interface UserWithRole extends BaseUser {
  role: UserRole;
  roleDetails: RoleDetails;
}

// Privy-specific types
export interface PrivyUser {
  id: string;
  wallet?: {
    address: string;
    chainId: number;
  };
  email?: {
    address: string;
    verified: boolean;
  };
  google?: {
    email: string;
    subject: string;
  };
  twitter?: {
    username: string;
    subject: string;
  };
  discord?: {
    username: string;
    subject: string;
  };
  github?: {
    username: string;
    subject: string;
  };
  linkedAccounts: string[];
}

export interface AuthState {
  ready: boolean;
  authenticated: boolean;
  user: PrivyUser | null;
}

// Projects and Designs
export type ProjectStatus =
  | "Draft"
  | "In Progress"
  | "Review"
  | "Completed"
  | "Cancelled";
export type DesignStatus = "Drafted" | "Minted" | "ForSale" | "Sold";

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  designerId: string;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  dueDate: string;
  lastUpdate: string;
  image: string;
  trend: "up" | "down" | "stable";
  teamSize: number;
  commentsCount: number;
  budget: ethers.BigNumberish;
  piecesCount: number;
  designs: string[];
  contractAddress: string;
}

export interface Design {
  id: string;
  name: string;
  description: string;
  price: ethers.BigNumberish;
  likes: number;
  views: number;
  status: DesignStatus;
  designer: string;
  createdAt: number;
  updatedAt: number;
  mainImage: string;
  variations: Variation[];
  tags: string[];
  collectionId: string;
  tokenId?: string;
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

// Communication
export interface Message {
  id: string;
  conversationId: string;
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

// Materials and Colors
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

// Measurements
export interface ClientMeasurement {
  id: string;
  clientId: string;
  measurements: {
    bust: number;
    waist: number;
    hips: number;
    height: number;
    weight: number;
  };
  customMeasurements?: Record<string, number>;
}

// Blockchain and Transactions
export type TransactionStatus = "Pending" | "Completed" | "Failed";

export interface Transaction {
  id: string;
  projectId: string;
  amount: ethers.BigNumberish;
  tokenAddress: string;
  status: TransactionStatus;
  fromAddress: string;
  toAddress: string;
  transactionHash: string;
  blockNumber?: number;
  timestamp: Date;
}

export interface ContractEvent {
  id: string;
  contractAddress: string;
  eventName: string;
  parameters: Record<string, any>;
  transactionHash: string;
  blockNumber: number;
  timestamp: Date;
}

// Additional Types
export interface Review {
  id: string;
  projectId: string;
  reviewerId: string;
  designerId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export type NotificationType =
  | "ProjectUpdate"
  | "DesignFeedback"
  | "Message"
  | "DeadlineReminder"
  | "PaymentReceived"
  | "DesignMinted";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  content: string;
  relatedId?: string;
  read: boolean;
  createdAt: Date;
}

export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
}

function mapPrivyUserToAppUser(privyUser: PrivyUser, role: UserRole): User {
  const baseUser: BaseUser = {
    id: privyUser.id,
    privy_id: privyUser.id,
    email: privyUser.email?.address || "",
    name: privyUser.email?.address || "",
    walletAddress: privyUser.wallet?.address,
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "ACTIVE",
  };

  switch (role) {
    case "CLIENT":
      return { ...baseUser, role, projects: [] };
    case "DESIGNER":
      return {
        ...baseUser,
        role,
        expertise: [],
        yearsOfExperience: 0,
        designs: [],
        clients: [],
      };
    case "ADMIN":
      return { ...baseUser, role, permissions: [] };
  }
}
