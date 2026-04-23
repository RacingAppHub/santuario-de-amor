'use client';

import { useState } from 'react';
import { serviciosData } from "@/lib/servicios-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ServiceIcon from "@/app/components/ServiceIcon";
import ConsultaModal from '@/app/components/ConsultaModal';
import WhatsappIcon from '@/app/components/WhatsappIcon'; // <- IMPORTADO

interface ServicioPageClientProps {
  slug: string;
}

export default function ServicioPageClient({ slug }: ServicioPageClientProps) {
  const servicio = serviciosData.find((s) => s.slug === slug);
  const [isModalOpen, setModalOpen] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '19516489947';

  if (!servicio) {
    notFound();
  }

  const otrosServicios = serviciosData.filter((s) => s.slug !== slug);

  return (
    <div className="text-gray-200 min-h-screen pt-20">
      <main className="pb-12">
        <article>
          <div className="relative w-full h-64 md:h-96 shadow-2xl shadow-black/50">
            <Image
              src={servicio.imageUrl}
              alt={`Imagen de ${servicio.title}`}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* --- NUEVO BOTÓN DE ACCIÓN INMEDIATA --- */}
          <div className="text-center -mt-8 relative z-10">
             <button
                onClick={() => setModalOpen(true)}
                className="bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition-transform duration-300 transform hover:scale-105"
                aria-label="Solicitar consulta gratuita por WhatsApp"
              >
                <WhatsappIcon className="h-7 w-7 mr-3 inline-block" />
                Consulta Gratis Ahora
            </button>
          </div>

          <div className="max-w-4xl mx-auto px-6 pt-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-8 [text-shadow:0_2px_5px_rgba(236,72,153,0.7)]">
              {servicio.title}
            </h1>
            <p className="text-xl text-gray-200 mb-12 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] text-left md:text-center">
              {servicio.longDescription}
            </p>
            {/* El botón antiguo de aquí se ha eliminado para simplificar */}
          </div>
        </article>

        <section className="max-w-5xl mx-auto mt-16 pt-10 px-6 border-t border-white/10">
          <h2 className="text-3xl font-bold text-center text-pink-300 mb-10">
            Explora Otros Rituales
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {otrosServicios.map((s) => (
              <Link
                key={s.id}
                href={`/servicios/${s.slug}`}
                className="group flex flex-col items-center text-center p-4 border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10 transform hover:-translate-y-1"
              >
                <ServiceIcon name={s.icon} className="w-10 h-10 mb-3 text-pink-300 transition-colors duration-300 group-hover:text-pink-400" />
                <h3 className="text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">{s.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      {/* --- NUEVO BOTÓN FLOTANTE DE WHATSAPP --- */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 active:scale-95 transition duration-300 z-40 flex items-center"
        aria-label="Solicitar consulta gratuita"
      >
        <WhatsappIcon className="h-8 w-8" />
      </button>

      <ConsultaModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} phoneNumber={phoneNumber} nombreServicio={servicio.title} />
    </div>
  );
}
