import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { X, Plus } from "lucide-react";
import { ColorPalette } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EditPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: ColorPalette;
  onUpdatePalette: (palette: ColorPalette) => void;
}

export const EditPaletteModal: React.FC<EditPaletteModalProps> = ({
  isOpen,
  onClose,
  palette,
  onUpdatePalette,
}) => {
  const [name, setName] = useState(palette.name);
  const [colors, setColors] = useState<string[]>(palette.colors);
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const handleAddColor = () => {
    if (colors.length < 10) {
      setColors([...colors, currentColor]);
    }
  };

  const handleRemoveColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleUpdatePalette = () => {
    if (name && colors.length > 0) {
      const updatedPalette: ColorPalette = {
        ...palette,
        name,
        colors,
      };
      onUpdatePalette(updatedPalette);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Palette</DialogTitle>
        </DialogHeader>
        <Input
          type="text"
          placeholder="Palette Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <div className="mb-4">
          <HexColorPicker color={currentColor} onChange={setCurrentColor} />
        </div>
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
        <div className="flex justify-end">
          <Button onClick={handleUpdatePalette}>Update Palette</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
