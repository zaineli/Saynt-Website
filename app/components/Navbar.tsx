import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-6">
      <div className="w-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center basis-1/3">
          <Image
            src="/logo.svg"
            alt="Saynt Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-start basis-2/3">
          <a
            href="#home"
            className="px-6 text-sm font-medium bg-gradient-to-r from-[#38AE99] to-white bg-clip-text text-transparent hover:opacity-80 transition-opacity border-r border-gray-700"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-6 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
          >
            About Us
          </a>
          <a
            href="#blogs"
            className="px-6 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="px-6 text-sm font-medium text-gray-400 hover:text-white transition-colors border-r border-gray-700"
          >
            Contact Us
          </a>
          <a
            href="#careers"
            className="px-6 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Careers
          </a>
        </div>
      </div>
    </nav>
  );
}