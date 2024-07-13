import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Edit2,
  Trash2,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  FileDown,
  Printer,
  Plus,
} from "lucide-react";
import { ClientMeasurement } from "@/lib/types";
import { EditClientModal } from "./edit-client-modal";
import { AddClientModal } from "./add-client-modal";
import { motion, AnimatePresence } from "framer-motion";

type MockClient = { [key: string]: { name: string; email: string } };

// Mock client data
const mockClients: MockClient = {
  "1": { name: "John Doe", email: "john@example.com" },
  "2": { name: "Jane Smith", email: "jane@example.com" },
  // Add more mock clients as needed
};

interface MeasurementsTableProps {
  clientMeasurements: ClientMeasurement[];
  onAddClient: (clientMeasurement: Omit<ClientMeasurement, "id">) => void;
  onUpdateClient: (id: string, data: Partial<ClientMeasurement>) => void;
  onDeleteClient: (id: string) => void;
  onSelectClient: (clientMeasurement: ClientMeasurement) => void;
}

export const MeasurementsTable: React.FC<MeasurementsTableProps> = ({
  clientMeasurements,
  onAddClient,
  onUpdateClient,
  onDeleteClient,
  onSelectClient,
}) => {
  const [editingClient, setEditingClient] = useState<ClientMeasurement | null>(
    null
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sortColumn, setSortColumn] = useState<"name" | "email">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const itemsPerPage = 10;

  const filteredAndSortedClients = useMemo(() => {
    return [...clientMeasurements]
      .filter((measurement) => {
        const client = mockClients[measurement.clientId];
        return (
          client &&
          (client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      })
      .sort((a, b) => {
        const aClient = mockClients[a.clientId];
        const bClient = mockClients[b.clientId];
        const aValue = aClient[sortColumn];
        const bValue = bClient[sortColumn];
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });
  }, [clientMeasurements, searchTerm, sortColumn, sortDirection]);

  const paginatedClients = filteredAndSortedClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAndSortedClients.length / itemsPerPage);

  const handleSort = (column: "name" | "email") => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ column }: { column: "name" | "email" }) => {
    if (column !== sortColumn) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="ml-2 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-2 h-4 w-4" />
    );
  };

  const getSizeCategory = (bust: number, waist: number, hips: number) => {
    const average = (bust + waist + hips) / 3;
    if (average < 80) return "XS";
    if (average < 90) return "S";
    if (average < 100) return "M";
    if (average < 110) return "L";
    return "XL";
  };

  const getBadgeColor = (size: string) => {
    switch (size) {
      case "XS":
        return "bg-pink-500";
      case "S":
        return "bg-blue-500";
      case "M":
        return "bg-green-500";
      case "L":
        return "bg-yellow-500";
      case "XL":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedClients(
        paginatedClients.map((clientMeasurement) => clientMeasurement.id)
      );
    } else {
      setSelectedClients([]);
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById("printable-table");
    const winPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );

    winPrint?.document.write(`
      <html>
        <head>
          <title>Client Measurements</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          ${printContent?.outerHTML}
        </body>
      </html>
    `);

    winPrint?.document.close();
    winPrint?.focus();
    winPrint?.print();
    winPrint?.close();
  };

  const handleExport = () => {
    const headers = ["Name", "Email", "Bust", "Waist", "Hips", "Size"];
    const csvContent = [
      headers.join(","),
      ...filteredAndSortedClients.map((clientMeasurement) => {
        const client = mockClients[clientMeasurement.clientId];
        return [
          client.name,
          client.email,
          clientMeasurement.measurements.bust,
          clientMeasurement.measurements.waist,
          clientMeasurement.measurements.hips,
          getSizeCategory(
            clientMeasurement.measurements.bust,
            clientMeasurement.measurements.waist,
            clientMeasurement.measurements.hips
          ),
        ].join(",");
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "client_measurements.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleBulkDelete = () => {
    selectedClients.forEach((id) => onDeleteClient(id));
    setSelectedClients([]);
  };

  const handleBulkExport = () => {
    const selectedClientData = filteredAndSortedClients.filter(
      (clientMeasurement) => selectedClients.includes(clientMeasurement.id)
    );

    const headers = ["Name", "Email", "Bust", "Waist", "Hips", "Size"];

    const csvContent = [
      headers.join(","),
      ...selectedClientData.map((clientMeasurement) => {
        const client = mockClients[clientMeasurement.clientId];
        return [
          client.name,
          client.email,
          clientMeasurement.measurements.bust,
          // ... rest of the code ...
        ].join(",");
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "selected_client_measurements.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Client
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="select-all"
          checked={selectedClients.length === paginatedClients.length}
          onCheckedChange={handleSelectAll}
        />
        <label htmlFor="select-all">Select All</label>
        <Button
          variant="outline"
          size="sm"
          onClick={handleBulkDelete}
          disabled={selectedClients.length === 0}
        >
          Delete Selected
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleBulkExport}
          disabled={selectedClients.length === 0}
        >
          Export Selected
        </Button>
      </div>

      <div className="rounded-md border shadow-sm overflow-hidden">
        <Table id="printable-table">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedClients.length === paginatedClients.length}
                  onCheckedChange={(checked) =>
                    checked
                      ? setSelectedClients(paginatedClients.map((c) => c.id))
                      : setSelectedClients([])
                  }
                />
              </TableHead>
              <TableHead
                className="w-[200px] cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name <SortIcon column="name" />
              </TableHead>
              <TableHead
                className="w-[200px] cursor-pointer"
                onClick={() => handleSort("email")}
              >
                Email <SortIcon column="email" />
              </TableHead>
              <TableHead className="text-right">Bust</TableHead>
              <TableHead className="text-right">Waist</TableHead>
              <TableHead className="text-right">Hips</TableHead>
              <TableHead className="text-center">Size</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence>
              {paginatedClients.map((measurement) => {
                const client = mockClients[measurement.clientId];
                return (
                  <motion.tr
                    key={measurement.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedClients.includes(measurement.id)}
                        onCheckedChange={(checked) =>
                          checked
                            ? setSelectedClients([
                                ...selectedClients,
                                measurement.id,
                              ])
                            : setSelectedClients(
                                selectedClients.filter(
                                  (id) => id !== measurement.id
                                )
                              )
                        }
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {client?.name}
                    </TableCell>
                    <TableCell>{client?.email}</TableCell>
                    <TableCell className="text-right">
                      {measurement.measurements.bust} cm
                    </TableCell>
                    <TableCell className="text-right">
                      {measurement.measurements.waist} cm
                    </TableCell>
                    <TableCell className="text-right">
                      {measurement.measurements.hips} cm
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        className={`${getBadgeColor(
                          getSizeCategory(
                            measurement.measurements.bust,
                            measurement.measurements.waist,
                            measurement.measurements.hips
                          )
                        )}`}
                      >
                        {getSizeCategory(
                          measurement.measurements.bust,
                          measurement.measurements.waist,
                          measurement.measurements.hips
                        )}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={() => onSelectClient(measurement)}
                          >
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => setEditingClient(measurement)}
                          >
                            <Edit2 className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onDeleteClient(measurement.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleExport()}>
                            <FileDown className="mr-2 h-4 w-4" /> Export
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {paginatedClients.length} of {filteredAndSortedClients.length}{" "}
          measurements
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
      {editingClient && (
        <EditClientModal
          clientMeasurements={editingClient}
          isOpen={!!editingClient}
          onClose={() => setEditingClient(null)}
          onUpdateClient={(data) => {
            onUpdateClient(editingClient.id, data);
            setEditingClient(null);
          }}
        />
      )}
      <AddClientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddClient={(clientMeasurement) => {
          onAddClient(clientMeasurement);
          setIsAddModalOpen(false);
        }}
      />
    </div>
  );
};
