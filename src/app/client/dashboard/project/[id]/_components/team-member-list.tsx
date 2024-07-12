import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Award } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  phone: string;
  linkedin: string;
  expertise: string[];
  yearsOfExperience: number;
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Aria Zhang",
    role: "Lead Designer",
    avatar: "/avatars/aria-zhang.jpg",
    email: "aria.zhang@fashionforge.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/ariazhang",
    expertise: ["Haute Couture", "Sustainable Fashion", "Digital Design"],
    yearsOfExperience: 12,
  },
  {
    id: "2",
    name: "Eze Johnson",
    role: "Pattern Maker",
    avatar: "/avatars/leo-chen.jpg",
    email: "leo.chen@fashionforge.com",
    phone: "+234 91 30718322",
    linkedin: "linkedin.com/in/leochen",
    expertise: ["3D Pattern Making", "Technical Design", "Fit Optimization"],
    yearsOfExperience: 8,
  },
  {
    id: "3",
    name: "Sofia Rossi",
    role: "Textile Specialist",
    avatar: "/avatars/sofia-rossi.jpg",
    email: "sofia.rossi@fashionforge.com",
    phone: "+1 (555) 345-6789",
    linkedin: "linkedin.com/in/sofiarossi",
    expertise: ["Sustainable Fabrics", "Textile Innovation", "Color Theory"],
    yearsOfExperience: 10,
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Production Manager",
    avatar: "/avatars/marcus-johnson.jpg",
    email: "marcus.johnson@fashionforge.com",
    phone: "+1 (555) 456-7890",
    linkedin: "linkedin.com/in/marcusjohnson",
    expertise: [
      "Supply Chain Management",
      "Quality Control",
      "Lean Manufacturing",
    ],
    yearsOfExperience: 15,
  },
  {
    id: "5",
    name: "Yuki Tanaka",
    role: "Junior Designer",
    avatar: "/avatars/yuki-tanaka.jpg",
    email: "yuki.tanaka@fashionforge.com",
    phone: "+1 (555) 567-8901",
    linkedin: "linkedin.com/in/yukitanaka",
    expertise: [
      "Streetwear Design",
      "Digital Illustration",
      "Trend Forecasting",
    ],
    yearsOfExperience: 3,
  },
];

interface TeamMemberListProps {
  projectId: string;
}

const TeamMemberList: React.FC<TeamMemberListProps> = ({ projectId }) => {
  // In a real application, you would fetch the team members using the projectId
  // For now, we'll use the mock data

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Project Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <CardHeader className="p-4 bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16 border-2 border-white">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white opacity-80">
                      {member.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href={`https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {member.linkedin}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="w-4 h-4" />
                  <span>{member.yearsOfExperience} years of experience</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberList;
