'use client';

import { useState } from 'react';
import { Clock, Globe, Video, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StrategySession() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    
    // Add next month's days to fill the grid
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isSelectedDate = (day: number) => {
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() &&
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="">
      <div className='border-t border-white w-[80vw] hidden md:block mx-auto'></div>
      <div className="w-full mx-auto relative z-10 flex flex-col justify-center items-center p-5 md:p-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-16 gap-6 md:gap-8 w-full max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-bold text-[22px] md:text-[29.1px] leading-[30px] md:leading-[40.01px] tracking-[-0.8px] md:tracking-[-1.09px] mb-3 md:mb-4">
              Ready To Discover <br className="hidden md:block" />
              Next <span className="text-[#45FFD0]">Brilliant Move</span>
            </h2>
            <p className="text-gray-400 font-normal text-[14px] md:text-[17.28px] leading-[22px] md:leading-[29.1px] tracking-[-0.14px] md:tracking-[-0.18px]">
              Your free AI assessment identifies your top opportunity for efficiency and growth.
            </p>
          </div>
          <button className="bg-white text-black w-full md:w-[220px] h-[46px] md:h-[54px] rounded-[50px] hover:bg-gray-100 transition-colors flex items-center justify-center shrink-0">
            <span className="font-normal text-[14px] md:text-[15.46px] leading-[22px] md:leading-[29.1px] tracking-[-0.45px] md:tracking-[-0.55px] text-center">
              Book Your Strategy Session
            </span>
          </button>
        </div>

        {/* Calendar Widget Container - Horizontal Scrollable on Mobile */}
        <div className="w-full max-w-6xl">
          <div className="flex gap-3 md:gap-5 h-auto md:h-[500px] overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            
            {/* Left Panel - Profile Info */}
            <div 
              className="min-w-[280px] md:min-w-0 md:w-[28%] rounded-[14px] md:rounded-[20px] p-5 md:p-8 text-[#0F172A] flex flex-col relative shadow-[0_0_100px_-20px_rgba(127,255,212,0.8)] border border-white/20 snap-center"
              style={{
                background: 'linear-gradient(180deg, #45FFD1 0%, #D0FFF7 100%)',
              }}
            >
              <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> 
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-gray-600 mb-1">Muhammad Aqeel</p>
                  <h3 className="text-lg md:text-xl font-bold leading-tight">20 Minutes Meeting</h3>
                </div>
              </div>

              <div className="mt-auto space-y-2.5 md:space-y-4">
                <div className="flex items-center gap-2.5 md:gap-3 text-sm md:text-sm font-medium text-gray-700">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  <span>20m</span>
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 text-sm md:text-sm font-medium text-gray-700">
                  <Video className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Google Meet</span>
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 text-sm md:text-sm font-medium text-gray-700">
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Asia/Karachi</span>
                </div>
              </div>

              <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-24 md:h-32 bg-white/30 rounded-full hidden lg:block">
                <div className="w-full h-8 md:h-12 bg-white rounded-full mt-6 md:mt-8"></div>
              </div>
            </div>

            {/* Middle Panel - Calendar */}
            <div 
              className="min-w-[280px] md:min-w-0 md:w-[44%] rounded-[14px] md:rounded-[20px] p-5 md:p-8 text-white flex flex-col snap-center"
              style={{
                background: 'linear-gradient(180deg, #45FFD1 0%, rgba(0, 224, 224, 0.56) 100%)',
              }}
            >
              <div className="flex justify-between items-center mb-3 md:mb-6">
                <h3 className="text-lg md:text-2xl font-medium">
                  {currentDate.toLocaleString('default', { month: 'short' })} {currentDate.getFullYear()}
                </h3>
                <div className="flex gap-1 md:gap-2">
                  <button onClick={handlePrevMonth} className="hover:bg-white/20 rounded-lg p-0.5 md:p-1 transition-colors">
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button onClick={handleNextMonth} className="hover:bg-white/20 rounded-lg p-0.5 md:p-1 transition-colors">
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 md:mb-4">
                  {weekDays.map(day => (
                    <div key={day} className="text-center text-xs md:text-sm font-medium opacity-90">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                  {days.map((dateInfo, index) => (
                    <button
                      key={index}
                      onClick={() => dateInfo.isCurrentMonth && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dateInfo.day))}
                      className={`
                        aspect-square flex items-center justify-center rounded-full text-sm md:text-base font-semibold
                        transition-colors
                        ${!dateInfo.isCurrentMonth ? 'opacity-40' : ''}
                        ${isSelectedDate(dateInfo.day) && dateInfo.isCurrentMonth ? 'bg-white text-teal-600' : 'hover:bg-white/20'}
                      `}
                    >
                      {dateInfo.day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Time Slots */}
            <div 
              className="min-w-[280px] md:min-w-0 md:w-[28%] rounded-[14px] md:rounded-[20px] p-4 md:p-6 text-[#0F172A] flex flex-col snap-center"
              style={{
                background: 'linear-gradient(180deg, #45FFD1 0%, #00FFD2 100%)',
              }}
            >
              <div className="mb-2.5 md:mb-4 flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-bold text-white/90">
                  {selectedDate.toLocaleString('default', { weekday: 'short' })} {selectedDate.getDate().toString().padStart(2, '0')}
                </h3>
                
                <div className="flex bg-black/20 rounded p-0.5 md:p-1">
                  <button className="px-2 md:px-2 py-1 md:py-1 bg-black text-white rounded text-xs md:text-xs font-medium">12h</button>
                  <button className="px-2 md:px-2 py-1 md:py-1 text-white/70 rounded text-xs md:text-xs font-medium hover:bg-black/10">24h</button>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3 h-full overflow-y-auto pr-1 md:pr-2">
                {['12:00 am', '12:30 am', '1:00 am', '1:30 am', '2:00 am'].map((time) => (
                  <button key={time} className="w-full py-2.5 md:py-3 px-3 md:px-4 bg-transparent border border-[#0F172A]/30 rounded-lg text-[#0F172A] text-sm md:text-base font-medium hover:bg-[#0F172A] hover:text-white transition-all text-center">
                    {time}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}