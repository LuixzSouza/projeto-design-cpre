// src/components/PageTransition.tsx
"use client";

import { motion, AnimatePresence, Transition } from 'framer-motion'; // 1. Importar o tipo Transition
import { usePathname } from 'next/navigation';
import React from 'react';

// Variantes para uma animação de FADE simples e rápida
const fadeVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

// Transição mais rápida, ideal para mobile
// 2. Adicionar o tipo explícito aqui
const fadeTransition: Transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.25, // Duração de 250ms, bem mais rápido e responsivo
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative flex-1 w-full h-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          className="absolute w-full h-full"
          variants={fadeVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={fadeTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;