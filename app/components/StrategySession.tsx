'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { Clock, Globe, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Custom styles for the calendar to match the design
const calendarStyles = `
  .react-calendar {
    background: transparent;
    border: none;
    width: 100%;
    font-family: inherit;
  }
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 1rem;
  }
  .react-calendar__navigation button {
    color: white;
    min-width: 44px;
    background: none;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.8rem;
    color: white;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }
  .react-calendar__month-view__days__day {
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 0;
  }
  .react-calendar__tile {
    background: none;
    text-align: center;
    line-height: 16px;
    border-radius: 50%;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
  .react-calendar__tile--now {
    background: transparent;
    color: white;
  }
  .react-calendar__tile--active {
    background: white !important;
    color: #0D9488 !important;
    border-radius: 50%;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export default function StrategySession() {
  const [date, setDate] = useState<any>(new Date());

  return (
    <section className=" ">
        <div className='border-t border-white w-[80vw]'></div>
      <style>{calendarStyles}</style>
      <div className="w-full mx-auto relative z-10 flex flex-col justify-center items-center p-16 ">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 w-full max-w-6xl">
           <div className="max-w-2xl">
             <h2 className="font-bold text-[29.1px] leading-[40.01px] tracking-[-1.09px] mb-4">
               Ready To Discover Your <br /> 
               Next <span className="text-[#45FFD0]">Brilliant Move?</span>
             </h2>
             <p className="text-gray-400 font-normal text-[17.28px] leading-[29.1px] tracking-[-0.18px]">
               Your free AI assessment identifies your top opportunity for efficiency and growth.
             </p>
           </div>
           <button className="bg-white text-black w-[220px] h-[54px] rounded-[50px] hover:bg-gray-100 transition-colors flex items-center justify-center">
             <span className="font-normal text-[15.46px] leading-[29.1px] tracking-[-0.55px] text-center">
               Book Your Strategy Session
             </span>
           </button>
        </div>

        {/* Calendar Widget Container */}
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[500px] w-full max-w-6xl">
           
           {/* Left Panel - Profile Info */}
           <div className="w-full lg:w-[28%] bg-[#7FFFD4] rounded-[20px] p-8 text-[#0F172A] flex flex-col relative shadow-[0_0_100px_-20px_rgba(127,255,212,0.8)] border border-white/20">
              <div className="flex flex-col gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden relative">
                  {/* Placeholder for avatar */}
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> 
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Muhammad Aqeel</p>
                  <h3 className="text-xl font-bold leading-tight">20 Minutes Meeting</h3>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>20m</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <Video className="w-5 h-5" />
                  <span>Google Meet</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <Globe className="w-5 h-5" />
                  <span>Asia/Karachi</span>
                </div>
              </div>

              {/* Scroll indicator/decoration */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-white/30 rounded-full hidden lg:block">
                <div className="w-full h-12 bg-white rounded-full mt-8"></div>
              </div>
           </div>

           {/* Middle Panel - Calendar */}
           <div className="w-full lg:w-[44%] bg-gradient-to-b from-[#2DD4BF] to-[#0F766E] rounded-[20px] p-8 text-white flex flex-col">
              <h3 className="text-2xl font-medium mb-6">
                {date.toLocaleString('default', { month: 'short', year: 'numeric' })}
              </h3>
              
              <div className="flex-1">
                <Calendar 
                  onChange={setDate} 
                  value={date}
                  prevLabel={<ChevronLeft className="w-6 h-6" />}
                  nextLabel={<ChevronRight className="w-6 h-6" />}
                  prev2Label={null}
                  next2Label={null}
                  formatShortWeekday={(locale, date) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}
                  showNavigation={false} 
                  view="month"
                  className="w-full h-full"
                />
              </div>
           </div>

           {/* Right Panel - Time Slots */}
           <div className="w-full lg:w-[28%] bg-[#14B8A6] rounded-[20px] p-6 text-[#0F172A] flex flex-col">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-white/90">
                  {date.toLocaleString('default', { weekday: 'short', day: '2-digit' })}
                </h3>
                
                <div className="flex bg-black/20 rounded p-1">
                  <button className="px-2 py-1 bg-black text-white rounded text-xs font-medium">12h</button>
                  <button className="px-2 py-1 text-white/70 rounded text-xs font-medium hover:bg-black/10">24h</button>
                </div>
              </div>

              <div className="space-y-3 h-full overflow-y-auto pr-2 custom-scrollbar">
                 <button className="w-full py-3 px-4 bg-transparent border border-[#0F172A]/30 rounded-lg text-[#0F172A] font-medium hover:bg-[#0F172A] hover:text-white transition-all text-center">
                    12:00 am
                  </button>
                  <button className="w-full py-3 px-4 bg-transparent border border-[#0F172A]/30 rounded-lg text-[#0F172A] font-medium hover:bg-[#0F172A] hover:text-white transition-all text-center">
                    12:30 am
                  </button>
                  <button className="w-full py-3 px-4 bg-transparent border border-[#0F172A]/30 rounded-lg text-[#0F172A] font-medium hover:bg-[#0F172A] hover:text-white transition-all text-center">
                    1:00 am
                  </button>
                  <button className="w-full py-3 px-4 bg-transparent border border-[#0F172A]/30 rounded-lg text-[#0F172A] font-medium hover:bg-[#0F172A] hover:text-white transition-all text-center">
                    1:30 am
                  </button>
                  <button className="w-full py-3 px-4 bg-transparent border border-[#0F172A]/30 rounded-lg text-[#0F172A] font-medium hover:bg-[#0F172A] hover:text-white transition-all text-center">
                    2:00 am
                  </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
