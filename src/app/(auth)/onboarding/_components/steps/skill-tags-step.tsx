import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const predefinedSkills = [
  "Pattern Making",
  "Sewing",
  "Sketching",
  "CAD",
  "Textile Design",
  "3D Modeling",
  "Fashion Illustration",
  "Draping",
  "Trend Forecasting",
  "Sustainable Design",
  "Costume Design",
  "Knitwear Design",
];

const SkillTagsStep: React.FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const [customSkill, setCustomSkill] = useState("");
  const selectedSkills = watch("skills") || [];

  const addCustomSkill = () => {
    if (customSkill && !selectedSkills.includes(customSkill)) {
      setValue("skills", [...selectedSkills, customSkill]);
      setCustomSkill("");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Skills</h2>
      <p className="text-center text-gray-600">
        Select your skills or add custom ones.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {predefinedSkills.map((skill) => (
          <div key={skill} className="flex items-center space-x-2">
            <Checkbox id={skill} {...register("skills")} value={skill} />
            <Label htmlFor={skill}>{skill}</Label>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <Input
          value={customSkill}
          onChange={(e) => setCustomSkill(e.target.value)}
          placeholder="Add a custom skill"
        />
        <Button type="button" onClick={addCustomSkill}>
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>
      {errors.skills && (
        <p className="text-red-500 text-sm mt-1">
          {errors.skills.message as string}
        </p>
      )}
    </div>
  );
};

export default SkillTagsStep;
