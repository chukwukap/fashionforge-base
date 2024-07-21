"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BriefcaseIcon,
  SwatchIcon,
  UsersIcon,
  ShoppingBagIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  SwatchIcon as ColorPaletteIcon,
  ScissorsIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { name: "Projects", icon: BriefcaseIcon, href: "/dashboard/projects" },
  { name: "Designs", icon: SwatchIcon, href: "/dashboard/designs" },
  { name: "Collections", icon: Squares2X2Icon, href: "/dashboard/collections" },
  {
    name: "Fabric Library",
    icon: ScissorsIcon,
    href: "/dashboard/fabric-library",
  },
  {
    name: "Color Palettes",
    icon: ColorPaletteIcon,
    href: "/dashboard/color-palettes",
  },
  { name: "Measurements", icon: ScissorsIcon, href: "/dashboard/measurement" },
  { name: "Clients", icon: UsersIcon, href: "/dashboard/clients" },
  { name: "Orders", icon: ShoppingBagIcon, href: "/dashboard/order" },
  { name: "Calendar", icon: CalendarIcon, href: "/dashboard/calendar" },
  { name: "Team", icon: UserGroupIcon, href: "/dashboard/team" },
  { name: "Analytics", icon: ChartBarIcon, href: "/dashboard/analytics" },
  { name: "Settings", icon: Cog6ToothIcon, href: "/dashboard/settings" },
];

export const CollapsibleSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavList = () => (
    <ul className="mt-4 space-y-2">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-gray-300 hover:bg-white hover:bg-opacity-10 hover:text-white"
              }`}
            >
              <item.icon className="w-6 h-6 mr-4" />
              <span
                className={`${
                  isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
                } transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav
      className={`h-screen bg-gradient-to-b from-purple-900 to-indigo-900 overflow-hidden z-10 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4 h-16 flex items-center justify-center">
        <Link href={"/"}>
          {isExpanded ? (
            <h1 className="text-xl font-bold text-white">FashionForge</h1>
          ) : (
            <Image
              height={40}
              width={40}
              src="/logo.svg"
              alt="FashionForge"
              className="w-8 h-8"
            />
          )}
        </Link>
      </div>
      <NavList />
    </nav>
  );
};
