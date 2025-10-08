// src/components/Logo.tsx

import Image from 'next/image';
import React from 'react';


// Componente principal que une o ícone e o texto
const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={"/logo.svg"} width={140} height={317} alt='Logo'/>
      <h1 className="text-4xl font-semibold text-[#2A377D] mt-4">
        Indicação CPRE
      </h1>
    </div>
  );
};

export default Logo;