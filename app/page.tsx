'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import ConsultaModal from './components/ConsultaModal';
import WhatsappIcon from './components/WhatsappIcon';
import { Metadata } from 'next';

// METADATA PARA SEO
export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Bienvenido a Santuario de Amor. Sana tu energía, abre las puertas al amor verdadero y atrae la abundancia a tu vida. Comienza tu viaje de sanación hoy con una guía espiritual experta.',
};


const frases = [
  {
    titulo: "Sana tu Energía y Abre las Puertas al Amor",
    texto: "Aquí creemos que la confusión, los bloqueos o la falta de prosperidad nacen cuando nuestro corazón y nuestra mente acumulan cargas que no les pertenecen. Sanar desde el amor es la llave maestra para entender tu destino, descifrar tus sueños y armonizar todos tus vínculos. Estoy aquí para acompañarte a liberar esas energías densas para que vuelvas a brillar. Ya sea sanando una relación, activando tu amor propio o abriendo tus caminos hacia la abundancia, juntos devolveremos la armonía a tu vida para que atraigas todo lo que mereces."
  },
  {
    titulo: "El Viaje Hacia el Amor Verdadero Empieza en ti",
    texto: "El amor es la fuerza más poderosa del universo, pero a veces la envidia, el estrés o las energías estancadas nos impiden conectar con él. Si buscas armonizar un vínculo importante, atraer relaciones sanas o simplemente volver a enamorarte de ti mismo/a, has llegado a tu refugio. Permítete encontrar las respuestas que te da el tarot, descubrir los mensajes de tu alma o limpiar tu campo energético. A través de este viaje de sanación profunda, lograremos que el amor propio y la paz espiritual se conviertan en tu mayor imán para la felicidad."
  },
  {
    titulo: "Vibra en la Frecuencia del Amor y la Abundancia",
    texto: "Todo en el universo es energía, y cuando tu corazón está bloqueado por miedos o heridas del pasado, la prosperidad y la paz no encuentran cómo entrar. Yo te ayudo a alinear tu frecuencia para que dejes de luchar contra la corriente y empieces a fluir. Explora tus vidas pasadas, activa anclas de poder en tu mente o realiza un ritual profundo de autocuidado. Al limpiar tus canales energéticos y abrazar el amor en todas sus formas, verás cómo tus caminos se abren mágicamente hacia la vida que siempre has soñado."
  }
];

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [fraseActiva, setFraseActiva] = useState(frases[0]);
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '19516489947';

  useEffect(() => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFraseActiva(fraseAleatoria);
  }, []);

  return (
    <div className="text-gray-200 pt-20">
      <main id="inicio" className="text-center pb-20 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 [text-shadow:0_0_15px_rgba(236,72,153,0.8),0_0_5px_rgba(236,72,153,0.5)]">{fraseActiva.titulo}</h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-200 mb-8 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
          {fraseActiva.texto}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/servicios" prefetch={false} className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300 shadow-lg">💖 Iniciar mi Sanación</Link>
          <button onClick={() => setModalOpen(true)} className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center shadow-lg">
            <WhatsappIcon className="w-5 h-5 mr-2" />
            Cuéntame tu historia
          </button>
        </div>
      </main>

      <section className="py-20 px-6">
        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white [text-shadow:0_0_10px_rgba(236,72,153,0.6)]">Testimonios</h3>
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
        <h3 className="text-3xl font-bold text-center mb-12 text-white [text-shadow:0_0_10px_rgba(236,72,153,0.6)]">Tu Viaje Hacia la Plenitud Comienza Aquí</h3>
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
