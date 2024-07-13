import React from "react";
import {
  Palette,
  Droplet,
  Layers,
  LayoutGrid,
  Contrast,
  Sun,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ColorTheoryTips: React.FC = () => {
  const tips = [
    {
      title: "Complementary Colors",
      description:
        "Use colors opposite each other on the color wheel for high contrast and visual impact. For example, blue and orange or red and green. This scheme is ideal for creating focal points and energetic designs.",
      icon: <Contrast className="h-5 w-5 text-indigo-500" />,
      example:
        "A navy blue dress with orange accessories creates a striking look.",
    },
    {
      title: "Analogous Harmony",
      description:
        "Create a harmonious look with colors adjacent to each other on the color wheel. This scheme is soothing and pleasing to the eye. For instance, combine yellow, yellow-green, and green.",
      icon: <Droplet className="h-5 w-5 text-blue-500" />,
      example:
        "A spring outfit featuring soft yellow, light green, and pale blue creates a fresh, cohesive look.",
    },
    {
      title: "Triadic Balance",
      description:
        "Achieve balance and vibrancy with three colors equally spaced on the color wheel. This scheme offers strong visual contrast while retaining balance and color richness. For example, red, yellow, and blue.",
      icon: <Layers className="h-5 w-5 text-green-500" />,
      example:
        "A color-blocked outfit with a red top, yellow skirt, and blue accessories creates a bold, balanced ensemble.",
    },
    {
      title: "60-30-10 Rule",
      description:
        "Use 60% dominant color, 30% secondary color, and 10% accent color for balanced distribution. This rule helps create a cohesive color scheme in fashion and interior design.",
      icon: <LayoutGrid className="h-5 w-5 text-yellow-500" />,
      example:
        "In a room, use 60% neutral beige, 30% rich blue, and 10% gold accents for a balanced, sophisticated look.",
    },
    {
      title: "Monochromatic Scheme",
      description:
        "Use various shades, tints, and tones of a single color. This creates a cohesive and sophisticated look that's easy on the eyes. It's perfect for creating depth and elegance in designs.",
      icon: <Palette className="h-5 w-5 text-purple-500" />,
      example:
        "A tonal outfit in different shades of green, from sage to emerald, creates a refined, put-together appearance.",
    },
    {
      title: "Warm vs. Cool Colors",
      description:
        "Understand the emotional impact of warm (reds, oranges, yellows) and cool (blues, greens, purples) colors. Warm colors are energetic and inviting, while cool colors are calming and refreshing.",
      icon: <Sun className="h-5 w-5 text-orange-500" />,
      example:
        "Use warm colors like red and orange in active spaces like gyms, and cool colors like blue and green in relaxing areas like bedrooms.",
    },
  ];

  return (
    <Card className="mb-12 bg-gradient-to-br from-purple-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Color Theory Tips for Fashion Design
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {tips.map((tip, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  {tip.icon}
                  <span className="ml-2 text-lg font-semibold">
                    {tip.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 mb-2">{tip.description}</p>
                <p className="text-gray-700 font-medium">
                  Example: {tip.example}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};
