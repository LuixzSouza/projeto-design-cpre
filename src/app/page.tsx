// src/app/page.tsx

import Logo from "@/components/Logo";
import Link from 'next/link'; // 1. Importe o Link

export default function Home() {
  return (
    <main className="flex flex-col min-h-[80vh] items-center justify-center bg-[#F0F4FF] p-8">
      <div className="flex flex-col items-center justify-center flex-grow">
        <Logo />
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4">
        {/* 2. Envolva o botão Iniciar com o Link */}
        <Link href="/indicacao">
          <button
            className="fonte-inter w-full bg-[#2A377D] text-white font-semibold py-3 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Iniciar
          </button>
        </Link>
        
        <button
          className="fonte-inter w-full bg-white text-[#2A377D] font-semibold py-3 rounded-2xl border border-[#B0B8D9] shadow-sm hover:bg-gray-50 transition-all duration-300"
        >
          Entrar com o Google
        </button>
      </div>
    </main>
  );
}