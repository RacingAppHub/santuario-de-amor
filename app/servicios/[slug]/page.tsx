import { Metadata } from 'next';
import { serviciosData } from "@/lib/servicios-data";
import ServicioPageClient from '../../components/ServicioPageClient';

interface ServicioPageProps {
  params: {
    slug: string;
  };
}

// FUNCIÓN PARA GENERAR METADATA DINÁMICAMENTE (CORRECTAMENTE EN EL SERVIDOR)
export async function generateMetadata({ params }: ServicioPageProps): Promise<Metadata> {
  const servicio = serviciosData.find((s) => s.slug === params.slug);
  
  if (!servicio) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio que buscas no existe. Explora nuestros otros rituales.",
    };
  }

  // Optimización SEO: Título específico y descripción corta.
  return {
    title: `${servicio.title} | Santuario de Amor`,
    description: servicio.shortDescription,
  };
}

// COMPONENTE DE SERVIDOR
export default function ServicioPage({ params }: ServicioPageProps) {
  // Pasa el slug al componente cliente para que se renderice
  return <ServicioPageClient slug={params.slug} />;
}
