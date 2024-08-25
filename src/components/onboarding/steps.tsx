import React from "react";
import { motion } from "framer-motion";
import OnboardingStep from "./step";
import { useRootStore } from "@/stores/useRootStore";

export const WelcomeStep: React.FC = () => {
  const { ui } = useRootStore();

  const handleNext = () => {
    // ui.onboarding.completeOnboardingStep("welcome");
    ui.setOnboardingStep(1);
  };

  return (
    <OnboardingStep title="Welcome to FashionForge" onNext={handleNext}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg text-gray-700 mb-4">
          Embark on a journey where fashion meets innovation. FashionForge is
          your gateway to revolutionizing the fashion industry.
        </p>
        <p className="text-lg text-gray-700">
          Let&apos;s get you set up and ready to create, collaborate, and
          conquer the world of fashion!
        </p>
      </motion.div>
    </OnboardingStep>
  );
};

export const UserTypeStep: React.FC = () => {
  const { ui } = useRootStore();

  const handleSelectType = (type: "designer" | "client") => {
    ui.setUserType(type);
    ui.completeOnboardingStep("userType");
    ui.setOnboardingStep(2);
  };

  return (
    <OnboardingStep
      title="Choose Your Path"
      onNext={() => {}}
      onPrevious={() => ui.setOnboardingStep(0)}
    >
      <p className="text-lg text-gray-700 mb-6">
        Are you here to showcase your designs or find the perfect designer for
        your project?
      </p>
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelectType("designer")}
          className="p-4 bg-purple-100 rounded-lg text-purple-700 font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        >
          Designer
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelectType("client")}
          className="p-4 bg-indigo-100 rounded-lg text-indigo-700 font-medium hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Client
        </motion.button>
      </div>
    </OnboardingStep>
  );
};
