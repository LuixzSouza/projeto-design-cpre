// src/components/Header.tsx
import { UserCheck } from 'lucide-react'; // Importa o ícone

// O componente agora espera receber um "title" para exibir
type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-[#1E3A8A] text-white p-4 shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Lado Esquerdo: Exibe o título dinâmico da página atual */}
        <h1 className="text-xl font-bold">{title}</h1>
        
        {/* Lado Direito: Funciona como a marca fixa da aplicação */}
        <div className="flex items-center gap-2">
          <UserCheck size={24} />
          <span className="text-sm font-semibold">Indicação<br/>CPRE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;