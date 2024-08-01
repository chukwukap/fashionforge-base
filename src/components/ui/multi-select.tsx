import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (currentValue: string) => {
    const newSelected = selected.includes(currentValue)
      ? selected.filter((value) => value !== currentValue)
      : [...selected, currentValue];
    onChange(newSelected);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selected.length > 0
            ? `${selected.length} selected`
            : "Select skills..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search skills..." />
          <CommandEmpty>No skill found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem key={option} onSelect={() => handleSelect(option)}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected.includes(option) ? "opacity-100" : "opacity-0"
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
