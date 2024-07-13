import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserStore } from "@/lib/store/useUserStore";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const { user, loading } = useUserStore.getState();
  const { login, logout } = usePrivy();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Designers", href: "/designers" },
    { name: "Collections", href: "/collections" },
    { name: "Marketplace", href: "/marketplace" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="sr-only">FashionForge</span>
                <img
                  className="h-10 w-auto sm:h-12"
                  src="/logo.svg"
                  alt="FashionForge"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-base font-medium text-gray-600 hover:text-amber-600 transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-600 transform origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* Search and User Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="search"
                  className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white/50 backdrop-blur-sm"
                  placeholder="Search designs, collections..."
                />
                <div className="absolute left-3 top-2.5">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative rounded-full bg-amber-100 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full object-cover"
                        src={user?.avatar || "https://via.placeholder.com/40"}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="mt-2 w-48 bg-white/80 backdrop-blur-lg"
                    align="end"
                  >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => router.push("/profile")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => router.push("/dashboard")}
                    >
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => router.push("/settings")}>
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={logout}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  onClick={login}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
                >
                  Sign in
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-amber-100 rounded-md p-2 inline-flex items-center justify-center text-amber-600 hover:text-amber-700 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathName === item.href
                        ? "text-amber-600 bg-amber-50"
                        : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-2 space-y-1">
                  {user ? (
                    <>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={login}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                    >
                      Sign in
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.header>
  );
};

export default Header;
