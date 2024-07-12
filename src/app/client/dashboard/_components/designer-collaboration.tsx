import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MessageCircle } from "lucide-react";

const designers = [
  {
    name: "Alice Johnson",
    avatar: "/avatars/alice.jpg",
    project: "Summer Collection",
    lastActivity: "2 hours ago",
  },
  {
    name: "Bob Smith",
    avatar: "/avatars/bob.jpg",
    project: "Autumn Lookbook",
    lastActivity: "1 day ago",
  },
  {
    name: "Carol Williams",
    avatar: "/avatars/carol.jpg",
    project: "Winter Essentials",
    lastActivity: "3 days ago",
  },
];

const DesignerCollaboration: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Designer Collaboration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {designers.map((designer, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={designer.avatar} alt={designer.name} />
                <AvatarFallback>
                  {designer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="font-medium">{designer.name}</p>
                <p className="text-sm text-muted-foreground">
                  {designer.project}
                </p>
              </div>
              <div className="text-sm text-muted-foreground flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                {designer.lastActivity}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DesignerCollaboration;
