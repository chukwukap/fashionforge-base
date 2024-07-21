import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Clock, TrendingUp } from "lucide-react";

export function TeamStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Team Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-purple-500" />
              <span className="text-gray-600">Team Size</span>
            </div>
            <span className="font-semibold text-gray-800">5 members</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-blue-500" />
              <span className="text-gray-600">Active Projects</span>
            </div>
            <span className="font-semibold text-gray-800">3 projects</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-gray-600">Avg. Completion Time</span>
            </div>
            <span className="font-semibold text-gray-800">14 days</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-red-500" />
              <span className="text-gray-600">Productivity</span>
            </div>
            <span className="font-semibold text-green-600">
              +15% this month
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
