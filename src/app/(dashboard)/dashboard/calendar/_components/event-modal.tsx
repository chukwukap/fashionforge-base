import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Event } from "@/lib/types";
import moment from "moment";
interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  onCreateOrUpdate: (event: Event) => void;
  onDelete: (eventId: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  event,
  onCreateOrUpdate,
  onDelete,
}) => {
  const [formData, setFormData] = useState<Event>({
    id: "",
    title: "",
    start: new Date(),
    end: new Date(),
    description: "",
    type: "default",
  });

  useEffect(() => {
    if (event) {
      setFormData(event);
    } else {
      setFormData({
        id: "",
        title: "",
        start: new Date(),
        end: new Date(),
        description: "",
        type: "default",
      });
    }
  }, [event]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateOrUpdate(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event ? "Edit Event" : "Create Event"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Event Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <div className="flex space-x-4">
            <Input
              type="datetime-local"
              value={moment(formData.start).format("YYYY-MM-DDTHH:mm")}
              onChange={(e) =>
                setFormData({ ...formData, start: new Date(e.target.value) })
              }
            />
            <Input
              type="datetime-local"
              value={moment(formData.end).format("YYYY-MM-DDTHH:mm")}
              onChange={(e) =>
                setFormData({ ...formData, end: new Date(e.target.value) })
              }
            />
          </div>
          <Textarea
            placeholder="Event Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <div className="flex justify-between">
            <Button type="submit">{event ? "Update" : "Create"}</Button>
            {event && (
              <Button variant="destructive" onClick={() => onDelete(event.id)}>
                Delete
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
