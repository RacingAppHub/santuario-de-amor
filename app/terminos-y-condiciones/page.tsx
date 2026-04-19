
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TerminosYCondiciones() {
  return (
    <div className="text-gray-200 min-h-screen">
      <header className="bg-black/30 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Santuario de Amor</Link>
          <Link href="/" className="flex items-center text-pink-300 hover:text-pink-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto border border-white/10 rounded-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-300 mb-8">Términos y Condiciones del Servicio</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
            <p>Bienvenido a Santuario de Amor. Al utilizar nuestro sitio web y contratar nuestros servicios, aceptas los siguientes términos y condiciones. Por favor, léelos con atención.</p>

            <h2 className="text-2xl font-bold text-pink-200">1. Naturaleza de los Servicios</h2>
            <p>Los servicios ofrecidos en este sitio (amarres de amor, limpiezas energéticas, endulzamientos, etc.) son para fines de entretenimiento y guía espiritual, basados en prácticas esotéricas y tradiciones místicas. Los resultados no están garantizados y pueden variar de persona a persona. Estos servicios no sustituyen el consejo médico, legal, financiero o psicológico profesional.</p>

            <h2 className="text-2xl font-bold text-pink-200">2. Requisito de Edad</h2>
            <p>Para contratar cualquiera de nuestros servicios, debes tener al menos 18 años de edad. Al realizar una consulta o un pago, confirmas que cumples con este requisito.</p>

            <h2 className="text-2xl font-bold text-pink-200">3. Proceso de Consulta y Servicio</h2>
            <p>El proceso comienza con una consulta inicial (gratuita o de pago, según se especifique) para evaluar tu situación. Una vez acordado el servicio, se procederá a la realización del mismo tras la confirmación del pago. La comunicación se mantendrá a través de los canales acordados, principalmente WhatsApp.</p>

            <h2 className="text-2xl font-bold text-pink-200">4. Pagos</h2>
            <p>Todos los servicios deben ser pagados por adelantado. Utilizamos pasarelas de pago externas y seguras. Al realizar un pago, aceptas los términos de servicio de dicho procesador de pagos (por ejemplo, Paddle). Los precios están indicados en la página de servicios y pueden estar sujetos a cambios.</p>

            <h2 className="text-2xl font-bold text-pink-200">5. Política de Reembolso</h2>
            <p>Dada la naturaleza espiritual y energética de los servicios, y el tiempo y los recursos dedicados a cada ritual, no se ofrecen reembolsos una vez que el servicio ha sido realizado. Para más detalles, por favor consulta nuestra <Link href="/politica-de-reembolso" className="text-pink-300 hover:text-pink-400">Política de Reembolso</Link>.</p>

            <h2 className="text-2xl font-bold text-pink-200">6. Confidencialidad y Privacidad</h2>
            <p>Toda la información que compartas con nosotros es estrictamente confidencial. Nos comprometemos a proteger tu privacidad. Para más información, consulta nuestra <Link href="/politica-de-privacidad" className="text-pink-300 hover:text-pink-400">Política de Privacidad</Link>.</p>

            <h2 className="text-2xl font-bold text-pink-200">7. Conducta del Usuario</h2>
            <p>Se espera que los clientes se comuniquen de manera respetuosa. Nos reservamos el derecho de rechazar o terminar un servicio si se produce un comportamiento abusivo, amenazante o inapropiado, sin derecho a reembolso.</p>
            
            <h2 className="text-2xl font-bold text-pink-200">8. Limitación de Responsabilidad</h2>
            <p>Santuario de Amor no será responsable por ninguna decisión que tomes basada en la guía espiritual o los servicios recibidos. Asumes total responsabilidad por tus acciones y sus consecuencias. Los servicios son una herramienta de apoyo, no una solución definitiva a los problemas de la vida.</p>

            <h2 className="text-2xl font-bold text-pink-200">9. Modificaciones a los Términos</h2>
            <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. La versión más reciente siempre estará disponible en esta página.</p>

            <p className="pt-4"><strong>Última actualización:</strong> [Fecha Actual]</p>
          </div>
        </article>
      </main>
    </div>
  );
}
