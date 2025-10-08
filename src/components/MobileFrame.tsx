// src/components/MobileFrame.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Wifi, Signal, BatteryFull } from 'lucide-react';

const StatusBar = () => {
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
    // MUDANÇA 1: O fundo cinza e o padding só aparecem em telas médias (md) ou maiores
    <div className="min-h-screen w-full bg-white md:bg-gray-800 flex items-center justify-center md:p-4">
      
      {/* MUDANÇA 2: 
        - No celular (padrão): Ocupa 100% da tela (h-screen), sem estilos de moldura.
        - No desktop (md:): Volta a ter altura e largura limitadas, bordas arredondadas, sombra, etc.
      */}
      <div className="w-full h-screen bg-white flex flex-col md:max-w-sm md:h-[85vh] md:max-h-[900px] md:rounded-[40px] md:shadow-2xl md:overflow-hidden md:ring-4 md:ring-gray-900">
        
        {/* MUDANÇA 3: A StatusBar fica escondida em telas pequenas e só aparece a partir de 'md' */}
        <div className="hidden md:flex">
          <StatusBar />
        </div>

        {/* Esta parte não precisa de alteração, funciona bem nos dois casos */}
        <div className="w-full flex-grow overflow-y-auto no-scrollbar min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;