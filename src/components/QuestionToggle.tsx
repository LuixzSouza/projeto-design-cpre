// src/components/QuestionToggle.tsx
"use client";

type QuestionToggleProps = {
  label: string;
  value: boolean; // true para SIM, false para NÃO
  onChange: (newValue: boolean) => void;
};

const QuestionToggle = ({ label, value, onChange }: QuestionToggleProps) => {
  return (
    <div className="flex justify-between items-center w-full py-2 border-b border-[#5555558a]">
      <span className="text-gray-700 font-medium">{label}</span>

      {/* Container principal do toggle com fundo azul e bordas arredondadas */}
      <div className="relative flex items-center bg-[#10296E] rounded-2xl">
        
        {/* Elemento branco que desliza. `aria-hidden` para acessibilidade. */}
        <span
          className={`
            absolute top-0 left-0 h-full w-1/2 bg-[#F0F3F8] border border-[#10296E] rounded-2xl
            shadow-md transition-transform duration-300 ease-in-out
            transform ${value ? "translate-x-0" : "translate-x-full"}
          `}
          aria-hidden="true"
        />

        {/* Botão SIM */}
        <button
          onClick={() => onChange(true)}
          // `z-10` garante que o texto fique sobre o fundo branco
          className={`relative z-10 px-6 py-2 font-bold transition-colors duration-300 ${
            value ? "text-[#10296E]" : "text-white"
          }`}
        >
          SIM
        </button>

        {/* Botão NÃO */}
        <button
          onClick={() => onChange(false)}
          className={`relative z-10 px-6 py-2 font-bold transition-colors duration-300 ${
            !value ? "text-[#10296E]" : "text-white"
          }`}
        >
          NÃO
        </button>
      </div>
    </div>
  );
};

export default QuestionToggle;