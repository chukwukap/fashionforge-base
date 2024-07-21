import React from "react";
import Link from "next/link";
import { Package2 } from "lucide-react";

import {
  Home,
  Scissors,
  Palette,
  Shirt,
  Users,
  ShoppingCart,
  Calendar,
  Users2,
  LineChart,
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", href: "/designer/dashboard", icon: Home },
  { name: "Projects", href: "/designer/projects", icon: Scissors },
  { name: "Designs", href: "/designer/designs", icon: Shirt },
  { name: "Collections", href: "/designer/collections", icon: Palette },
  { name: "Clients", href: "/designer/clients", icon: Users },
  { name: "Orders", href: "/designer/orders", icon: ShoppingCart },
  { name: "Calendar", href: "/designer/calendar", icon: Calendar },
  { name: "Team", href: "/designer/team", icon: Users2 },
  { name: "Analytics", href: "/designer/analytics", icon: LineChart },
];

export function MobileNav() {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        href="/designer/dashboard"
        className="flex items-center gap-2 text-purple-600"
      >
        <Package2 className="h-6 w-6" />
        <span>FashionForge</span>
      </Link>
      {navItems.map((item: any) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
        >
          <item.icon className="h-5 w-5" />
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
