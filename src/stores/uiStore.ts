// stores/useUIStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  modalProps: Record<string, any>;
}

interface SidebarState {
  isOpen: boolean;
  activeTab: string | null;
}

interface ThemeState {
  mode: "light" | "dark";
}

interface ToastState {
  isVisible: boolean;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

interface OnboardingState {
  isActive: boolean;
  currentStep: number;
  totalSteps: number;
  userType: "designer" | "client" | null;
  completedSteps: string[];
}

interface UIState {
  modal: ModalState;
  sidebar: SidebarState;
  theme: ThemeState;
  toast: ToastState;
  onboarding: OnboardingState;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  setModal: (
    isOpen: boolean,
    modalType?: string | null,
    modalProps?: Record<string, any>
  ) => void;
  setSidebar: (isOpen: boolean, activeTab?: string | null) => void;
  setTheme: (mode: "light" | "dark") => void;
  setToast: (
    isVisible: boolean,
    message?: string,
    type?: "success" | "error" | "info" | "warning"
  ) => void;
  setMobileMenu: (isOpen: boolean) => void;
  setSearch: (isOpen: boolean) => void;
  startOnboarding: () => void;
  setOnboardingStep: (step: number) => void;
  setUserType: (type: "designer" | "client") => void;
  completeOnboardingStep: (stepId: string) => void;
  finishOnboarding: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    immer((set) => ({
      modal: {
        isOpen: false,
        modalType: null,
        modalProps: {},
      },
      sidebar: {
        isOpen: false,
        activeTab: null,
      },
      theme: {
        mode: "light",
      },
      toast: {
        isVisible: false,
        message: "",
        type: "info",
      },
      onboarding: {
        isActive: false,
        currentStep: 0,
        totalSteps: 5,
        userType: null,
        completedSteps: [],
      },
      isMobileMenuOpen: false,
      isSearchOpen: false,
      setModal: (isOpen, modalType = null, modalProps = {}) =>
        set((state) => {
          state.modal.isOpen = isOpen;
          state.modal.modalType = modalType;
          state.modal.modalProps = modalProps;
        }),
      setSidebar: (isOpen, activeTab = null) =>
        set((state) => {
          state.sidebar.isOpen = isOpen;
          state.sidebar.activeTab = activeTab;
        }),
      setTheme: (mode) =>
        set((state) => {
          state.theme.mode = mode;
        }),
      setToast: (isVisible, message = "", type = "info") =>
        set((state) => {
          state.toast.isVisible = isVisible;
          state.toast.message = message;
          state.toast.type = type;
        }),
      setMobileMenu: (isOpen) =>
        set((state) => {
          state.isMobileMenuOpen = isOpen;
        }),
      setSearch: (isOpen) =>
        set((state) => {
          state.isSearchOpen = isOpen;
        }),
      startOnboarding: () =>
        set((state) => {
          state.onboarding.isActive = true;
          state.onboarding.currentStep = 0;
        }),
      setOnboardingStep: (step) =>
        set((state) => {
          state.onboarding.currentStep = step;
        }),
      setUserType: (type) =>
        set((state) => {
          state.onboarding.userType = type;
        }),
      completeOnboardingStep: (stepId) =>
        set((state) => {
          if (!state.onboarding.completedSteps.includes(stepId)) {
            state.onboarding.completedSteps.push(stepId);
          }
        }),
      finishOnboarding: () =>
        set((state) => {
          state.onboarding.isActive = false;
          state.onboarding.currentStep = 0;
          state.onboarding.userType = null;
        }),
    })),
    {
      name: "fashion-forge-ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        sidebar: { activeTab: state.sidebar.activeTab },
        onboarding: {
          completedSteps: state.onboarding.completedSteps,
          userType: state.onboarding.userType,
        },
      }),
    }
  )
);
