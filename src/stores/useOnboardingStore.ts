import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OnboardingFormValues } from "@/lib/schemas/onboarding";

interface OnboardingState {
  currentStep: number;
  formData: Partial<OnboardingFormValues>;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: Partial<OnboardingFormValues>) => void;
  resetOnboarding: () => void;
}

const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      currentStep: 0,
      formData: {},
      setCurrentStep: (step) => set({ currentStep: step }),
      updateFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
      resetOnboarding: () => set({ currentStep: 0, formData: {} }),
    }),
    {
      name: "onboarding-storage",
    }
  )
);

export default useOnboardingStore;
