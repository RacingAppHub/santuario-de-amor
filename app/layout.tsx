
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header"; // Importamos el nuevo Header

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Santuario de Amor - Guía Espiritual y Sanación Emocional",
  description: "Encuentra la paz interior y el amor verdadero a través de nuestros services espirituales. Amarres, limpiezas energéticas, y más. Consulta gratuita.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black bg-cover bg-center bg-fixed bg-[url('/background.jpg')]`}>
        <Header /> {/* Usamos el nuevo Header aquí */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
