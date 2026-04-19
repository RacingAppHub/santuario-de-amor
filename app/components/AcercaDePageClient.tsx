'use client';

import { HeartHandshake, Sparkles, KeyRound } from 'lucide-react';

export default function AcercaDePageClient() {
  return (
    <div className="min-h-screen text-gray-200 pt-24 md:pt-32"> 
      <main className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">

          {/* Sección Principal */}
          <section className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-pink-300 mb-6 [text-shadow:0_2px_5px_rgba(236,72,153,0.7)]">
              Acerca de Santuario de Amor
            </h1>
            <p className="text-lg md:text-xl text-gray-300 [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
              Santuario de Amor nació como un espacio seguro y confidencial, dedicado a la guía espiritual y la sanación integral. Creemos firmemente que el amor es la frecuencia más alta y poderosa del universo; no solo el amor de pareja, sino el amor propio, la compasión y la paz que surgen cuando tu energía está alineada. Nuestra intención es ayudarte a reconectar con esa fuerza para que atraigas la abundancia, la tranquilidad y las relaciones sanas que mereces.
            </p>
          </section>

          {/* Misión */}
          <section className="bg-gray-800/20 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4 text-center [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">Nuestra Misión</h2>
            <p className="text-md md:text-lg text-gray-300 text-center [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
              Queremos ser un faro de luz en esos momentos donde la confusión, el dolor o el estancamiento no te dejan ver tu propio brillo. A través de rituales personalizados, limpiezas energéticas a distancia y una guía compasiva, nuestro propósito es entregarte las herramientas exactas para que liberes tus bloqueos, recuperes tu poder personal y tomes el control consciente de tu destino.
            </p>
          </section>

          {/* Filosofía */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-8 text-center [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">Nuestra Filosofía de Sanación</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center flex flex-col items-center">
                <HeartHandshake className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="font-bold text-xl mb-2 text-white">Empatía sin juicios</h3>
                <p className="text-gray-400">Este es un refugio seguro. Escuchamos tu historia con el corazón abierto y total confidencialidad.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Sparkles className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="font-bold text-xl mb-2 text-white">Sanación desde la luz</h3>
                <p className="text-gray-400">No trabajamos desde el miedo ni forzamos voluntades; todo nuestro enfoque respeta el libre albedrío y busca tu mayor bien.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <KeyRound className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="font-bold text-xl mb-2 text-white">Empoderamiento interior</h3>
                <p className="text-gray-400">Nuestro mayor éxito no es crear dependencia, sino enseñarte a despertar y utilizar la magia y la fuerza que ya residen en tu interior.</p>
              </div>
            </div>
          </section>

          {/* Guía */}
          <section className="bg-gray-800/20 border border-white/10 rounded-2xl p-8 md:p-10 mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4 text-center [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">Conoce a tu Guía</h2>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">¡Hola! Soy el Guía Altair.</h3>
              <p className="text-md md:text-lg text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
              Detrás de Santuario de Amor hay un ser humano que también ha transitado por momentos de estancamiento, dudas y bloqueos. Precisamente por eso, mi enfoque no es el de un sabio inalcanzable, sino el de un acompañante en tu proceso. He dedicado mi camino espiritual a formarme en herramientas de sanación profunda —como el tarot evolutivo, las limpiezas energéticas y la numerología— para ponerlas a tu servicio. Mi mayor satisfacción es ver cómo las personas que llegan a mí con el corazón pesado, logran irse con una sonrisa, claridad mental y una energía renovada. Estoy aquí para escucharte y ayudarte a volver a volar.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
