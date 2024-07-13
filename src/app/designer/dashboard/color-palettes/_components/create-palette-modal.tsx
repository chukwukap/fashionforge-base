import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { X, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ColorPalette } from "@/lib/types";

interface CreatePaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePalette: (palette: ColorPalette) => void;
}

export const CreatePaletteModal: React.FC<CreatePaletteModalProps> = ({
  isOpen,
  onClose,
  onCreatePalette,
}) => {
  const [name, setName] = useState("");
  const [colors, setColors] = useState<string[]>(["#ffffff"]);
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const handleAddColor = () => {
    if (colors.length < 10) {
      setColors([...colors, currentColor]);
    }
  };

  const handleRemoveColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleCreatePalette = () => {
    if (name && colors.length > 0) {
      const newPalette: ColorPalette = {
        id: Date.now().toString(),
        name,
        colors,
        tags: ["Custom"],
        // createdAt: new Date().toISOString(),
        // updatedAt: new Date().toISOString(),
      };
      onCreatePalette(newPalette);
      setName("");
      setColors(["#ffffff"]);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Palette</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Palette Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <HexColorPicker
          color={currentColor}
          onChange={setCurrentColor}
          className="mb-4"
        />
        <div className="flex flex-wrap mb-4">
          {colors.map((color, index) => (
            <div key={index} className="relative mr-2 mb-2">
              <div
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
              />
              <button
                onClick={() => handleRemoveColor(index)}
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          {colors.length < 10 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleAddColor}
              className="w-8 h-8 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button onClick={handleCreatePalette} className="w-full">
          Create Palette
        </Button>
      </DialogContent>
    </Dialog>
  );
};
