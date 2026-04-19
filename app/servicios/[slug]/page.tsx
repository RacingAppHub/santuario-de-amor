
import { serviciosData } from "@/lib/servicios-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";
import ServiceIcon from "@/app/components/ServiceIcon";

interface ServicioPageProps {
  params: {
    slug: string;
  };
}

export default function ServicioPage({ params }: ServicioPageProps) {
  const { slug } = params;
  const servicio = serviciosData.find((s) => s.slug === slug);

  if (!servicio) {
    notFound();
  }

  // Filtramos los otros servicios para mostrarlos al final
  const otrosServicios = serviciosData.filter((s) => s.slug !== slug);

  return (
    <div className="text-gray-200 min-h-screen">
      {/* Header con fondo transparente */}
      <header className="bg-black/30 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Santuario de Amor</Link>
          <Link href="/servicios" className="flex items-center text-pink-300 hover:text-pink-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Contenido Principal del Servicio - Ocupa todo el ancho */}
        <article className="max-w-4xl mx-auto border border-white/10 rounded-xl p-8 md:p-12">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl shadow-black/50 mb-8">
            <Image
              src={servicio.imageUrl}
              alt={`Imagen de ${servicio.title}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-6">
            {servicio.title}
          </h1>

          <div className="prose prose-lg max-w-none text-gray-300">
            <p>{servicio.longDescription}</p>
          </div>

          <div className="mt-12 text-center">
            <a 
              href={`https://wa.me/19516489947?text=Hola%2C%20quisiera%20una%20consulta%20sobre%20'${servicio.title}'`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white text-lg font-bold px-10 py-3 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Consulta Gratis
            </a>
          </div>
        </article>

        {/* Nueva Sección: Explorar Otros Rituales */}
        <section className="max-w-5xl mx-auto mt-20 pt-10 border-t border-white/10">
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
    </div>
  );
}
