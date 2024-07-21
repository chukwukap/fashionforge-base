import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentStep === 0}
      >
        Previous
      </Button>
      <Button
        type="submit"
        variant="default"
        className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white"
      >
        {currentStep === totalSteps - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
};
