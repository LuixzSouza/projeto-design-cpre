// src/app/manter-diclofenaco/page.tsx
"use client";

import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function ManterDiclofenacoPage() {
  const router = useRouter();

  return (
    <div className="bg-[#4A5568] min-h-full flex flex-col">
      <Header title="Atenção" />

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        
        <div className="relative w-full max-w-sm mt-12">
          
          {/* Ícone de Exclamação */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-200 w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-6xl font-bold text-[#1E3A8A]">!</span>
          </div>

          {/* Card Branco Simplificado */}
          <div className="bg-white rounded-3xl shadow-xl pt-20 pb-12 px-6 text-center">
            
            {/* Box Cinza Interno com a nova mensagem */}
            <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
              <p className="text-2xl font-bold text-[#1E3A8A]">
                Manter somente Diclofenaco 100mg via retal
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Rodapé com os botões */}
      <footer className="p-6">
        <div className="w-full max-w-sm mx-auto flex gap-4">
          <button
            onClick={() => router.push('/fatores-risco')}
            className="w-1/2 bg-white text-[#1E3A8A] font-semibold py-3 rounded-full border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300"
          >
            Cancelar
          </button>
          <button
            onClick={() => alert("Fluxo finalizado ou próxima ação.")}
            className="w-1/2 bg-[#1E3A8A] text-white font-semibold py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Confirmar
          </button>
        </div>
      </footer>
    </div>
  );
}