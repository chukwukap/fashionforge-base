"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  Scissors,
  Palette,
  Shirt,
  Calendar,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { CollapsibleSidebar } from "../_components/side-bar";
import { RecentDesigns } from "../_components/recent-designs";
import UpcomingDeadlines from "../_components/upcoming-deadline";
import { StatCard } from "../_components/stat-card";
import { BlockchainActivity } from "../_components/blockchain-activity";
import { SalesChart } from "../_components/sales-chart";
import { DesignPopularity } from "../_components/design-popularity";

const navItems = [
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

export default function DesignerDashboard() {
  return (
    <div className="min-h-screen w-full ">
      <div className="">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2"
          >
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="New Designs"
                value="12"
                description="+3 this week"
                progress={25}
                icon={<Shirt className="h-6 w-6 text-purple-500" />}
              />
              <StatCard
                title="Total Sales"
                value="$47,589"
                description="+15% from last month"
                progress={32}
                icon={<CreditCard className="h-6 w-6 text-pink-500" />}
              />
              <StatCard
                title="NFT Mints"
                value="89"
                description="+12 this week"
                progress={45}
                icon={<Package className="h-6 w-6 text-indigo-500" />}
              />
              <StatCard
                title="Blockchain Transactions"
                value="1,204"
                description="+8% from last week"
                progress={60}
                icon={<LineChart className="h-6 w-6 text-green-500" />}
              />
            </div>
            <SalesChart />
            <RecentDesigns />
            <DesignPopularity />
            <BlockchainActivity />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <UpcomingDeadlines />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
