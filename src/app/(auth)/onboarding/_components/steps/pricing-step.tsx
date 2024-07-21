import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const PricingStep: React.FC = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const pricingModel = watch("pricingModel");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Pricing</h2>
      <p className="text-center text-gray-600">
        Set your rates and availability.
      </p>
      <div className="space-y-4">
        <div>
          <Label htmlFor="pricingModel">Pricing Model</Label>
          <Select
            {...register("pricingModel", {
              required: "Pricing model is required",
            })}
          >
            <option value="">Select pricing model</option>
            <option value="hourly">Hourly Rate</option>
            <option value="project">Project-based</option>
            <option value="both">Both</option>
          </Select>
          {errors.pricingModel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pricingModel.message as string}
            </p>
          )}
        </div>
        {(pricingModel === "hourly" || pricingModel === "both") && (
          <div>
            <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
            <Input
              id="hourlyRate"
              type="number"
              {...register("hourlyRate", {
                required: "Hourly rate is required",
                min: 0,
              })}
              placeholder="Enter your hourly rate"
            />
            {errors.hourlyRate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.hourlyRate.message as string}
              </p>
            )}
          </div>
        )}
        {(pricingModel === "project" || pricingModel === "both") && (
          <div>
            <Label htmlFor="minimumProjectRate">Minimum Project Rate ($)</Label>
            <Input
              id="minimumProjectRate"
              type="number"
              {...register("minimumProjectRate", {
                required: "Minimum project rate is required",
                min: 0,
              })}
              placeholder="Enter your minimum project rate"
            />
            {errors.minimumProjectRate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.minimumProjectRate.message as string}
              </p>
            )}
          </div>
        )}
        <div>
          <Label className="mb-2 block">Availability</Label>
          <div className="space-y-2">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div key={day} className="flex items-center">
                <Checkbox
                  id={day}
                  {...register(`availability.${day.toLowerCase()}`)}
                />
                <Label htmlFor={day} className="ml-2">
                  {day}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStep;
