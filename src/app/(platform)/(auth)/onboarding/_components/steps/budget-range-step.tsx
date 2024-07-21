import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const BudgetRangeStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Budget Range
      </h2>
      <p className="text-center text-gray-600">
        Let us know your typical budget for fashion design projects.
      </p>
      <div className="space-y-4">
        <div>
          <Label htmlFor="budgetRange">Typical Budget Range</Label>
          <Select
            {...register("budgetRange", {
              required: "Budget range is required",
            })}
          >
            <option value="">Select budget range</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-50000">$10,000 - $50,000</option>
            <option value="50000+">$50,000+</option>
          </Select>
          {errors.budgetRange && (
            <p className="text-red-500 text-sm mt-1">
              {errors.budgetRange.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="maxBudget">Maximum Budget ($)</Label>
          <Input
            id="maxBudget"
            type="number"
            {...register("maxBudget", {
              required: "Maximum budget is required",
              min: 0,
            })}
            placeholder="Enter your maximum budget"
          />
          {errors.maxBudget && (
            <p className="text-red-500 text-sm mt-1">
              {errors.maxBudget.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="preferredPricingModel">Preferred Pricing Model</Label>
          <Select
            {...register("preferredPricingModel", {
              required: "Preferred pricing model is required",
            })}
          >
            <option value="">Select preferred pricing model</option>
            <option value="hourly">Hourly Rate</option>
            <option value="project">Project-based</option>
            <option value="both">No Preference</option>
          </Select>
          {errors.preferredPricingModel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.preferredPricingModel.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetRangeStep;
