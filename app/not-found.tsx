'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-200 px-6">
        <header className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-lg shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-pink-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Santuario de Amor</h1>
            </div>
        </header>

        <main className="flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-extrabold text-pink-300 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
                404
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-4 mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
                Página No Encontrada
            </p>
            <p className="max-w-md mx-auto text-lg text-gray-400 mb-10 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
                Lo sentimos, la página que buscas no existe o ha sido movida. Pero no te preocupes, el camino hacia la sanación siempre está abierto.
            </p>
            <Link href="/" className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300 shadow-lg flex items-center">
                &larr; Volver al Inicio
            </Link>
        </main>
    </div>
  );
}
