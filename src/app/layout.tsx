// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Khand } from "next/font/google";
import "./globals.css";
import MobileFrame from "@/components/MobileFrame";
import PageTransition from "@/components/PageTransition";

// Khand agora é a fonte principal
const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Inter agora usa uma variável CSS
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-inter', // 👈 Adicione esta linha
});

export const metadata: Metadata = {
  title: "Indicação CPRE",
  description: "App para auxílio na indicação de CPRE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* - khand.className aplica Khand como padrão.
        - inter.variable disponibiliza a variável '--font-inter'.
      */}
      <body className={`${khand.className} ${inter.variable} antialiased`}>
        <MobileFrame>
          <PageTransition>
            {children}
          </PageTransition>
        </MobileFrame>
      </body>
    </html>
  );
}