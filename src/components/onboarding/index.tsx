// components/onboarding/Onboarding.tsx
import React from "react";
import { useRootStore } from "@/stores/useRootStore";
import OnboardingLayout from "./layout";
import { WelcomeStep, UserTypeStep } from "./steps";
import { FormProvider } from "react-hook-form";

const Onboarding: React.FC = () => {
  const { ui } = useRootStore();

  const steps = [WelcomeStep, UserTypeStep];

  const CurrentStep = steps[ui.onboarding.currentStep];

  return (
    // <FormProvider>
    <OnboardingLayout>
      <CurrentStep />
    </OnboardingLayout>
    // </FormProvider>
  );
};

export default Onboarding;
