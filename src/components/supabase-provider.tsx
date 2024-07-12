"use client";

import { createContext, useContext, useState } from "react";
import { createClientComponent } from "@/lib/supabase";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

type SupabaseContext = {
  supabase: SupabaseClient;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClientComponent());

  return <Context.Provider value={{ supabase }}>{children}</Context.Provider>;
}

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }
  return context;
};
