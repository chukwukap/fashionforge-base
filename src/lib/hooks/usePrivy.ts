import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

export function usePrizy() {
  const { login, logout, authenticated, user } = usePrivy();
  const router = useRouter();

  const handleLogin = async () => {
    await login();
    router.push("/dashboard");
  };

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return { handleLogin, handleLogout, authenticated, user };
}
