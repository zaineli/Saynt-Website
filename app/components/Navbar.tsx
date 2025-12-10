"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/careers", label: "Careers" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full py-6">
      <div className="w-full mx-auto px-6 flex items-center justify-between gap-6">

        {/* LEFT: Logo + Name (added name but not changing your logo layout) */}
        <div className="flex items-center gap-3 basis-1/3">
          <Link href="/" className="flex items-center gap-3 lg:pl-36">

            <Image
              src="/logo.svg"
              alt="Saynt Logo"
              width={82}
              height={82}
              className="
    object-contain cursor-pointer
    w-[55px] h-[55px]      /* mobile */
    sm:w-[65px] sm:h-[65px] /* small screens */
    md:w-[75px] md:h-[75px] /* tablets */
    lg:w-[82px] lg:h-[82px] /* your original size on desktop */
  "
            />

            <span className="text-white font-semibold text-xl md:hidden block">
              SAYNT
            </span>
          </Link>
        </div>

        {/* DESKTOP LINKS (unchanged) */}
        <div className="hidden md:flex items-center justify-start basis-2/3">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 text-[18px] font-medium transition-all ${index < navLinks.length - 1 ? "border-r border-gray-700" : ""
                } ${isActive(link.href)
                  ? "bg-gradient-to-r from-[#38AE99] to-white bg-clip-text text-transparent"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU (same links, same styles) */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-[18px] font-medium pb-2 border-b border-gray-700 ${isActive(link.href)
                  ? "bg-gradient-to-r from-[#38AE99] to-white bg-clip-text text-transparent"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
