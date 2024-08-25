import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRootStore } from "@/stores/useRootStore";

const OnboardingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ui } = useRootStore();

  if (!ui.onboarding.isActive) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-indigo-900 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={ui.onboarding.currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnboardingLayout;
