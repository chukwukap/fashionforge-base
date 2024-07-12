import React from "react";
import { Calendar } from "lucide-react";

const events = [
  { date: "2023-09-15", name: "New York Fashion Week" },
  { date: "2023-10-01", name: "Paris Fashion Week" },
  { date: "2023-11-10", name: "Milan Fashion Week" },
  { date: "2023-12-05", name: "Art Basel Miami" },
];

export function FashionTimeline() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Upcoming Events
      </h3>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex items-center">
            <Calendar className="h-5 w-5 text-rose-500 mr-2" />
            <div>
              <p className="text-sm font-medium text-gray-800">{event.name}</p>
              <p className="text-xs text-gray-500">{event.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
