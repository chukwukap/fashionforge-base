import React from "react";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const interests = [
  "Apparel Design",
  "Accessory Design",
  "Textile Design",
  "Sustainable Fashion",
  "Costume Design",
  "Sportswear",
  "Haute Couture",
  "Streetwear",
];

const ProjectInterestsStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Project Interests
      </h2>
      <p className="text-center text-gray-600">
        Select the types of design services you&apos;re interested in:
      </p>
      <div className="grid grid-cols-2 gap-4">
        {interests.map((interest) => (
          <div key={interest} className="flex items-center space-x-2">
            <Checkbox
              id={interest}
              {...register("interests")}
              value={interest}
            />
            <Label htmlFor={interest}>{interest}</Label>
          </div>
        ))}
      </div>
      {errors.interests && (
        <p className="text-red-500 text-sm mt-1">
          {errors.interests.message as string}
        </p>
      )}
    </div>
  );
};

export default ProjectInterestsStep;
