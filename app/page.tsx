'use client';

import { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ConsultaModal from './components/ConsultaModal';
import WhatsappIcon from './components/WhatsappIcon';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '19516489947';

  return (
    <div className="text-gray-200">
      <header className="bg-black/30 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Santuario de Amor</h1>
          <nav className="hidden md:flex space-x-6 text-white">
            <Link href="#inicio" className="hover:text-pink-400">Inicio</Link>
            <Link href="/servicios" prefetch={false} className="hover:text-pink-400">Servicios</Link>
            <a href="#donaciones" className="hover:text-pink-400">Donaciones</a>
            <Link href="/acerca-de" className="hover:text-pink-400">Acerca de</Link>
          </nav>
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-black/50 backdrop-blur-md px-6 pb-4">
            <ul className="flex flex-col items-center space-y-4">
                <li><Link href="#inicio" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                <li><Link href="/servicios" prefetch={false} className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
                <li><a href="#donaciones" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Donaciones</a></li>
                <li><Link href="/acerca-de" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Acerca de</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main id="inicio" className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">Despierta la Energía del Amor Verdadero</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">
          Soy tu guía espiritual en el viaje hacia la sanación emocional y la conexión. Juntos, eliminaremos bloqueos y atraeremos la paz y el amor que mereces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/servicios" prefetch={false} className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300 shadow-lg">Explorar Servicios</Link>
          <button onClick={() => setModalOpen(true)} className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center shadow-lg">
            <WhatsappIcon className="w-5 h-5 mr-2" />
            Consulta Gratis
          </button>
        </div>
      </main>

      <section className="py-20 px-6">
        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">Testimonios</h3>
            <p className="text-xl text-pink-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] mt-1">Voces de Agradecimiento</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="border border-white/20 p-6 rounded-lg">
            <p className="text-gray-300 mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">"Estaba perdida en mi vida amorosa. Con su guía, encontré la claridad y la fuerza para sanar. ¡Ahora tengo una relación maravillosa!"</p>
            <div className="flex justify-center text-yellow-400"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="font-bold mt-2 text-white">- Sofía L.</p>
          </div>
          <div className="border border-white/20 p-6 rounded-lg">
            <p className="text-gray-300 mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">"Increíble. La limpieza energética que realizó cambió todo para mí. Me siento más ligero, positivo y lleno de esperanza."</p>
            <div className="flex justify-center text-yellow-400"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="font-bold mt-2 text-white">- Carlos G.</p>
          </div>
          <div className="border border-white/20 p-6 rounded-lg">
            <p className="text-gray-300 mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">"El amarre de amor funcionó más allá de mis expectativas. Mi pareja y yo estamos más conectados que nunca. Eternamente agradecida."</p>
            <div className="flex justify-center text-yellow-400"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="font-bold mt-2 text-white">- Valentina M.</p>
          </div>
        </div>
      </section>
      
      <section id="servicios-preview" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">Tu Viaje Hacia la Plenitud Comienza Aquí</h3>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center bg-pink-500 text-white w-16 h-16 rounded-full text-2xl font-bold mb-4 shadow-lg">1</div>
            <h4 className="text-2xl font-bold mb-2 text-white [text-shadow:0_2px_3px_rgba(0,0,0,0.7)]">Consulta Inicial</h4>
            <p className="text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">Contáctame por WhatsApp para una consulta gratuita y confidencial. Analizaremos tu situación y tus deseos más profundos.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center bg-pink-500 text-white w-16 h-16 rounded-full text-2xl font-bold mb-4 shadow-lg">2</div>
            <h4 className="text-2xl font-bold mb-2 text-white [text-shadow:0_2px_3px_rgba(0,0,0,0.7)]">Ritual Personalizado</h4>
            <p className="text-gray-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.7)]">Diseñaré un ritual específico para ti, utilizando las herramientas espirituales más poderosas para alinear las energías a tu favor.</p>
          </div>
        </div>
      </section>

      <ConsultaModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} phoneNumber={phoneNumber} nombreServicio="Página de Inicio" />
    </div>
  );
}
