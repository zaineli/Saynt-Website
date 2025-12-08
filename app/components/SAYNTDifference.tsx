'use client';

import Image from 'next/image';
import { Presentation, Target, TrendingUp } from 'lucide-react';

export default function SAYNTDifference() {
  const differences = [
    {
      icon: Presentation,
      title: 'We Understand Your Business Goals',
      description:
        'You receive solutions built for your unique challenges. We start by understanding your objectives, ensuring we deliver the efficiency and growth you need.'
    },
    {
      icon: Target,
      title: 'We Mitigate Your Risk',
      description:
        'You can invest in AI with confidence. Our rapid prototyping and proof of concept process demonstrates value early, ensuring a predictable return on your investment.'
    },
    {
      icon: TrendingUp,
      title: 'We Ensure Your Long-Term Success',
      description:
        'You gain a dedicated partner. We support your AI journey from initial strategy to ongoing management, building systems that scale with your ambitions.'
    }
  ];

  return (
    <section className="w-full bg-[#0F1419] text-white py-20 lg:py-32 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-24 relative z-10">
        <h2 className="text-[40px] sm:text-[52px] lg:text-[64px]  leading-[1.1] tracking-[-0.02em] mb-4">
          The SAYNT <span className="text-[#00FFD2] font-semibold">Difference</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-[32px] text-white font-normal leading-relaxed">
          An Outcome-First Partnership
        </p>
      </div>

      {/* Main Content - Centered Container */}
      <div className="w-full px-4">
        <div className="relative flex flex-col lg:flex-row items-center justify-around gap-16 lg:gap-0">
          
          {/* Left Side - Logo */}
          <div className="flex-shrink-0 lg:mr-20">
            <div className="relative w-[200px] h-[200px] rounded-[40px] bg-[#1A1F2E] border-2 border-[#2D3748] flex items-center justify-center z-20">
              <Image
                src="/logo.svg"
                alt="Saynt Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          </div>

          {/* Middle - Connecting Lines (Desktop only) */}
          <div className="hidden lg:block absolute left-[50%] top-[50%] -translate-x-[280px] -translate-y-[50%] w-[500px] h-[450px] pointer-events-none z-10">
            {/* Top Line */}
            <div className="absolute left-[88px] top-[65px] w-[412px] h-[160px]">
              <Image 
                src="/saynt-difference-line-top.svg" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
            
            {/* Middle Line */}
            <div className="absolute left-[17px] top-[223px] w-[483px] h-[3px]">
              <Image 
                src="/saynt-difference-line-middle.svg" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
            
            {/* Bottom Line */}
            <div className="absolute left-[88px] top-[290px] w-[412px] h-[160px]">
              <Image 
                src="/saynt-difference-line-bottom.svg" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile Connecting Lines */}
          <div className="lg:hidden absolute left-[50%] top-[200px] -translate-x-[50%] w-[280px] h-[450px] pointer-events-none z-10">
            {/* Top Line - Mobile */}
            <div className="absolute left-[40px] top-[50px] w-[240px] h-[100px]">
              <Image 
                src="/saynt-difference-line-top.svg" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
            
            {/* Middle Line - Mobile */}
            <div className="absolute left-[20px] top-[190px] w-[260px] h-[3px]">
              <Image 
                src="/saynt-difference-line-middle.svg" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
            
            {/* Bottom Line - Mobile */}
            <div className="absolute left-[40px] top-[305px] w-[240px] h-[100px]">
              <Image 
                src="/saynt-difference-line-bottom.svg" 
                alt="" 
                fill 
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="flex-1 space-y-16 lg:space-y-20 max-w-[700px] z-20">
            {differences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] rounded-[24px] bg-[#1E2330] border border-[#374151] flex items-center justify-center">
                    <Icon className="w-10 h-10 lg:w-11 lg:h-11 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-[#00FFA3] text-[20px] lg:text-[24px] font-semibold mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-[15px] lg:text-[17px] leading-[1.7] font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
