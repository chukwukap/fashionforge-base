"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import {
  Scissors,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import ClientProjects from "./_components/client-projects";
import DesignerCollaboration from "./_components/designer-collaboration";

const areaChartData = [
  { name: "Jan", revenue: 4000, expenses: 3000 },
  { name: "Feb", revenue: 3000, expenses: 2800 },
  { name: "Mar", revenue: 5000, expenses: 4200 },
  { name: "Apr", revenue: 2780, expenses: 2400 },
  { name: "May", revenue: 1890, expenses: 1700 },
  { name: "Jun", revenue: 2390, expenses: 2100 },
];

const projectStatusData = [
  { name: "In Progress", value: 3 },
  { name: "Completed", value: 12 },
  { name: "Pending", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DashboardOverview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">Overview</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          New Project Request
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Active Projects",
            value: "3",
            change: "+2",
            icon: Scissors,
          },
          { title: "Total Clients", value: "28", change: "+4", icon: Users },
          {
            title: "Upcoming Deadlines",
            value: "7",
            change: "-1",
            icon: Calendar,
          },
          {
            title: "Unread Messages",
            value: "13",
            change: "+5",
            icon: MessageSquare,
          },
        ].map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <span
                  className={`inline-flex items-center ${
                    item.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {item.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Financial Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sixMonths" className="space-y-4">
              <TabsList>
                <TabsTrigger value="sixMonths">6 Months</TabsTrigger>
                <TabsTrigger value="year">1 Year</TabsTrigger>
              </TabsList>
              <TabsContent value="sixMonths" className="space-y-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaChartData}>
                      <defs>
                        <linearGradient
                          id="colorRevenue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#0088FE"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#0088FE"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorExpenses"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#00C49F"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#00C49F"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#0088FE"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                      <Area
                        type="monotone"
                        dataKey="expenses"
                        stroke="#00C49F"
                        fillOpacity={1}
                        fill="url(#colorExpenses)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <Scissors className="h-5 w-5 mr-2" />
              Project Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectStatusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value">
                    {projectStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ClientProjects />
        <DesignerCollaboration />
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
