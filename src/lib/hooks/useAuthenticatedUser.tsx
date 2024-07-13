import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { createClientComponent } from "@/lib/supabase";
import { User } from "@/lib/types";

export function useAuthenticatedUser() {
  const { user: privyUser, authenticated } = usePrivy();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponent();

  useEffect(() => {
    async function fetchUser() {
      if (authenticated && privyUser) {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("privy_id", privyUser.id)
          .single();

        if (error) {
          console.error("Error fetching user:", error);
        } else {
          setUser(data as User);
        }
      }
      setLoading(false);
    }

    fetchUser();
  }, [authenticated, privyUser]);

  return { user, loading };
}
