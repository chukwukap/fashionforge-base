"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { ProgressBar } from "./_components/progress-bar";
import { StepNavigation } from "./_components/steps/step-navigation";
import { Spinner } from "@/components/ui/spinner";
import { Card } from "@/components/ui/card";

const WelcomeStep = dynamic(() => import("./_components/steps/welcome-step"), {
  ssr: false,
  loading: () => <Spinner />,
});

const RoleSelectionStep = dynamic(
  () => import("./_components/steps/role-selection-step"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

const BasicProfileStep = dynamic(
  () => import("./_components/steps/basic-profile-step"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

const designerSteps = [
  {
    id: "professional-info",
    component: dynamic(
      () => import("./_components/steps/professional-info-step"),
      { ssr: false, loading: () => <Spinner /> }
    ),
  },
  {
    id: "portfolio",
    component: dynamic(() => import("./_components/steps/portfolio-step"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  },
  {
    id: "pricing",
    component: dynamic(() => import("./_components/steps/pricing-step"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  },
  {
    id: "skill-tags",
    component: dynamic(() => import("./_components/steps/skill-tags-step"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  },
  {
    id: "kyc",
    component: dynamic(() => import("./_components/steps/kyc-step"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  },
];

const clientSteps = [
  {
    id: "project-interests",
    component: dynamic(
      () => import("./_components/steps/professional-interest-step"),
      { ssr: false, loading: () => <Spinner /> }
    ),
  },
  {
    id: "budget-range",
    component: dynamic(() => import("./_components/steps/budget-range-step"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  },
  {
    id: "kyc",
    component: dynamic(() => import("./_components/steps/kyc-step"), {
      ssr: false,
      loading: () => <Spinner />,
    }),
  },
];

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userRole, setUserRole] = useState<"designer" | "client" | null>(null);
  const methods = useForm();

  const commonSteps = [
    { id: "welcome", component: WelcomeStep },
    { id: "role-selection", component: RoleSelectionStep },
    { id: "basic-profile", component: BasicProfileStep },
  ];

  const steps =
    userRole === "designer"
      ? [...commonSteps, ...designerSteps]
      : userRole === "client"
      ? [...commonSteps, ...clientSteps]
      : commonSteps;

  const CurrentStep = steps[currentStep].component;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleRoleSelection = (role: "designer" | "client") => {
    setUserRole(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            <div className="p-8">
              <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
                Welcome to FashionForge
              </h1>
              <ProgressBar
                currentStep={currentStep}
                totalSteps={steps.length}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={steps[currentStep].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <CurrentStep onRoleSelect={handleRoleSelection} />
                </motion.div>
              </AnimatePresence>
              <StepNavigation
                currentStep={currentStep}
                totalSteps={steps.length}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default OnboardingPage;
