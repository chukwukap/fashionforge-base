"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreatePaletteModal } from "./_components/create-palette-modal";
import { EditPaletteModal } from "./_components/edit-palette-modal";
import { PaletteGrid, PaletteGridProps } from "./_components/palette-grid";
import { ColorInspirationSection } from "./_components/color-inspiration";
import { TrendingColorsSection } from "./_components/trending-colors";
import { ColorTheoryTips } from "./_components/color-theory-tips";
import { ColorPalette } from "@/lib/types";
import { samplePalettes } from "@/lib/mocks";

const ColorPalettesPage: React.FC = () => {
  const [palettes, setPalettes] = useState<ColorPalette[]>(samplePalettes);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPalette, setEditingPalette] = useState<ColorPalette | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreatePalette = (palette: ColorPalette) => {
    const newPalette: ColorPalette = {
      id: Date.now().toString(),
      name: palette.name,
      colors: palette.colors,
      tags: palette.tags,
    };
    setPalettes([...palettes, newPalette]);
  };

  const handleDeletePalette = (id: string) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };

  const handleEditPalette = (palette: ColorPalette) => {
    setEditingPalette(palette);
    setIsEditModalOpen(true);
  };

  const handleUpdatePalette = (updatedPalette: ColorPalette) => {
    setPalettes(
      palettes.map((p) => (p.id === updatedPalette.id ? updatedPalette : p))
    );
    setIsEditModalOpen(false);
    setEditingPalette(null);
  };

  const filteredPalettes = palettes.filter((palette) =>
    palette.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paletteGridProps: PaletteGridProps = {
    palettes: filteredPalettes,
    onEdit: handleEditPalette,
    onDelete: handleDeletePalette,
    onLike: () => {},
    onShare: () => {},
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Color Palettes</h1>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        >
          <Plus className="mr-2 h-4 w-4" /> Create Palette
        </Button>
      </div>

      <Input
        type="text"
        placeholder="Search palettes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />

      <PaletteGrid {...paletteGridProps} />

      <ColorInspirationSection />
      <TrendingColorsSection />
      <ColorTheoryTips />

      <CreatePaletteModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreatePalette={handleCreatePalette}
      />

      {editingPalette && (
        <EditPaletteModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          palette={editingPalette}
          onUpdatePalette={handleUpdatePalette}
        />
      )}
    </div>
  );
};

export default ColorPalettesPage;
