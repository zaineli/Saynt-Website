'use client';
import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050818] text-white pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 mb-12 md:mb-16">
          {/* Left Column */}
          <div className="flex flex-col h-full justify-between">
            <div>
              {/* Catalog Header */}
              <div className="flex items-start gap-1 mb-6 md:mb-8">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Catalog</h2>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1" />
              </div>

              {/* Navigation */}
              <nav className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-x-4 md:gap-y-2 text-sm mb-8 md:mb-24">
                <a href="#" className="text-[#00FFD2] hover:text-[#00FFD2]/80 transition-colors">Home</a>
                <span className="text-gray-700 hidden md:inline">/</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a>
                <span className="text-gray-700 hidden md:inline">/</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blogs</a>
                <span className="text-gray-700 hidden md:inline">/</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                <span className="text-gray-700 hidden md:inline">/</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </nav>

              {/* Large Logo - Desktop only here */}
              <div className="hidden md:flex items-center gap-6 mb-16">
                <div className="relative w-36 h-36">
                  <Image
                    src="/logo2.png"
                    alt="Saynt Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-3xl font-medium tracking-wide">SAYNT AI</span>
              </div>
            </div>

            {/* Back to Top Button - Desktop only here */}
            <div className="hidden md:block">
              <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors group"
              >
                <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6 md:space-y-10 flex flex-col items-start lg:self-end">
              {/* Location */}
              <div>
                <h4 className="text-[#00FFD2] text-xs md:text-sm font-medium mb-2 md:mb-3">Location</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  DHA, Sehar Commercial, Phase<br />
                  7, Karachi
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-[#00FFD2] text-xs md:text-sm font-medium mb-2 md:mb-3 self-start">Email</h4>
                <a href="mailto:contact@saynt.org" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  contact@saynt.org
                </a>
              </div>
              {/* Contact Us */}
              <div>
                <h4 className="text-[#00FFD2] text-xs md:text-sm font-medium mb-2 md:mb-3">Contact Us</h4>
                <a href="tel:+18919891191" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  +1 891 989-11-91
                </a>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-[#00FFD2] text-xs md:text-sm font-medium mb-2 md:mb-3">Mo—Fr</h4>
                <p className="text-gray-400 text-sm md:text-base">9am—6pm</p>
              </div>
            </div>

            {/* Copyright - Desktop only here */}
            <div className="hidden md:block self-start mt-12 lg:mt-0 items-start">
              <p className="text-[#00FFD2] text-xs">© 2024 — Copyright</p>
            </div>
          </div>
        </div>

        {/* Large Logo - Mobile only here */}
        <div className="flex md:hidden items-center gap-4 mb-8">
          <div className="relative w-16 h-16">
            <Image
              src="/logo2.png"
              alt="Saynt Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-xl font-medium tracking-wide">SAYNT AI</span>
        </div>

        {/* Bottom CTA Card */}
        <div className="relative w-full h-[160px] md:h-[200px] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer mb-8 md:mb-0">
          {/* Background Image */}
          <Image
            src="/footer.jpg"
            alt="Explore our success"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-10 flex items-center justify-between">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-white max-w-xs leading-tight">
              Explore<br />
              our success
            </h3>

            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top - Mobile only here */}
        <div className="flex md:hidden items-center justify-between mt-8">
          <p className="text-[#00FFD2] text-xs">© 2024 — Copyright</p>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors group"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;