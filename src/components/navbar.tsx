"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Hexagon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Faqs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="py-10 md:px-0 px-6">
      <div className="container-fluid md:max-w-[1200px] mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center gap-1">
          <Hexagon />
          PurpAI
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="font-outfit text-lg dark:text-white text-slate-800 hover:underline"
          >
            Hire Mohit
          </Link>

          <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
            {theme == "dark" ? <Sun /> : <Moon />}
          </button>

          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              className="dark:bg-zinc-800 bg-zinc-200"
              asChild
            >
              <div
                className="h-12 w-12 flex flex-col justify-center items-center cursor-pointer rounded-md"
                onClick={toggleMenu}
              >
                <div
                  className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-0.1" : "mt-1.5"
                  }`}
                ></div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-zinc-800 text-white mt-4 rounded-lg"
              sideOffset={0}
              align="end"
            >
              {menuItems.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  className="rounded-none hover:bg-transparent focus:bg-transparent h-10"
                >
                  <Link
                    href={item.href}
                    className="w-full p-2 text-lg hover:underline hover:bg-transparent"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
