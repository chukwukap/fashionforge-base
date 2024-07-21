import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { name: "Week 1", designs: 12, revisions: 5, approvals: 8 },
  { name: "Week 2", designs: 19, revisions: 7, approvals: 15 },
  { name: "Week 3", designs: 15, revisions: 4, approvals: 12 },
  { name: "Week 4", designs: 22, revisions: 8, approvals: 18 },
];

export function TeamPerformance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Monthly Team Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="designs" fill="#8884d8" name="Designs Created" />
              <Bar dataKey="revisions" fill="#82ca9d" name="Revisions Made" />
              <Bar dataKey="approvals" fill="#ffc658" name="Designs Approved" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
