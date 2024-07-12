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

import Sidebar from "./_components/side-bar";
import { RecentDesigns } from "./_components/recent-designs";
import UpcomingDeadlines from "./_components/upcoming-deadline";
import { StatCard } from "./_components/stat-card";
import { BlockchainActivity } from "./_components/blockchain-activity";
import { SalesChart } from "./_components/sales-chart";
import { DesignPopularity } from "./_components/design-popularity";

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
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white/50 backdrop-blur-sm px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/designer/dashboard"
                  className="flex items-center gap-2 text-purple-600"
                >
                  <Package2 className="h-6 w-6" />
                  <span>FashionForge</span>
                </Link>
                {navItems.map((item) => (
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
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  width={32}
                  height={32}
                  alt="Avatar"
                  className="rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
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
