'use client';

import { useState } from 'react';
import { serviciosData } from "@/lib/servicios-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import ServiceIcon from "@/app/components/ServiceIcon";
import ConsultaModal from '@/app/components/ConsultaModal';
import { Metadata } from 'next';

interface ServicioPageProps {
  params: {
    slug: string;
  };
}

// FUNCIÓN PARA GENERAR METADATA DINÁMICAMENTE
export async function generateMetadata({ params }: ServicioPageProps): Promise<Metadata> {
  const servicio = serviciosData.find((s) => s.slug === params.slug);
  
  if (!servicio) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio que buscas no existe. Explora nuestros otros rituales.",
    };
  }

  return {
    title: servicio.title,
    description: servicio.shortDescription,
  };
}

export default function ServicioPage({ params }: ServicioPageProps) {
  const { slug } = params;
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
          {/* IMAGEN FULL-WIDTH */}
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

          {/* CONTENIDO CENTRADO PERO SIN MÁRGENES GLOBALES */}
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-8 [text-shadow:0_2px_5px_rgba(236,72,153,0.7)]">
              {servicio.title}
            </h1>

            <p className="text-xl text-gray-200 mb-12 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] text-left md:text-center">
              {servicio.longDescription}
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-green-500 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Iniciar Consulta Gratuita
            </button>
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
      
      <ConsultaModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} phoneNumber={phoneNumber} nombreServicio={servicio.title} />
    </div>
  );
}
