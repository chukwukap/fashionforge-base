import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Scissors,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Clock,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ProjectStatsProps {
  totalPieces: number;
  completedPieces: number;
  teamSize: number;
  daysLeft: number;
  totalDays: number;
  commentsCount: number;
  budget: number;
  expenses: number;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({
  totalPieces,
  completedPieces,
  teamSize,
  daysLeft,
  totalDays,
  commentsCount,
  budget,
  expenses,
}) => {
  const pieChartData = [
    { name: "Completed", value: completedPieces },
    { name: "Remaining", value: totalPieces - completedPieces },
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  const budgetUsagePercentage = (expenses / budget) * 100;
  const timeUsagePercentage = ((totalDays - daysLeft) / totalDays) * 100;

  return (
    <TooltipProvider>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-1 sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pieces Progress
            </CardTitle>
            <Scissors className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={40}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-center">
              <div className="text-2xl font-bold">
                {completedPieces} / {totalPieces}
              </div>
              <p className="text-xs text-muted-foreground">Pieces Completed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamSize}</div>
            <p className="text-xs text-muted-foreground">Team Members</p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={(teamSize / 10) * 100} className="mt-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Team utilization: {teamSize}/10</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{daysLeft}</div>
            <p className="text-xs text-muted-foreground">Days Left</p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={timeUsagePercentage} className="mt-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{Math.round(timeUsagePercentage)}% of time used</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${expenses.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              of ${budget.toLocaleString()}
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={budgetUsagePercentage} className="mt-2" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{Math.round(budgetUsagePercentage)}% of budget used</p>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{commentsCount}</div>
            <p className="text-xs text-muted-foreground">Total Comments</p>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productivity</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(completedPieces / teamSize).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">
              Pieces per Team Member
            </p>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {((totalDays - daysLeft) / completedPieces).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">
              Days per Completed Piece
            </p>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default ProjectStats;
