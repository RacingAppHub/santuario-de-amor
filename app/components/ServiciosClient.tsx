'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { serviciosData } from '@/lib/servicios-data';
import ServiceIcon from './ServiceIcon';
import { ArrowRight } from 'lucide-react';

const ConsultaModal = dynamic(() => import('../components/ConsultaModal'), { ssr: false });
const WhatsappIcon = dynamic(() => import('../components/WhatsappIcon'), { ssr: false });

export default function ServiciosClient() {
  const [isModalOpen, setModalOpen] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '19516489947';

  return (
    <div className="text-gray-200 pt-20">
      <main className="container mx-auto px-6 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
            Servicios 100% Digitales
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] mb-8">
            Cada servicio es una experiencia digital diseñada para guiarte. Explora las opciones y contáctame para una consulta inicial sin compromiso.
          </p>
          
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition duration-300 z-40 flex items-center justify-center mx-auto"
            aria-label="Solicitar consulta gratuita por WhatsApp"
          >
            <WhatsappIcon className="h-7 w-7 mr-3" />
            Consulta Gratis Ahora
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosData.map((service) => (
            <Link
              href={`/servicios/${service.slug}`}
              key={service.id}
              className="block border border-white/20 p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2"
            >
              <ServiceIcon name={service.icon} className="w-12 h-12 mb-5 text-pink-300" />
              <h2 className="text-2xl font-bold text-pink-300 mb-4 [text-shadow:0_2px_3px_rgba(0,0,0,0.7)]">{service.title}</h2>
              <p className="text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] flex-grow">{service.shortDescription}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-6 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">¿Listo para Iniciar tu Transformación?</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-pink-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-pink-600 active:scale-95 transition duration-300 z-40 flex items-center justify-center mx-auto"
            aria-label="Solicitar consulta gratuita por WhatsApp"
          >
            Consulta tu Caso Sin Compromiso
            <ArrowRight className="h-6 w-6 ml-3" />
          </button>
        </div>

      </main>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition duration-300 z-40 flex items-center"
        aria-label="Solicitar consulta gratuita"
      >
        <WhatsappIcon className="h-8 w-8" />
      </button>

      {isModalOpen && <ConsultaModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} phoneNumber={phoneNumber} nombreServicio="Página de Servicios" />}
    </div>
  );
}
