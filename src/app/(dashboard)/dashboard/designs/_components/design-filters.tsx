import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const categories = ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"];
const statuses = ["Draft", "In Review", "Approved", "On Sale"];
const colors = [
  { name: "Red", class: "bg-red-500" },
  { name: "Blue", class: "bg-blue-500" },
  { name: "Green", class: "bg-green-500" },
  { name: "Yellow", class: "bg-yellow-500" },
  { name: "Purple", class: "bg-purple-500" },
  { name: "Pink", class: "bg-pink-500" },
  { name: "Black", class: "bg-black" },
  { name: "White", class: "bg-white border border-gray-300" },
];

export function DesignFilters() {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Refine Your Search
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox id={category} />
                  <label
                    htmlFor={category}
                    className="ml-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={10}
              className="mt-6"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">$0</span>
              <span className="text-sm text-gray-600">$1000</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="status">
          <AccordionTrigger>Status</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {statuses.map((status) => (
                <div key={status} className="flex items-center">
                  <Checkbox id={status} />
                  <label
                    htmlFor={status}
                    className="ml-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800"
                  >
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <motion.div
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.class} cursor-pointer`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
