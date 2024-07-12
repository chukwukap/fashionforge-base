"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { coreDao, mainnet, sepolia } from "viem/chains";

import type { PrivyClientConfig } from "@privy-io/react-auth";
import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import SupabaseProvider from "./supabase-provider";
import { TooltipProvider } from "./ui/tooltip";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, coreDao],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [coreDao.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
    requireUserPasswordOnCreate: true,
    priceDisplay: {
      primary: "native-token",
      secondary: null,
    },

    noPromptOnSignature: false,
  },
  defaultChain: coreDao,
  supportedChains: [mainnet, sepolia, coreDao],
  appearance: {
    showWalletLoginFirst: true,
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL as string}
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={privyConfig}
    >
      <SupabaseProvider>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
            <TooltipProvider>{children}</TooltipProvider>
          </WagmiProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    </PrivyProvider>
  );
}

// import { createServerClient } from './supabase-server'

// export default async function ServerComponent() {
//   const supabase = createServerClient()
//   const { data } = await supabase.from('your_table').select()

//   return <pre>{JSON.stringify(data, null, 2)}</pre>
// }
