// src/app/fatores-risco/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import QuestionToggle from '@/components/QuestionToggle';

// Novo conjunto de perguntas para esta tela
const questions = [
  { id: 'canulacaoDificil', label: 'Canulação difícil Injeção de contraste no ducto pancreático principal?' },
  { id: 'fistulotomia', label: 'Fistulotomia suprapapilar ou esfincterotomia transpancreática?' },
  { id: 'disfuncaoOddi', label: 'Disfunção do esfineter de Oddi ?' },
];

export default function FatoresRiscoPage() {
  const router = useRouter();
  
  // Estado para armazenar as novas respostas
  const [answers, setAnswers] = useState<Record<string, boolean>>({
    canulacaoDificil: true,
    fistulotomia: true,
    disfuncaoOddi: true,
  });

  const handleAnswerChange = (questionId: string, newValue: boolean) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: newValue,
    }));
  };

  // Lógica de confirmação
  const handleConfirm = () => {
    // Verifica se TODAS as respostas são 'true' (SIM)
    const allYes = Object.values(answers).every(answer => answer === true);

    if (allYes) {
      // Se TODAS forem SIM, vai para a próxima tela
      router.push('/associar-ringer');
    } else {
      // Se tiver PELO MENOS UM NÃO, vai para a tela de manter diclofenaco
      router.push('/manter-diclofenaco');
    }
  };

  return (
    <div className="bg-white h-full flex flex-col">
      <Header title="Fatores de Risco" />

      <main className="flex-grow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Perguntas sobre a cirurgia
        </h2>
        
        <div className="space-y-4">
          {questions.map((question) => (
            <QuestionToggle
              key={question.id}
              label={question.label}
              value={answers[question.id]}
              onChange={(newValue) => handleAnswerChange(question.id, newValue)}
            />
          ))}
        </div>
      </main>

      <footer className="p-6 bg-white border-t border-gray-200">
        <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#1E3A8A] text-white font-semibold py-3 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
          >
            Confirmar
          </button>
          <button
            onClick={() => router.push('/negado')} // Botão Cancelar volta para a home
            className="w-full bg-white text-[#1E3A8A] font-semibold py-3 rounded-2xl border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </footer>
    </div>
  );
}