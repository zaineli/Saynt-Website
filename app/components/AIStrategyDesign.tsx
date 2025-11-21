import React from 'react';
import { BarChart3, Coins, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function AIStrategyDesign() {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white relative overflow-hidden flex items-center justify-center">
      
      {/* Background lines image - positioned in center connecting the two sections */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none z-0">
        <img 
          src="/lines.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="relative z-10 w-[80%] mx-auto flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">
          {/* Left Column */}
          <div className="space-y-6 relative">
            <h1 className="font-medium text-[56px] leading-[120%] tracking-[0%]">
              AI Strategy and<br />Discovery
            </h1>
            
            <h2 className="font-medium text-[32px] leading-[150%] tracking-[0%] text-[#45FFD0]">
              Build Your Confident AI Investment<br />Plan
            </h2>
            
            <p className="font-normal text-[24px] leading-[150%] tracking-[0%] text-gray-300 max-w-xl">
              We will pinpoint the AI opportunities that deliver
              the highest return. Our strategy workshop gives
              you a clear, business-focused roadmap and
              actionable ROI model.
            </p>
          </div>
          
          {/* Right Column - Single Card Container */}
          <div className="bg-[#181924] rounded-3xl p-4 border border-white/5 shadow-2xl relative z-10 w-[600px] h-[422px] flex flex-col justify-center">
            <div className="w-[500px] flex flex-col gap-6 justify-center mx-auto">
              {/* Item 1 */}
              <div className="flex items-center gap-6 mb-6 border-b border-white/10">
                <div className="bg-white rounded-xl p-3 flex-shrink-0 w-16 h-16 flex items-center justify-center mb-6 ">
                  <BarChart3 className="w-12 h-12 text-black" strokeWidth={1.5} />
                </div>
                <p className="font-[family-name:var(--font-urbanist)] font-normal text-[24px] leading-[28px] tracking-[0%] align-middle text-white">Your clear AI investment strategy</p>
              </div>
              
              {/* Item 2 */}    
              <div className="flex items-center gap-6 mb-6 border-b border-white/10">
                <div className="bg-white rounded-xl p-3 flex-shrink-0 w-16 h-16 flex items-center justify-center mb-6">
                  <Coins className="w-12 h-12 text-black" strokeWidth={1.5} />
                </div>
                <p className="font-[family-name:var(--font-urbanist)] font-normal text-[24px] leading-[28px] tracking-[0%] align-middle text-white">Your data-driven AI ROI model</p>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-white rounded-xl p-3 flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-black" strokeWidth={1.5} />
                </div>
                <p className="font-[family-name:var(--font-urbanist)] font-normal text-[24px] leading-[28px] tracking-[0%] align-middle text-white">Your prioritized plan for AI<br />implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}