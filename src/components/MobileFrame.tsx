// src/components/MobileFrame.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Wifi, Signal, BatteryFull } from 'lucide-react';

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // A correção é aqui: adicionamos o tipo explícito ao objeto options
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Sao_Paulo' };
      setTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="relative w-full h-11 flex justify-between items-center px-6 text-sm font-bold text-gray-900 flex-shrink-0 z-10">
      <span className="w-12 text-left">{time}</span>
      <div className="absolute left-1/2 -translate-x-1/2 h-8 w-32 bg-black rounded-full" />
      <div className="w-12 flex justify-end items-center gap-1.5">
        <Signal size={18} />
        <Wifi size={18} />
        <BatteryFull size={22} />
      </div>
    </div>
  );
};

const MobileFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-sm h-[85vh] max-h-[900px] bg-white rounded-[40px] shadow-2xl overflow-hidden ring-4 ring-gray-900 flex flex-col">
        <StatusBar />
        <div className="w-full flex-grow overflow-y-auto no-scrollbar min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;