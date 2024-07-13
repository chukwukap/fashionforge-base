import chroma from "chroma-js";
import { ColorPalette } from "@/lib/types";

export function generateComplementaryColors(baseColor: string): string[] {
  const base = chroma(baseColor);
  return [base.hex(), base.set("hsl.h", "+180").hex()];
}

export function generateAnalogousColors(baseColor: string): string[] {
  const base = chroma(baseColor);
  return [
    base.set("hsl.h", "-30").hex(),
    base.hex(),
    base.set("hsl.h", "+30").hex(),
  ];
}

export function generateTriadicColors(baseColor: string): string[] {
  const base = chroma(baseColor);
  return [
    base.set("hsl.h", "-120").hex(),
    base.hex(),
    base.set("hsl.h", "+120").hex(),
  ];
}

export function generateShades(baseColor: string, count: number = 5): string[] {
  return chroma.scale([baseColor, "black"]).mode("lab").colors(count);
}

export function generateTints(baseColor: string, count: number = 5): string[] {
  return chroma.scale([baseColor, "white"]).mode("lab").colors(count);
}

export function exportPalette(palette: ColorPalette): void {
  const cssVariables = palette.colors
    .map((color, index) => `  --color-${index + 1}: ${color};`)
    .join("\n");
  const cssContent = `:root {\n${cssVariables}\n}`;

  const blob = new Blob([cssContent], { type: "text/css" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${palette.name
    .toLowerCase()
    .replace(/\s+/g, "-")}-palette.css`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
