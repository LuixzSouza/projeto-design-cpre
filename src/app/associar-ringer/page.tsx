// src/app/associar-ringer/page.tsx
"use client";

import Header from '@/components/Header';
import DosageInfoBox from '@/components/DosageInfoBox';
import { useRouter } from 'next/navigation';

export default function AssociarRingerPage() {
  const router = useRouter();

  const handleConfirm = () => {
    // Em uma aplicação real, evite usar alert().
    // O ideal seria um modal ou toast de notificação.
    alert("Procedimento configurado com sucesso!");
    router.push('/'); // Volta para a tela inicial ao confirmar
  };

  return (
    <div className="bg-white h-full flex flex-col">
      <Header title="Associar Ringer" />

      <main className="flex-grow flex flex-col p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Associar Ringer com Lactato na identificação do fator de alto risco:
        </h2>

        <div className="space-y-6">
          <DosageInfoBox
            mainDose="20 ml/ kg"
            preposition="até"
            timeValue="1 hora"
            subtext="Após a CRPE"
          />
          <DosageInfoBox
            mainDose="3 ml/ h"
            preposition="durante as próximas"
            timeValue="8 horas"
            subtext="Após a CRPE"
          />
        </div>
      </main>

      <footer className="p-6 bg-white border-t border-gray-200 mt-auto">
        <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#1E3A8A] text-white font-semibold py-3 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Confirmar
          </button>
          <button
            onClick={() => router.push('/fatores-risco')}
            className="w-full bg-white text-[#1E3A8A] font-semibold py-3 rounded-2xl border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300"
          >
            Cancelar
          </button>
        </div>
      </footer>
    </div>
  );
}