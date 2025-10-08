// src/app/indicacao/page.tsx
"use client"; // Esta página precisa ser um Client Component por causa do useState e useRouter

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import QuestionToggle from '@/components/QuestionToggle';

// Definimos as perguntas em uma lista para facilitar a renderização
const questions = [
  { id: 'sexoFeminino', label: 'Sexo feminino?' },
  { id: 'pacienteJovem', label: 'Paciente jovem?' },
  { id: 'pefPelvico', label: 'PEF pélvico?' },
  { id: 'pancreatiteAguda', label: 'Pancreatite aguda pélvica?' },
  { id: 'dutosNaoDilatados', label: 'Dutos não dilatados?' },
  { id: 'bilirrubinaNormal', label: 'Nível de bilirrubina normal?' },
];

export default function IndicacaoPage() {
  const router = useRouter();
  
  // Estado para armazenar as respostas. O objeto inicial tem todas as respostas como 'true' (SIM)
  const [answers, setAnswers] = useState<Record<string, boolean>>({
    sexoFeminino: true,
    pacienteJovem: true,
    pefPelvico: true,
    pancreatiteAguda: true,
    dutosNaoDilatados: true,
    bilirrubinaNormal: true,
  });

  // Função para atualizar o estado de uma pergunta específica
  const handleAnswerChange = (questionId: string, newValue: boolean) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: newValue,
    }));
  };

  // Lógica de confirmação
  const handleConfirm = () => {
    const allYes = Object.values(answers).every(answer => answer === true);

    if (allYes) {
      // Se todas as respostas forem SIM, navega para APROVADO
      router.push('/aprovado'); 
    } else {
      // Se houver qualquer "NÃO", navega para a tela de NEGADO
      router.push('/negado'); 
    }
  };

  return (
    <div className="bg-white h-full flex flex-col">
      <Header title="Checklist de Indicação" />

      <main className="flex-grow p-6">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
          Um resumo breve sobre CPRE e o motivo pelo qual ela deve ser considerado
        </h2>
        
        <div className="space-y-2">
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
            className="w-full bg-[#10296E] text-white font-semibold py-3 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#475ac7"
          >
            Confirmar
          </button>
          <button
            onClick={() => router.push('/')} // Botão Cancelar volta para a home
            className="w-full bg-white text-[#10296E] font-semibold py-3 rounded-2xl border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </footer>
    </div>
  );
}