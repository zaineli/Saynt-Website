'use client';

import { useState } from 'react';
import { Clock, Globe, Video, ChevronLeft, ChevronRight } from 'lucide-react';

type StrategySessionProps = {
  title: React.ReactNode;
  description?: string;
  ctaText?: string;
};

export default function StrategySession({
  title,
  description,
  ctaText = 'Book Your Strategy Session',
}: StrategySessionProps) {
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

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

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
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section>
      <div className="border-t border-white w-[80vw] hidden md:block mx-auto"></div>

      <div className="w-full mx-auto relative z-10 flex flex-col justify-center items-center p-5 md:p-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-16 gap-6 md:gap-8 w-full max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="font-bold text-[22px] md:text-[29.1px] leading-[30px] md:leading-[40.01px] tracking-[-0.8px] md:tracking-[-1.09px] mb-3 md:mb-4">
              {title}
            </h2>

            {description && (
              <p className="text-gray-400 font-normal text-[14px] md:text-[17.28px] leading-[22px] md:leading-[29.1px] tracking-[-0.14px] md:tracking-[-0.18px]">
                {description}
              </p>
            )}
          </div>

          <button className="bg-white text-black w-full md:w-[220px] h-[46px] md:h-[54px] rounded-[50px] hover:bg-gray-100 transition-colors flex items-center justify-center shrink-0">
            <span className="font-normal text-[14px] md:text-[15.46px] leading-[22px] md:leading-[29.1px] tracking-[-0.45px] md:tracking-[-0.55px] text-center">
              {ctaText}
            </span>
          </button>
        </div>

        {/* Calendar Widget */}
        <div className="w-full max-w-6xl">
          <div className="flex gap-3 md:gap-5 h-auto md:h-[500px] overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">

            {/* Left Panel */}
            <div
              className="min-w-[280px] md:min-w-0 md:w-[28%] rounded-[14px] md:rounded-[20px] p-5 md:p-8 text-[#0F172A] flex flex-col relative border border-white/20 snap-center"
              style={{ background: 'linear-gradient(180deg, #45FFD1 0%, #D0FFF7 100%)' }}
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
                <div className="flex items-center gap-2.5 md:gap-3 text-sm font-medium text-gray-700">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  <span>20m</span>
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 text-sm font-medium text-gray-700">
                  <Video className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Google Meet</span>
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 text-sm font-medium text-gray-700">
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Asia/Karachi</span>
                </div>
              </div>
            </div>

            {/* Middle Panel */}
            <div
              className="min-w-[280px] md:min-w-0 md:w-[44%] rounded-[14px] md:rounded-[20px] p-5 md:p-8 text-white flex flex-col snap-center"
              style={{ background: 'linear-gradient(180deg, #45FFD1 0%, rgba(0, 224, 224, 0.56) 100%)' }}
            >
              <div className="flex justify-between items-center mb-3 md:mb-6">
                <h3 className="text-lg md:text-2xl font-medium">
                  {currentDate.toLocaleString('default', { month: 'short' })} {currentDate.getFullYear()}
                </h3>
                <div className="flex gap-1 md:gap-2">
                  <button onClick={handlePrevMonth}><ChevronLeft /></button>
                  <button onClick={handleNextMonth}><ChevronRight /></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 md:gap-2 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-xs md:text-sm font-medium opacity-90">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {days.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => d.isCurrentMonth && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), d.day))}
                    className={`aspect-square rounded-full text-sm font-semibold
                      ${!d.isCurrentMonth ? 'opacity-40' : ''}
                      ${isSelectedDate(d.day) && d.isCurrentMonth ? 'bg-white text-teal-600' : 'hover:bg-white/20'}
                    `}
                  >
                    {d.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div
              className="min-w-[280px] md:min-w-0 md:w-[28%] rounded-[14px] md:rounded-[20px] p-4 md:p-6 text-[#0F172A] flex flex-col snap-center"
              style={{ background: 'linear-gradient(180deg, #45FFD1 0%, #00FFD2 100%)' }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white/90 mb-4">
                {selectedDate.toDateString()}
              </h3>
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
