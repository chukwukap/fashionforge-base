import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, TrendingUp, Users, Calendar } from "lucide-react";

interface ProjectStatsProps {
  totalProjects: number;
  inProgressProjects: number;
  completedProjects: number;
  upcomingDeadlines: number;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({
  totalProjects,
  inProgressProjects,
  completedProjects,
  upcomingDeadlines,
}) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
        <Scissors className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalProjects}</div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">In Progress</CardTitle>
        <TrendingUp className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{inProgressProjects}</div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Completed</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{completedProjects}</div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Upcoming Deadlines
        </CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{upcomingDeadlines}</div>
      </CardContent>
    </Card>
  </div>
);

export default ProjectStats;
