// src/app/negado/page.tsx
"use client";

import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function NegadoPage() {
  const router = useRouter();

  return (
    <div className="bg-[#4A5568] min-h-full flex flex-col"> {/* Cor de fundo cinza-azulada */}
      <Header title="Protocolo de Risco" />

      {/* Container principal para centralizar o conteúdo */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        
        {/* Container Relativo para o Card e o Ícone */}
        <div className="relative w-full max-w-sm mt-12">
          
          {/* Ícone de Exclamação (posicionado absolutamente) */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#D9D9D9] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl font-bold text-[#2A377D]">!</span>
          </div>

          {/* Card Branco */}
          <div className="bg-white rounded-3xl shadow-xl pt-16 pb-8 px-6 text-center">
            <h2 className="text-xl font-bold text-[#0F172A] mb-4">
              Se o paciente não se enquadra em pelo menos um dos critérios
            </h2>

            {/* Box Cinza Interno */}
            <div className="bg-[#D9D9D9] drop-shadow-3xl rounded-xl px-6 py-12 my-4 shadow-inner">
              <p className="text-2xl font-bold text-[#10296E]">
                Iniciar Diclofenaco <br/> 100mg via retal
              </p>
            </div>

            {/* Tag de Tempo */}
            <span className="relative -top-7 inline-block bg-[#4A5568] text-white text-xs font-semibold px-4 py-1.5 rounded-2xl mb-6">
              10 minutos antes da CPRE
            </span>

            {/* SUGESTÃO: O texto abaixo parece ser um erro de cópia da outra tela. */}
            {/* Talvez devesse ser algo como "Ação Requerida" e em outra cor. */}
            <h1 className="text-2xl font-bold text-[#306703]">
              Aprovado para CPRE
            </h1>
          </div>
        </div>
      </main>

      {/* Rodapé com os botões */}
      <footer className="p-6">
        <div className="w-full max-w-sm mx-auto flex gap-4">
          <button
            onClick={() => router.push('/indicacao')}
            className="w-1/2 bg-white text-[#2A377D] font-semibold py-3 rounded-2xl border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300"
          >
            Cancelar
          </button>
          <button
            onClick={() => router.push('/fatores-risco')}
            className="w-1/2 bg-[#2A377D] text-white font-semibold py-3 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Confirmar
          </button>
        </div>
      </footer>
    </div>
  );
}