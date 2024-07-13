import { usePrivy } from "@privy-io/react-auth";
import { createClientComponent } from "@/lib/supabase";
import { User, UserRole } from "@/lib/types";

export function useUserRegistration() {
  const { user: privyUser } = usePrivy();
  const supabase = createClientComponent();

  const registerUser = async (role: UserRole) => {
    if (!privyUser) return null;

    const { data, error } = await supabase
      .from("users")
      .insert({
        privy_id: privyUser.id,
        email: privyUser.email?.address,
        name: privyUser.email?.address,
        role: role,
        walletAddress: privyUser.wallet?.address,
      })
      .single();

    if (error) {
      console.error("Error registering user:", error);
      return null;
    }

    return data as User;
  };

  return { registerUser };
}
