import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santuario de Amor",
  description: "Despierta la Energía del Amor Verdadero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-universe bg-cover bg-fixed flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
        <footer className="bg-black/30 text-white py-6 text-center mt-auto">
          <div className="container mx-auto px-6">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Santuario de Amor. Todos los derechos reservados.</p>
            <p className="text-xs text-gray-500 mt-2">Los resultados de nuestras sesiones de guía pueden variar de persona a persona.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
