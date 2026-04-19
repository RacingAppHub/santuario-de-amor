import ServiciosClient from '../components/ServiciosClient';
import { Metadata } from 'next';

// METADATA PARA SEO
export const metadata: Metadata = {
  title: 'Nuestros Rituales y Servicios',
  description: 'Explora nuestra gama de servicios de sanación espiritual: amarres de amor, limpiezas energéticas, lecturas de tarot, análisis de sueños y más. Encuentra el ritual perfecto para tu camino.',
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
