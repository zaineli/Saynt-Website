'use client';
import Image from 'next/image';

export default function FocusSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-12 sm:py-20 mb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="World Map Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      {/* Glass Card with Glow */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 rounded-lg backdrop-blur-md bg-gradient-to-r from-[rgba(255,255,255,0.08)] to-transparent to-[rgba(255,255,255,0.08)] border-2 sm:border-3 border-[rgba(255,255,255,0.5)] shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.03)] w-full max-w-[90%] sm:max-w-[840px] h-auto sm:h-[515px] pt-8 sm:pt-10 pb-8 sm:pb-10 gap-4 sm:gap-5"
      >
        {/* Title */}
        <h2
          className="text-center font-[var(--font-poppins),Poppins,sans-serif] font-normal text-3xl sm:text-5xl leading-tight sm:leading-[60px] tracking-[0.02em]"
        >
          <span className="text-[#45FFD0]">We Guarantee a Focus</span>
          <br />
          <span className="text-[#45FFD0]">on What </span>
          <span
            className="text-white font-bold text-4xl sm:text-6xl leading-tight sm:leading-[60px] tracking-[0.02em]"
          >
            Matters:
          </span>
          <br />
          <span
            className="text-white font-bold text-4xl sm:text-6xl leading-tight sm:leading-[60px] tracking-[0.02em]"
          >
            Your Success
          </span>
        </h2>
        {/* Description */}
        <p
          className="text-white/90 text-center max-w-[90%] sm:max-w-[600px] mt-4 font-[var(--font-poppins),Poppins,sans-serif] font-normal text-lg sm:text-2xl leading-6 sm:leading-7 tracking-normal"
        >
          We promise to always tie our work back to your key metrics. Your success, measured in time saved, costs reduced, and revenue gained, is how we measure our own
        </p>
      </div>
    </section>
  );
}