import { z } from "zod";
import { onboardingSchema } from "../schemas/onboarding";

export type UserData = z.infer<typeof onboardingSchema>;

export interface OnboardingStep {
  required: boolean;
  id: string;
  label: string;
  component: React.ComponentType<StepProps>;
}

export interface StepProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isLoading: boolean;
  error: string | null;
}
