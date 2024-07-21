import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
  view: "month" | "week" | "day";
  onViewChange: (view: "month" | "week" | "day") => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  view,
  onViewChange,
}) => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Designer Calendar</h1>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewChange("month")}
        >
          Month
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewChange("week")}
        >
          Week
        </Button>
        <Button variant="outline" size="sm" onClick={() => onViewChange("day")}>
          Day
        </Button>
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
