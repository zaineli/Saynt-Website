'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Solution {
  id: number;
  icon: string;
  heading: string;
  description: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    icon: '/1.png',
    heading: 'For Us, Your Business Goals Are of Paramount Importance',
    description: 'You see measurable results from every project. We tie our work directly to your goals like cost savings, revenue growth, and efficiency gains.',
  },
  {
    id: 2,
    icon: '/2.png',
    heading: 'We Deliver Value Fast',
    description: 'You get rapid results. Our agile approach means you see a return on your AI investment quickly, turning strategy into execution.',
  },
  {
    id: 3,
    icon: '/3.png',
    heading: 'We Will Be Your Partner in AI Transformation',
    description: 'You gain a true partner. We provide support from your initial strategy to ongoing management, ensuring your long-term AI success.',
  },
];

export default function SolutionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = solutions[activeIndex];

  return (
    <section className="w-full py-20 lg:py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4">
          Why You Can{' '}
          <span className="bg-gradient-to-r from-[#05FFEE] to-[#00FFD2] bg-clip-text text-transparent font-semibold">
            Trust Us
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your Partner for Risk-Free AI Transformation
        </p>
      </div>
      {/* Main Content */}
      <div className="w-full border-b border-t border-[#1F1F1F] flex justify-center items-center">
        <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row justify-center ">
          {/* Left Side - Solution Selector */}
          <div className="flex flex-row lg:flex-col w-full lg:w-[160px] shrink-0 overflow-x-auto lg:overflow-visible">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-300 group w-[33.33%] sm:w-[120px] lg:w-[159.55px] h-[120px] lg:h-[159px] border-r-[1.12px] border-b-[1.12px] border-l-[1.12px] border-solid ${
                  activeIndex === index
                    ? 'opacity-100 border-white border-t-[1.12px]'
                    : 'opacity-50 hover:opacity-100 border-[#1F1F1F] border-t-0'
                }`}
              >
                {/* Icon */}
                <div className="absolute w-[100px] h-[50px] top-[60px] left-[10%] lg:w-[131px] lg:h-[62px] lg:top-[35px] lg:left-[12px]">
                  <Image
                    src={solution.icon}
                    alt={`Step ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Number */}
                <span
                  className={`text-lg font-medium absolute top-4 left-0 right-0 text-center lg:top-auto lg:bottom-4 ${
                    activeIndex === index ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
          {/* Right Side - Content Display */}
          <div className="flex-1 flex items-center p-8 lg:p-0 lg:pl-24">
            <div className="flex flex-col items-start text-left w-full max-w-5xl">
              {/* Heading */}
              <h3 className="text-[#00FFD2] font-medium text-[40px] leading-[42px] tracking-[-2px] mb-8 lg:text-[52px] lg:leading-[49.7px] lg:tracking-[-3.8px] lg:mb-8">
                {activeSolution.heading}
              </h3>
              {/* Description */}
              <p className="text-white font-medium text-[32px] leading-[36px] tracking-[-2px] lg:text-[46px] lg:leading-[49.7px] lg:tracking-[-3.8px]">
                {activeSolution.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}