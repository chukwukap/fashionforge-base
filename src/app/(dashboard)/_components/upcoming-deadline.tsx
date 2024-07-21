import React from "react";
import { CalendarDays, Clock, AlertTriangle } from "lucide-react";

interface Deadline {
  id: string;
  title: string;
  date: string;
  time: string;
  progress: number;
  urgency: "low" | "medium" | "high";
}

const deadlines: Deadline[] = [
  {
    id: "1",
    title: "Spring Collection Review",
    date: "Mar 18",
    time: "2:00 PM",
    progress: 75,
    urgency: "high",
  },
  {
    id: "2",
    title: "Client Meeting: Emma S.",
    date: "Mar 20",
    time: "11:00 AM",
    progress: 50,
    urgency: "medium",
  },
  {
    id: "3",
    title: "Summer Line Presentation",
    date: "Mar 25",
    time: "3:00 PM",
    progress: 25,
    urgency: "low",
  },
  {
    id: "4",
    title: "Fabric Order Deadline",
    date: "Mar 27",
    time: "5:00 PM",
    progress: 10,
    urgency: "medium",
  },
];

const urgencyColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-amber-100 text-amber-800",
  high: "bg-red-100 text-red-800",
};

export default function UpcomingDeadlines() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="bg-gradient-to-r from-amber-100 to-amber-50 px-6 py-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-amber-800">
          <AlertTriangle className="h-5 w-5" />
          Upcoming Deadlines
        </h2>
      </div>
      <ul className="divide-y divide-amber-100">
        {deadlines.map((deadline) => (
          <li
            key={deadline.id}
            className="p-4 hover:bg-amber-50/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-1">
              <div className="flex flex-col">
                <span className="font-medium text-amber-900">
                  {deadline.title}
                </span>
                <div className="flex items-center text-sm text-amber-700 mt-1">
                  <CalendarDays className="h-4 w-4" />
                  {deadline.date}
                  <Clock className="h-4 w-4 ml-3 mr-1" />
                  {deadline.time}
                </div>
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  urgencyColors[deadline.urgency]
                }`}
              >
                {deadline.urgency}
              </span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm mb-1 text-amber-800">
                <span>Progress</span>
                <span>{deadline.progress}%</span>
              </div>
              <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${deadline.progress}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
