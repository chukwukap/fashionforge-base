import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

const PortfolioStep: React.FC = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const [portfolioItems, setPortfolioItems] = useState([
    { title: "", description: "", imageUrl: "" },
  ]);

  const addPortfolioItem = () => {
    setPortfolioItems([
      ...portfolioItems,
      { title: "", description: "", imageUrl: "" },
    ]);
  };

  const removePortfolioItem = (index: number) => {
    const updatedItems = portfolioItems.filter((_, i) => i !== index);
    setPortfolioItems(updatedItems);
    setValue("portfolioItems", updatedItems);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Portfolio
      </h2>
      <p className="text-center text-gray-600">
        Showcase your best work to potential clients.
      </p>
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="space-y-4 p-4 bg-gray-50 rounded-lg relative"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => removePortfolioItem(index)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div>
            <Label htmlFor={`title-${index}`}>Project Title</Label>
            <Input
              id={`title-${index}`}
              {...register(`portfolioItems.${index}.title`, {
                required: "Title is required",
              })}
              placeholder="Enter project title"
            />
            {errors.portfolioItems?.[index as number]?.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.portfolioItems[index].title.message as string}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor={`description-${index}`}>Project Description</Label>
            <Textarea
              id={`description-${index}`}
              {...register(`portfolioItems.${index}.description`, {
                required: "Description is required",
              })}
              placeholder="Describe your project"
              rows={3}
            />
            {errors.portfolioItems?.[index]?.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.portfolioItems[index].description.message as string}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor={`imageUrl-${index}`}>Image URL</Label>
            <Input
              id={`imageUrl-${index}`}
              type="url"
              {...register(`portfolioItems.${index}.imageUrl`, {
                required: "Image URL is required",
              })}
              placeholder="Enter image URL"
            />
            {errors.portfolioItems?.[index]?.imageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.portfolioItems[index].imageUrl.message as string}
              </p>
            )}
          </div>
        </div>
      ))}
      <Button type="button" onClick={addPortfolioItem} className="w-full">
        <Plus className="mr-2 h-4 w-4" /> Add Another Project
      </Button>
    </div>
  );
};

export default PortfolioStep;
