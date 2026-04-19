
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Santuario de Amor | Guía Espiritual para Sanar y Atraer Abundancia",
    template: "%s | Santuario de Amor",
  },
  description: "Descubre un refugio para tu alma. En Santuario de Amor te guiamos a través de la sanación energética, amarres de amor y tarot para liberar tu poder interior, sanar vínculos y atraer la vida que mereces.",
  keywords: ["sanación espiritual", "amarres de amor", "limpieza energética", "tarot", "guía espiritual", "amor propio", "abundancia", "rituales de amor"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black bg-cover bg-center bg-fixed bg-[url('/background.jpg')]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
