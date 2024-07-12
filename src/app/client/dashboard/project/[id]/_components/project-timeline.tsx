import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  FileText,
  Users,
} from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "meeting" | "milestone" | "update" | "approval";
  participants?: string[];
  documents?: string[];
}

const mockTimelineEvents: TimelineEvent[] = [
  {
    date: "2024-09-01",
    title: "Project Kickoff",
    description:
      "Initial meeting with the design team to discuss project goals and timeline.",
    type: "meeting",
    participants: ["Aria Zhang", "Leo Chen", "Sofia Rossi"],
  },
  {
    date: "2024-10-15",
    title: "Concept Approval",
    description:
      "Client approved initial concept sketches for the Summer Breeze collection.",
    type: "approval",
    documents: ["concept_sketches_v1.pdf", "client_feedback.doc"],
  },
  {
    date: "2024-11-30",
    title: "Fabric Selection",
    description:
      "Finalized fabric choices for the collection, focusing on sustainable materials.",
    type: "milestone",
    documents: ["fabric_swatches.pdf", "sustainability_report.pdf"],
  },
  {
    date: "2024-01-10",
    title: "First Prototype Review",
    description:
      "Reviewed first set of prototypes with the design team and made necessary adjustments.",
    type: "update",
    participants: ["Aria Zhang", "Marcus Johnson", "Yuki Tanaka"],
  },
  {
    date: "2024-02-20",
    title: "Photo Shoot Preparation",
    description:
      "Started preparations for the collection photo shoot, including model casting and location scouting.",
    type: "update",
    documents: ["photo_shoot_plan.pdf", "model_portfolio.zip"],
  },
];

const getEventIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "meeting":
      return <Users className="w-6 h-6 text-blue-500" />;
    case "milestone":
      return <CheckCircle2 className="w-6 h-6 text-green-500" />;
    case "update":
      return <Clock className="w-6 h-6 text-yellow-500" />;
    case "approval":
      return <FileText className="w-6 h-6 text-purple-500" />;
  }
};

const getEventColor = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "meeting":
      return "bg-blue-100 border-blue-500 text-blue-800";
    case "milestone":
      return "bg-green-100 border-green-500 text-green-800";
    case "update":
      return "bg-yellow-100 border-yellow-500 text-yellow-800";
    case "approval":
      return "bg-purple-100 border-purple-500 text-purple-800";
  }
};

interface ProjectTimelineProps {
  projectId: string;
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projectId }) => {
  // In a real application, you would fetch the timeline events using the projectId
  // For now, we'll use the mock data

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {mockTimelineEvents.map((event, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 bg-white">
                {getEventIcon(event.type)}
              </span>
              <div
                className={`p-4 rounded-lg border ${getEventColor(event.type)}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="outline" className="text-sm font-normal">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {event.date}
                  </Badge>
                  <Badge>{event.type}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {event.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.description}
                </p>
                {event.participants && (
                  <div className="flex items-center mb-2">
                    <Users className="mr-2 h-4 w-4" />
                    <span className="text-sm text-gray-600">
                      {event.participants.join(", ")}
                    </span>
                  </div>
                )}
                {event.documents && (
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    <span className="text-sm text-gray-600">
                      {event.documents.join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default ProjectTimeline;
