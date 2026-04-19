
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer"; // Importamos el componente Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santuario de Amor - Guía Espiritual y Sanación Emocional",
  description: "Encuentra la paz interior y el amor verdadero a través de nuestros servicios espirituales. Amarres, limpiezas energéticas, y más. Consulta gratuita.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black bg-cover bg-fixed bg-[url('/background.jpg')]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
