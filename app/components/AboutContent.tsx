'use client';
import Image from 'next/image';

export default function AboutContent() {
  return (
    <section className="w-full bg-[#020617] text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-0">
      {/* Our Mission Heading */}
      <h2
        className="font-[family-name:var(--font-urbanist)] font-semibold text-white text-center mb-8 lg:mb-16 text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.2]"
      >
        Our Mission
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32">
        {/* Left Column - Logo */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] aspect-square">
          <Image
            src="/logo3.svg"
            alt="Saynt Logo"
            fill
            className="object-contain"
          />
        </div>
        {/* Right Column - Content */}
        <div className="space-y-6 lg:space-y-10 w-full max-w-xl lg:max-w-2xl">
          <div className="space-y-4 lg:space-y-8">
            <h2 className="font-[family-name:var(--font-urbanist)] font-semibold text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.2] tracking-[0%] text-[#45FFD0]">
              Your Partner in Practical AI Transformation
            </h2>
            <p className="font-[family-name:var(--font-urbanist)] font-normal text-[18px] sm:text-[22px] lg:text-[28px] leading-[1.5] tracking-[0%] text-white">
              You face enough AI hype. We provide clarity. <span className="font-bold">SAYNT</span> was founded to help business leaders like you achieve tangible outcomes with AI. Our mission is to make AI a predictable, profit-driving engine for your company. We deliver business results, not just technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}