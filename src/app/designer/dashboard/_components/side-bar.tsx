"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Package2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navItems } from "./mobile-nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/designer/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-amber-500 text-lg font-semibold text-white md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
        </Link>
        {navItems.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                  pathname === item.href
                    ? "bg-amber-100 text-amber-600"
                    : "text-gray-500 hover:text-amber-600"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{item.name}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/designer/settings"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-amber-600 md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
