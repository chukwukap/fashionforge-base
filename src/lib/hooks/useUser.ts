import { useAccount, useSignMessage } from "wagmi";
import { useEffect, useCallback } from "react";
import { useUserStore } from "@/lib/store/useUserStore";
import { UserRole } from "@/lib/types";

export function useUser() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { user, loading, isNewUser, fetchUser, setUserRole } =
    useUserStore.getState();

  const refetchUser = useCallback(() => {
    if (isConnected && address) {
      fetchUser(address);
    }
  }, [isConnected, address, fetchUser]);

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);

  const setRole = async (role: UserRole) => {
    if (!address) return;

    const message = `Sign this message to verify your wallet address and set your role as ${role}`;
    const signature = await signMessageAsync({ message });

    await setUserRole(address, role, signature);
    refetchUser(); // Refetch user after setting role
  };

  return { user, loading, isNewUser, setRole, refetchUser };
}
