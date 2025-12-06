'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/careers", label: "Careers" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full py-6">
      <div className="w-full mx-auto px-6 flex items-center justify-between gap-16">
        {/* Logo */}
        <div className="flex items-center justify-center basis-1/3">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Saynt Logo"
              width={48}
              height={48}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-start basis-2/3">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 text-sm font-medium transition-all ${
                index < navLinks.length - 1 ? 'border-r border-gray-700' : ''
              } ${
                isActive(link.href)
                  ? 'bg-gradient-to-r from-[#38AE99] to-white bg-clip-text text-transparent'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}