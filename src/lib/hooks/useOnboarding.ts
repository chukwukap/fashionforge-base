// src/hooks/useOnboarding.ts

import { useState } from "react";
import { UserData } from "../types/onboarding";
// import { saveUserData, completeOnboarding } from "../services/api";

export const useOnboarding = () => {
  const [userData, setUserData] = useState<UserData>({
    availability: [],
    minimumProjectSize: 0,
    kycDocumentNumber: "",
    kycDocumentType: "",
    kycDocumentUploaded: false,
    bio: "",
    cryptoCurrency: "ETH",
    experience: 0,
    hourlyRate: 0,
    kycVerified: false,
    name: "",
    portfolioItems: [],
    profilePicture: undefined,
    email: "",
    walletAddress: "",
    skills: [],
    specializations: [],
  });
  const [currentStep, setCurrentStep] = useState(0);

  const updateUserData = async (data: Partial<UserData>) => {
    const updatedData = { ...userData, ...data };
    setUserData(updatedData);
    try {
      //   await saveUserData(data);
    } catch (error) {
      throw new Error("Failed to save user data");
    }
  };

  const nextStep = async () => {
    try {
      //   await saveUserData(userData);
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      throw new Error("Failed to proceed to next step");
    }
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const finalizeOnboarding = async () => {
    try {
      //   await completeOnboarding(userData);
      // Handle successful onboarding completion (e.g., redirect to dashboard)
    } catch (error) {
      throw new Error("Failed to complete onboarding");
    }
  };

  return {
    userData,
    updateUserData,
    currentStep,
    nextStep,
    previousStep,
    finalizeOnboarding,
  };
};
