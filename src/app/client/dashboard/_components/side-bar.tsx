"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Scissors,
  MessageSquare,
  FileText,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/client/dashboard", icon: Home },
  { name: "My Projects", href: "/client/dashboard/project", icon: Scissors },
  { name: "Messages", href: "/client/dashboard/messages", icon: MessageSquare },
  { name: "Invoices", href: "/client/dashboard/invoices", icon: FileText },
  {
    name: "Account Settings",
    href: "/client/dashboard/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={cn("w-64 bg-muted p-6", className)}>
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold">FashionForge</span>
      </div>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center py-2 px-4 rounded-lg mb-2 transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted-foreground/10"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
