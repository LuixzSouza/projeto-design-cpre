// src/app/aprovado/page.tsx
"use client";

import Header from '@/components/Header';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'; // Removido porque não era usado

// Array com os dados da lista para manter o código limpo
const procedureInfo = [
  { what: 'Iniciar Diclofenaco 100mg via retal', when: '10 minutos antes' },
  { what: 'Ringer com Lactato 3ml/kg', when: 'Durante a CPRE' },
  { what: 'Ringer com Lactato 20ml/kg', when: 'Até 1 hora após' },
  { what: 'Ringer com Lactato 3ml/kg/h', when: 'Próximas 8 horas após' }
];

export default function AprovadoPage() {
  // const router = useRouter(); // Removido porque não era usado

  return (
    <div className="bg-white h-full flex flex-col">
      <Header title="Indicação Aprovada" />

      {/* Conteúdo Principal */}
      <main className="flex-grow flex flex-col p-6">
        <h2 className="text-xl font-bold text-[#0F172A] mb-8">
          Informações para o pré e pós cirúrgico:
        </h2>

        {/* Cabeçalho da Lista */}
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="font-bold text-[#2A377D]">O que fazer:</h3>
          <h3 className="font-bold text-[#2A377D]">Quando:</h3>
        </div>

        {/* Lista de Procedimentos */}
        <div className="space-y-4 mb-8">
          {procedureInfo.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 border-b border-[#5555556d] p-3 gap-2">
              <span className="text-[#0F172A] text-sm">{item.what}</span>
              <span className="bg-[#2A377D] text-white text-xs font-semibold px-3 py-1.5 rounded-2xl text-center">
                {item.when}
              </span>
            </div>
          ))}
        </div>

        {/* Mensagem de Status (empurrada para baixo) */}
        <div className="mt-auto text-center">
          <h1 className="text-3xl font-bold text-[#306703]">
            Aprovado para CPRE
          </h1>
        </div>
      </main>

      {/* Rodapé com o botão */}
      <footer className="p-6 bg-white">
        <div className="w-full">
          {/* O Link envolve o botão para navegação */}
          {/* Eu removi o <div> interno e legacyBehavior, como na correção anterior */}
          <Link 
            href="/indicacao" 
            >
            <div className="fonte-inter text-center w-full bg-white text-[#2A377D] font-semibold py-3 rounded-2xl border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300" >
              Cancelar
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}