import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const ProfessionalInfoStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Professional Information
      </h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="experience">Years of Experience</Label>
          <Select
            {...register("experience", { required: "Experience is required" })}
          >
            <option value="">Select years of experience</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </Select>
          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="specialization">Specialization</Label>
          <Input
            id="specialization"
            {...register("specialization", {
              required: "Specialization is required",
            })}
            placeholder="e.g., Digital sketching, 3D modeling"
          />
          {errors.specialization && (
            <p className="text-red-500 text-sm mt-1">
              {errors.specialization.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="bio">Brief Bio</Label>
          <Textarea
            id="bio"
            {...register("bio", { required: "Bio is required" })}
            placeholder="Tell us about yourself and your design journey"
            rows={4}
          />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bio.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfoStep;
