import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Calendar,
  FileText,
  Video,
  GitBranch,
} from "lucide-react";

export function CollaborationTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Collaboration Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full flex items-center justify-start space-x-2 bg-blue-600 hover:bg-blue-700">
            <MessageSquare className="h-4 w-4" />
            <span>Team Chat</span>
          </Button>
          <Button className="w-full flex items-center justify-start space-x-2 bg-green-600 hover:bg-green-700">
            <Calendar className="h-4 w-4" />
            <span>Schedule Meeting</span>
          </Button>
          <Button className="w-full flex items-center justify-start space-x-2 bg-yellow-600 hover:bg-yellow-700">
            <FileText className="h-4 w-4" />
            <span>Shared Documents</span>
          </Button>
          <Button className="w-full flex items-center justify-start space-x-2 bg-purple-600 hover:bg-purple-700">
            <Video className="h-4 w-4" />
            <span>Video Conference</span>
          </Button>
          <Button className="w-full flex items-center justify-start space-x-2 bg-indigo-600 hover:bg-indigo-700">
            <GitBranch className="h-4 w-4" />
            <span>Version Control</span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
