"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  Palette,
  Users,
  ShoppingBag,
  Calendar,
  BarChart,
  Settings,
  Menu,
  X,
} from "lucide-react";

// Import custom SVG icons
import {
  FabricIcon,
  MeasurementsIcon,
  CollectionsIcon,
  ColorPalettesIcon,
  TeamIcon,
} from "@/components/common/icons";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/designer/dashboard" },
  { name: "Projects", icon: Briefcase, href: "/designer/projects" },
  { name: "Designs", icon: Palette, href: "/designer/designs" },
  { name: "Collections", icon: CollectionsIcon, href: "/designer/collections" },
  {
    name: "Fabric Library",
    icon: FabricIcon,
    href: "/designer/fabric-library",
  },
  {
    name: "Color Palettes",
    icon: ColorPalettesIcon,
    href: "/designer/color-palettes",
  },
  {
    name: "Measurements",
    icon: MeasurementsIcon,
    href: "/designer/measurements",
  },
  { name: "Clients", icon: Users, href: "/designer/clients" },
  { name: "Orders", icon: ShoppingBag, href: "/designer/orders" },
  { name: "Calendar", icon: Calendar, href: "/designer/calendar" },
  { name: "Team", icon: TeamIcon, href: "/designer/team" },
  { name: "Analytics", icon: BarChart, href: "/designer/analytics" },
  { name: "Settings", icon: Settings, href: "/designer/settings" },
];

const CollapsibleSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavList = () => (
    <ul className="mt-4 overflow-y-auto h-[calc(100vh-4rem)] scrollbar-thin scrollbar-thumb-ff-accent scrollbar-track-ff-primary">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center p-4 ${
                isActive
                  ? "bg-ff-accent text-ff-light"
                  : "text-ff-light hover:bg-ff-secondary hover:text-ff-light"
              } transition-colors duration-200`}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              <item.icon className="w-6 h-6 min-w-[24px]" />
              <span
                className={`ml-4 ${
                  isExpanded || isMobile ? "opacity-100" : "opacity-0 w-0"
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

  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleMobileMenu}
          className="fixed top-4 left-4 z-50 p-2 bg-ff-primary text-ff-light rounded-md"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`fixed inset-0 bg-ff-dark bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <nav
          className={`fixed top-0 left-0 h-screen w-64 bg-ff-primary text-ff-light z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 h-16 flex items-center">
            <h1 className="text-xl font-bold">FashionForge</h1>
          </div>
          <NavList />
        </nav>
      </>
    );
  }

  return (
    <nav
      className={`fixed left-0 top-0 h-screen bg-ff-primary text-ff-light overflow-hidden z-10 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-60" : "w-16"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4 h-16 flex items-center justify-center">
        {isExpanded ? (
          <h1 className="text-xl font-bold">FashionForge</h1>
        ) : (
          <img src="/logo.svg" alt="FashionForge" className="w-8 h-8" />
        )}
      </div>
      <NavList />
    </nav>
  );
};

export default CollapsibleSidebar;
