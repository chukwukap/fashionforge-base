"use client";

import Onboarding from "@/components/onboarding";

export default function AppClient({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Onboarding />
    </div>
  );
}
