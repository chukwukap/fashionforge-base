import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { createClientComponent } from "@/lib/prisma";
import { User } from "@/lib/types";

export function usePrivyAuth() {
  const { ready, authenticated, user: privyUser, login, logout } = usePrivy();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponent();

  useEffect(() => {
    async function syncUser() {
      if (authenticated && privyUser) {
        // Check if user exists in Supabase
        let { data: userData, error } = await supabase
          .from("users")
          .select("*")
          .eq("privy_id", privyUser.id)
          .single();

        if (error && error.code === "PGRST116") {
          // User doesn't exist, create new user
          const newUser = {
            privy_id: privyUser.id,
            email: privyUser.email?.address || "",
            name: privyUser?.email || "",
            walletAddress: privyUser.wallet?.address,
            role: "CLIENT", // Default role, can be changed later
          };

          const { data: createdUser, error: createError } = await supabase
            .from("users")
            .insert(newUser)
            .single();

          if (createError) {
            console.error("Error creating user:", createError);
          } else {
            userData = createdUser;
          }
        } else if (error) {
          console.error("Error fetching user:", error);
        }

        setUser(userData as User);
      } else {
        setUser(null);
      }
      setLoading(false);
    }

    if (ready) {
      syncUser();
    }
  }, [ready, authenticated, privyUser]);

  return { user, loading, login, logout };
}
