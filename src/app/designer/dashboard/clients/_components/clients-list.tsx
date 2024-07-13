import { ClientMeasurement } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ClientListProps {
  clients: ClientMeasurement[];
  selectedClientId: string | undefined;
  onSelectClient: (client: ClientMeasurement) => void;
}

export default function ClientList({
  clients,
  selectedClientId,
  onSelectClient,
}: ClientListProps) {
  return (
    <ScrollArea className="w-1/3 h-[calc(100vh-200px)] border rounded-lg">
      <div className="p-4 space-y-2">
        {clients.map((client) => (
          <div
            key={client.id}
            className={`p-3 rounded-md cursor-pointer transition-colors ${
              client.id === selectedClientId
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
            onClick={() => onSelectClient(client)}
          >
            <h3 className="font-medium">{client.name}</h3>
            <p className="text-sm opacity-70">{client.email}</p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
