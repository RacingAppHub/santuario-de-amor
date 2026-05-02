"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AcercaDePageClient = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Mi Misión es Tu Bienestar
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Más que un servicio, te ofrezco un espacio sagrado para la sanación y el reencuentro con tu propia luz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
          >
            <Image
              src="/images/about/bryan-santuario.jpg" // Asegúrate que esta imagen exista
              alt="Bryan, guía espiritual de Santuario de Amor"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-xl">Bryan</p>
              <p className="text-sm text-gray-300">Fundador de Santuario de Amor</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert lg:prose-xl max-w-none"
          >
            <p className="text-gray-300">
            Detrás de Santuario de Amor hay un ser humano que también ha transitado por momentos de estancamiento, dudas y bloqueos. Precisamente por eso, mi enfoque no es el de un sabio inalcanzable, sino el de un guía estratégico en tu proceso. He dedicado mi camino espiritual a formarme en herramientas de sanación profunda —como el tarot evolutivo, las limpiezas energéticas y la numerología— para ponerlas a tu servicio. Mi mayor satisfacción es ver cómo las personas que llegan a mí con el corazón pesado, logran irse con una sonrisa, claridad mental y una energía renovada. Estoy aquí para escucharte y ayudarte a volver a volar.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AcercaDePageClient;
