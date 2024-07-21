import React from "react";
import { ColorPalette } from "@/lib/types";
import { PaletteCard } from "./palette-card";
import { samplePalettes } from "@/lib/mocks";

export interface PaletteGridProps {
  palettes: ColorPalette[];
  onEdit: (palette: ColorPalette) => void;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onShare: (id: string) => void;
}

export const PaletteGrid: React.FC<PaletteGridProps> = ({
  palettes,
  onEdit,
  onDelete,
  onLike,
  onShare,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {samplePalettes.map((palette) => (
        <PaletteCard
          key={palette.id}
          palette={palette}
          onEdit={onEdit}
          onDelete={onDelete}
          onLike={onLike}
          onShare={onShare}
        />
      ))}
    </div>
  );
};
