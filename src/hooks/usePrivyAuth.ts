import { usePrivy, useLogin } from "@privy-io/react-auth";
import { useState, useCallback } from "react";

export const usePrivyAuth = () => {
  const { ready, authenticated, user, logout } = usePrivy();
  const [showOnboarding, setShowOnboarding] = useState(false);

  const { login } = useLogin({
    onComplete: (user, isNewUser) => {
      if (isNewUser) {
        setShowOnboarding(true);
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });

  const handleLogin = useCallback(() => {
    login();
  }, [login]);

  const handleLogout = useCallback(async () => {
    await logout();
    setShowOnboarding(false);
  }, [logout]);

  return {
    ready,
    authenticated,
    user,
    showOnboarding,
    setShowOnboarding,
    handleLogin,
    handleLogout,
  };
};
