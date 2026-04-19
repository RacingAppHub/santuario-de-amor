
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PoliticaDeReembolso() {
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
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-300 mb-8">Política de Reembolso</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
            <p>En Santuario de Amor, nos dedicamos a proveer servicios espirituales de alta calidad, personalizados para cada individuo. Esta política explica nuestras directrices con respecto a los reembolsos.</p>

            <h2 className="text-2xl font-bold text-pink-200">1. Naturaleza de los Servicios</h2>
            <p>Nuestros servicios son de naturaleza espiritual y energética. Involucran tiempo, energía, y en muchos casos, materiales personalizados que se preparan específicamente para cada cliente. Una vez que el trabajo ha comenzado o ha sido completado, estos recursos no pueden ser recuperados.</p>

            <h2 className="text-2xl font-bold text-pink-200">2. Regla General: No Reembolsos</h2>
            <p>Como norma general, no se ofrecen reembolsos por los servicios prestados. Al realizar el pago, estás contratando nuestro tiempo, experiencia y la ejecución de un ritual. La naturaleza intangible de los servicios espirituales y el hecho de que los resultados no pueden ser garantizados (tal como se indica en nuestros <Link href="/terminos-y-condiciones" className="text-pink-300 hover:text-pink-400">Términos y Condiciones</Link>), significa que el pago es por el servicio en sí, no por un resultado específico.</p>

            <h2 className="text-2xl font-bold text-pink-200">3. Cancelación Antes del Servicio</h2>
            <p>Si deseas cancelar tu servicio, debes hacerlo dentro de las 24 horas posteriores a la realización del pago Y ANTES de que el trabajo espiritual haya comenzado. En estos casos, puedes ser elegible para un reembolso parcial o total, a nuestra discreción, dependiendo de si ya se han incurrido en costos o preparaciones. Para solicitar una cancelación, debes contactarnos inmediatamente.</p>

            <h2 className="text-2xl font-bold text-pink-200">4. Insatisfacción con el Servicio</h2>
            <p>Entendemos que la guía espiritual es un camino muy personal. Si no estás satisfecho con la forma en que se está llevando a cabo tu servicio (la comunicación, la atención, etc.), te instamos a que nos lo comuniques lo antes posible. Estamos comprometidos con tu bienestar y haremos todo lo posible por abordar tus preocupaciones y ajustar nuestro enfoque dentro de los límites del servicio contratado.</p>
            
            <h2 className="text-2xl font-bold text-pink-200">5. Disputas de Pago</h2>
            <p>Iniciar una disputa de pago o "chargeback" a través de tu banco o el procesador de pagos sin habernos contactado primero para resolver el problema se considera una violación de nuestros términos. En tales casos, nos reservamos el derecho de cesar toda comunicación y futuros servicios.</p>

            <h2 className="text-2xl font-bold text-pink-200">Contacto</h2>
            <p>Para cualquier pregunta relacionada con nuestra política de reembolso, por favor contáctanos directamente a través de los medios provistos en este sitio web.</p>

            <p className="pt-4"><strong>Última actualización:</strong> [Fecha Actual]</p>
          </div>
        </article>
      </main>
    </div>
  );
}
