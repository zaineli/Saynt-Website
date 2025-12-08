'use client';

import Image from 'next/image';

export default function FocusSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 mb-16">
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
        className="relative z-10 flex flex-col items-center justify-center text-center px-12"
        style={{
          width: '840px',
          height: '515px',
          borderRadius: '10px',
          paddingTop: '40px',
          paddingBottom: '40px',
          gap: '18px',
          backdropFilter: 'blur(6px)',
          background: 'linear-gradient(100.82deg, rgba(255, 255, 255, 0.08) 2.25%, rgba(0, 0, 0, 0) 58.36%, rgba(255, 255, 255, 0.08) 98.88%)',
          border: '3px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.03)',
        }}
      >
        {/* Title */}
        <h2 
          className="text-center"
          style={{
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '48px',
            lineHeight: '60px',
            letterSpacing: '2%',
          }}
        >
          <span className="text-[#45FFD0]">We Guarantee a Focus</span>
          <br />
          <span className="text-[#45FFD0]">on What </span>
          <span 
            className="text-white"
            style={{
              fontWeight: 700,
              fontSize: '64px',
              lineHeight: '60px',
              letterSpacing: '2%',
            }}
          >
            Matters:
          </span>
          <br />
          <span 
            className="text-white"
            style={{
              fontWeight: 700,
              fontSize: '64px',
              lineHeight: '60px',
              letterSpacing: '2%',
            }}
          >
            Your Success
          </span>
        </h2>

        {/* Description */}
        <p 
          className="text-white/90 text-center max-w-[600px] mt-4"
          style={{
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '28px',
            letterSpacing: '0%',
          }}
        >
          We promise to always tie our work back to your key metrics. Your success, measured in time saved, costs reduced, and revenue gained, is how we measure our own
        </p>
      </div>
    </section>
  );
}
