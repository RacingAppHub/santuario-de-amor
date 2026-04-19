import HomePageClient from './components/HomePageClient';
import { Metadata } from 'next';

// METADATA PARA SEO - AHORA SÍ EN UN COMPONENTE DE SERVIDOR
export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Bienvenido a Santuario de Amor. Sana tu energía, abre las puertas al amor verdadero y atrae la abundancia a tu vida. Comienza tu viaje de sanación hoy con una guía espiritual experta.',
};

export default function HomePage() {
  return <HomePageClient />;
}
