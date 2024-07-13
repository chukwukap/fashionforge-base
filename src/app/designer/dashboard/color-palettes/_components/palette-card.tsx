import React, { useState } from "react";
import { Edit, Trash2, Copy, Download, Heart, Share2, Eye } from "lucide-react";
import { ColorPalette } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface PaletteCardProps {
  palette: ColorPalette;
  onEdit: (palette: ColorPalette) => void;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
  onShare: (id: string) => void;
}

export const PaletteCard: React.FC<PaletteCardProps> = ({
  palette,
  onEdit,
  onDelete,
  onLike,
  onShare,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  const handleCopyPalette = (colors: string[]) => {
    navigator.clipboard.writeText(colors.join(", "));
  };

  const handleDownloadPalette = (name: string, colors: string[]) => {
    const content = colors.join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name.toLowerCase().replace(/\s+/g, "-")}-palette.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(palette.id);
  };

  const handleShare = () => {
    onShare(palette.id);
  };

  const incrementViewCount = () => {
    setViewCount((prevCount) => prevCount + 1);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 flex">
          {palette.colors.map((color, index) => (
            <div
              key={index}
              className="flex-1 transition-all duration-300 group-hover:flex-grow-[1.5]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {palette.name}
        </h3>
        <div className="absolute top-2 right-2 flex space-x-2">
          <Badge variant="secondary" className="bg-white/80 text-gray-800">
            <Eye className="w-3 h-3 mr-1" /> {viewCount}
          </Badge>
          <Badge variant="secondary" className="bg-white/80 text-gray-800">
            {palette.tags[0]}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          {palette.colors.map((color, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: color }}
                    />
                    <span className="mt-1 text-xs font-mono">{color}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Copy: {color}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(color)}
                    className="ml-2"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLike}
              className={`transition-all duration-300 ${
                isLiked ? "bg-red-100 text-red-600" : "hover:bg-gray-100"
              }`}
            >
              <Heart
                className={`mr-2 h-4 w-4 ${isLiked ? "fill-current" : ""}`}
              />
              {isLiked ? "Liked" : "Like"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="transition-all duration-300 hover:bg-gray-100"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="transition-all duration-300 hover:bg-gray-100"
              >
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onEdit(palette)}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleCopyPalette(palette.colors)}
              >
                <Copy className="mr-2 h-4 w-4" /> Copy Colors
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleDownloadPalette(palette.name, palette.colors)
                }
              >
                <Download className="mr-2 h-4 w-4" /> Download
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(palette.id)}
                className="text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};
