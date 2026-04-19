'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { serviciosData } from '@/lib/servicios-data';

const ConsultaModal = dynamic(() => import('../components/ConsultaModal'), { ssr: false });
const WhatsappIcon = dynamic(() => import('../components/WhatsappIcon'), { ssr: false });

export default function ServiciosClient() {
  const [isModalOpen, setModalOpen] = useState(false);
  const phoneNumber = "19516489947";

  return (
    <div className="text-gray-200">
      <header className="bg-black/30 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Nuestros Servicios</h1>
          <Link href="/" className="bg-pink-500 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full font-bold hover:bg-pink-600 transition duration-300 shadow-lg">
            &larr;
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
            Servicios 100% Digitales
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
            Cada servicio es una experiencia digital diseñada para guiarte. Haz clic en uno para explorar en profundidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosData.map((service) => (
            <Link
              href={`/servicios/${service.slug}`}
              key={service.id}
              className="block border border-white/20 p-8 rounded-xl flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-bold text-pink-300 mb-4 [text-shadow:0_2px_3px_rgba(0,0,0,0.7)]">{service.title}</h2>
              <p className="text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] flex-grow">{service.shortDescription}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20 bg-black/20 border border-white/10 rounded-xl p-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">Inicia tu Viaje Digital</h2>
          <p className="text-gray-300 mb-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
            El primer paso es una consulta gratuita y sin compromiso. Permíteme entender tu situación para poder guiarte de la mejor manera.
          </p>
          <p className="text-gray-300 font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
            Utiliza el botón flotante para solicitar tu consulta gratuita ahora.
          </p>
        </div>
      </main>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition duration-300 z-40 flex items-center"
        aria-label="Solicitar consulta gratuita"
      >
        <WhatsappIcon className="h-8 w-8" />
      </button>

      {isModalOpen && <ConsultaModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} phoneNumber={phoneNumber} />}
    </div>
  );
}
