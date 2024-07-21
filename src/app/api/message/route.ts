import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const messages = await prisma.message.findMany({
    include: { sender: true, receiver: true, conversation: true },
  });
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const data = await request.json();
  const message = await prisma.message.create({
    data,
    include: { sender: true, receiver: true, conversation: true },
  });
  return NextResponse.json(message);
}

// 'use client';

// import React, { useEffect } from 'react';
// import { useMessage } from '@/hooks/useMessage';
// import { Message, User, Conversation } from '@prisma/client';

// interface MessageWithRelations extends Message {
//   sender: User;
//   receiver: User;
//   conversation: Conversation;
// }

// interface MessageListProps {
//   initialMessages: MessageWithRelations[];
// }

// export const MessageList: React.FC<MessageListProps> = ({ initialMessages }) => {
//   const { messages, setMessages, loading, error } = useMessage();

//   useEffect(() => {
//     setMessages(initialMessages);
//   }, [initialMessages, setMessages]);

//   if (loading) return <div>Loading messages...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Messages</h1>
//       <ul>
//         {messages.map((message) => (
//           <li key={message.id}>
//             From: {message.sender.name}, To: {message.receiver.name}, Content: {message.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
