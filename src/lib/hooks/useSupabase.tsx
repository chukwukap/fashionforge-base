import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { createClientComponent } from "@/lib/supabase";

interface SupabaseUser {
  id: string;
  privy_id: string;
}

interface UserRole {
  id: string;
  name: string;
}

export const useSupabaseUserAndRoles = () => {
  const { user } = usePrivy();
  const supabase = createClientComponent();
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndRoles = async () => {
      if (user) {
        // Fetch or create user in your database
        let { data: userData, error: userError } = await supabase
          .from("users")
          .select("*")
          .eq("privy_id", user.id)
          .single();

        if (userError && userError.code === "PGRST116") {
          // User doesn't exist, create new user
          const { data: newUser, error: createError } = await supabase
            .from("users")
            .insert({ privy_id: user.id })
            .select()
            .single();

          if (createError) {
            console.error("Error creating user:", createError);
            return;
          }
          userData = newUser;
        } else if (userError) {
          console.error("Error fetching user data:", userError);
          return;
        }

        setSupabaseUser(userData);

        // Fetch user roles
        const { data: rolesData, error: rolesError } = await supabase
          .from("user_roles")
          .select("roles(id, name)")
          .eq("user_id", userData.id);

        if (rolesError) {
          console.error("Error fetching user roles:", rolesError);
        } else {
          setUserRoles(rolesData);
        }
      }
      setLoading(false);
    };

    fetchUserAndRoles();
  }, [user]);

  return { supabaseUser, userRoles, loading };
};
