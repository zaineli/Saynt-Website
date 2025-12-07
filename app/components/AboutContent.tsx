'use client';

import Image from 'next/image';

export default function AboutContent() {
  return (
    <section className="w-full bg-[#020617] text-white min-h-screen flex items-center justify-center ">
      <div className="w-full flex items-center justify-center gap-32">
          {/* Left Column - Logo */}
            <div className="relative w-full max-w-[600px] aspect-square flex-basis-50">
              <Image
                src="/logo3.svg"
                alt="Saynt Logo"
                fill
                className="object-contain"
              />
            </div>
          {/* Right Column - Content */}
          <div className="space-y-10 flex-basis-50 max-w-2xl">
            <div className="space-y-8">
              <h2 className="font-[family-name:var(--font-urbanist)] font-semibold text-[64px] leading-[120%] tracking-[0%] text-[#45FFD0]">
                Your Partner in Practical AI Transformation
              </h2>
    
              <p className="font-[family-name:var(--font-urbanist)] font-normal text-[28px] leading-[150%] tracking-[0%] text-white">
                You face enough AI hype. We provide clarity. <span className="font-bold">SAYNT</span> was founded to help business leaders like you achieve tangible outcomes with AI. Our mission is to make AI a predictable, profit-driving engine for your company. We deliver business results, not just technology.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
