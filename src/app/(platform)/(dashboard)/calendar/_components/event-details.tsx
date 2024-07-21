import React from "react";
import { Event } from "@/lib/types";

export const EventDetails: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="p-2 bg-indigo-100 rounded-md">
      <h3 className="font-semibold text-indigo-800">{event.title}</h3>
      <p className="text-xs text-indigo-600">{event.description}</p>
    </div>
  );
};
