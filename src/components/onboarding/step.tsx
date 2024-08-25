import React from "react";
import { motion } from "framer-motion";

interface OnboardingStepProps {
  title: string;
  children: React.ReactNode;
  onNext: () => void;
  onPrevious?: () => void;
  isLastStep?: boolean;
}

const OnboardingStep: React.FC<OnboardingStepProps> = ({
  title,
  children,
  onNext,
  onPrevious,
  isLastStep = false,
}) => {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
      <div className="flex justify-between pt-4">
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          >
            Previous
          </button>
        )}
        <button
          onClick={onNext}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep;
