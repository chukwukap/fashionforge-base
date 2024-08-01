import { useAccount, useConnect, useDisconnect } from "wagmi";

export function useWagmi() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return { address, isConnected, connect, connectors, disconnect };
}
