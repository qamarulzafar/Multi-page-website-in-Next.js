"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/Logo/Logo.png"; // Ensure correct path for the image
import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [IsSheetOpen, setIsSheetOpen] = useState(false);
  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="w-full h-20 px-5 md:px-10 flex justify-between items-center">
      {/* Logo Section */}
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="Company Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-8 font-medium text-base md:text-lg">
        <Link
          href="/"
          className="text-lg hover:text-gray-700 transition transform hover:translate-y-[1px]"
        >
          Home
        </Link>
        <Link
          href="/Speaker"
          className="text-lg hover:text-gray-700 transition transform hover:translate-y-[1px]"
        >
          Speaker
        </Link>
        <Link
          href="/Help"
          className="text-lg hover:text-gray-700 transition transform hover:translate-y-[1px]"
        >
          Help
        </Link>
        <Link
          href="/News"
          className="text-lg hover:text-gray-700 transition transform hover:translate-y-[1px]"
        >
          News
        </Link>
        <Link
          href="/Contact"
          className="text-lg hover:text-gray-700 transition transform hover:translate-y-[1px]"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={IsSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="right" className="p-5 bg-gray-50">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-4">
            <Link
              href="/"
              onClick={closeSheet}
              className="hover:text-gray-700 transition"
            >
              Home
            </Link>
            <Link
              href="/Speaker"
              onClick={closeSheet}
              className="hover:text-gray-700 transition"
            >
              Speaker
            </Link>
            <Link
              href="/Help"
              onClick={closeSheet}
              className="hover:text-gray-700 transition"
            >
              Help
            </Link>
            <Link
              href="/News"
              onClick={closeSheet}
              className="hover:text-gray-700 transition"
            >
              News
            </Link>
            <Link
              href="/Contact"
              onClick={closeSheet}
              className="hover:text-gray-700 transition"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
