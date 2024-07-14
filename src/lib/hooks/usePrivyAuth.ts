// hooks/usePrivyAuth.ts
import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { createClientComponent } from "@/lib/prisma";
import { User, UserRole } from "@/lib/types";

export function usePrivyAuth() {
  const { ready, authenticated, user: privyUser, login, logout } = usePrivy();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const supabase = createClientComponent();

  useEffect(() => {
    async function syncUser() {
      if (authenticated && privyUser) {
        let { data: userData, error } = await supabase
          .from("users")
          .select("*")
          .eq("privy_id", privyUser.id)
          .single();

        if (error && error.code === "PGRST116") {
          // User doesn't exist in Supabase yet
          setIsNewUser(true);
          setUser(null);
        } else if (error) {
          console.error("Error fetching user:", error);
        } else {
          setUser(userData as User);
          setIsNewUser(false);
        }
      } else {
        setUser(null);
        setIsNewUser(false);
      }
      setLoading(false);
    }

    if (ready) {
      syncUser();
    }
  }, [ready, authenticated, privyUser]);

  const setUserRole = async (role: UserRole) => {
    if (!privyUser) return;

    const newUser = {
      privy_id: privyUser.id,
      email: privyUser.email?.address || "",
      name: privyUser?.email || "",
      walletAddress: privyUser.wallet?.address,
      role: role,
    };

    const { data, error } = await supabase
      .from("users")
      .insert(newUser)
      .single();

    if (error) {
      console.error("Error creating user:", error);
    } else {
      setUser(data as User);
      setIsNewUser(false);
    }
  };

  return { user, loading, isNewUser, login, logout, setUserRole };
}
