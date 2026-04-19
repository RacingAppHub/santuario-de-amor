import AcercaDePageClient from '../components/AcercaDePageClient';
import { Metadata } from 'next';

// METADATA PARA SEO
export const metadata: Metadata = {
  title: 'Acerca de Nosotros',
  description: 'Conoce nuestra misión y filosofía. Santuario de Amor es tu refugio seguro para la sanación espiritual, guiado con empatía, confidencialidad y respeto a tu libre albedrío.',
};

export default function AcercaDePage() {
  return <AcercaDePageClient />;
}
