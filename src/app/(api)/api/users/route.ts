import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await prisma.user.create({ data });
  return NextResponse.json(user);
}

// import React, { useEffect } from 'react';
// import { useUser } from '@/hooks/useUser';
// import { User } from '@prisma/client';

// interface UserListProps {
//   initialUsers: User[];
// }

// export const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
//   const { users, setUsers, loading, error } = useUser();

//   useEffect(() => {
//     setUsers(initialUsers);
//   }, [initialUsers, setUsers]);

//   if (loading) return <div>Loading users...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
