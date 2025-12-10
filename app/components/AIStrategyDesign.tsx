import React from 'react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ServiceItem {
  icon: LucideIcon;
  text: string;
}

interface AIStrategyDesignProps {
  title: string;
  subtitle: string;
  description: string;
  items: ServiceItem[];
  reverse?: boolean;
  showServicesHeader?: boolean;
}

export default function AIStrategyDesign({
  title,
  subtitle,
  description,
  items,
  reverse = false,
  showServicesHeader = false
}: AIStrategyDesignProps) {
  return (
    <div className="w-full bg-[#020617] text-white relative py-16 lg:py-32 overflow-hidden">
      {/* Background lines image for desktop - positioned in center connecting the two sections, flips with layout */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[400px] pointer-events-none z-0 opacity-90 hidden lg:block ${
        reverse ? 'right-1/2 translate-x-1/2 scale-x-[-1]' : 'left-1/2 -translate-x-1/2'
      }`}>
        <div className="relative w-full h-full">
          <Image
            src="/lines.png"
            alt="Decorative connector lines"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 400px, 600px"
            priority={false}
          />
        </div>
      </div>
      {/* Services Header */}
      {showServicesHeader && (
        <div className="text-center mb-12 lg:mb-20 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-medium text-white">Services</h2>
        </div>
      )}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-0 lg:w-[85%] lg:max-w-[1400px] mx-auto">
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-20 w-full items-center justify-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Column */}
          <div className="space-y-6 w-full max-w-2xl lg:max-w-none">
            <h1 className="font-medium text-[36px] sm:text-[48px] lg:text-[56px] leading-[120%] tracking-[0%]">
              {title}
            </h1>
            <h2 className="font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[150%] tracking-[0%] text-[#45FFD0]">
              {subtitle}
            </h2>
            <p className="font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[150%] tracking-[0%] text-gray-300">
              {description}
            </p>
          </div>
          {/* Card Column */}
          <div className="w-full max-w-2xl lg:max-w-none">
            <div className="bg-[#181924] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
              <div className="flex flex-col gap-6 lg:gap-8">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 sm:gap-6 pb-6 lg:pb-8 ${index < items.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <div className="bg-white rounded-xl p-2 lg:p-3 flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                        <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-black" strokeWidth={1.5} />
                      </div>
                      <p className="font-[family-name:var(--font-urbanist)] font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] tracking-[0%] text-white">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}