import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MoreHorizontal } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Designer",
    avatar: "/avatars/alice.jpg",
    status: "online",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Pattern Maker",
    avatar: "/avatars/bob.jpg",
    status: "offline",
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "3D Modeler",
    avatar: "/avatars/carol.jpg",
    status: "online",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Textile Specialist",
    avatar: "/avatars/david.jpg",
    status: "away",
  },
  {
    id: 5,
    name: "Eva Martinez",
    role: "Junior Designer",
    avatar: "/avatars/eva.jpg",
    status: "online",
  },
];

export function TeamMemberList() {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Team Members</h2>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" /> Add Member
        </Button>
      </div>
      <ul className="space-y-4">
        {teamMembers.map((member) => (
          <motion.li
            key={member.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition duration-150 ease-in-out"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-gray-800">{member.name}</p>
                <Badge variant="secondary">{member.role}</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant={
                  member.status === "online"
                    ? "outline"
                    : member.status === "away"
                    ? "destructive"
                    : "secondary"
                }
              >
                {member.status}
              </Badge>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
