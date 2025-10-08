// src/components/MobileFrame.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Wifi, Signal, BatteryFull } from 'lucide-react';

const StatusBar = () => {
  // ... (código da StatusBar continua o mesmo)
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Sao_Paulo' };
      setTime(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    // A StatusBar agora é um flex container por padrão
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
    <div className="min-h-screen w-full bg-white md:bg-gray-800 flex items-center justify-center md:p-4">
      {/* A MUDANÇA É APENAS AQUI:
        Trocamos 'h-screen' por 'h-dvh' para o layout móvel.
      */}
      <div className="w-full h-dvh bg-white flex flex-col md:max-w-sm md:h-[85vh] md:max-h-[900px] md:rounded-[40px] md:shadow-2xl md:overflow-hidden md:ring-4 md:ring-gray-900">
        
        <div className="hidden md:flex">
          <StatusBar />
        </div>

        <div className="w-full flex-grow overflow-y-auto no-scrollbar min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;