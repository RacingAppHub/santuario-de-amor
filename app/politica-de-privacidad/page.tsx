
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PoliticaDePrivacidad() {
  return (
    <div className="text-gray-200 min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto border border-white/10 rounded-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-300 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
            <p>En Santuario de Amor, tu privacidad y la confidencialidad de tu información son la base de la confianza que depositas en nosotros. Esta política detalla qué información recopilamos, cómo la usamos y cómo la protegemos.</p>

            <h2 className="text-2xl font-bold text-pink-200">1. Información que Recopilamos</h2>
            <p>Para poder ofrecerte nuestros servicios de guía espiritual, recopilamos la siguiente información:</p>
            <ul>
              <li><strong>Información de Contacto:</strong> Tu nombre y número de teléfono (a través de WhatsApp).</li>
              <li><strong>Información Personal:</strong> Tu fecha de nacimiento, necesaria para la realización de análisis y rituales.</li>
              <li><strong>Información de la Consulta:</strong> El motivo de tu consulta y los detalles que compartas voluntariamente durante nuestras conversaciones. Esta es considerada información altamente sensible y tratada con el máximo respeto.</li>
              <li><strong>Información de Pago:</strong> Las transacciones son procesadas por pasarelas de pago externas (como Paddle). Nosotros no almacenamos, ni tenemos acceso a los detalles completos de tu tarjeta de crédito o débito.</li>
            </ul>

            <h2 className="text-2xl font-bold text-pink-200">2. Cómo Usamos tu Información</h2>
            <p>Tu información se utiliza exclusivamente para los siguientes propósitos:</p>
            <ul>
              <li>Para proveer y personalizar los servicios que has solicitado (rituales, lecturas, análisis, etc.).</li>
              <li>Para comunicarnos contigo en relación a tu consulta y dar seguimiento a tu proceso.</li>
              <li>Para procesar los pagos de los servicios adquiridos a través de nuestros proveedores externos.</li>
              <li>Para cumplir con los requisitos legales y regulatorios.</li>
            </ul>
            <p><strong>Jamás venderemos, compartiremos o alquilaremos tu información personal a terceros con fines de marketing.</strong></p>

            <h2 className="text-2xl font-bold text-pink-200">3. Protección de tu Información</h2>
            <p>Tomamos medidas de seguridad para proteger tu información. La comunicación a través de WhatsApp está cifrada de extremo a extremo. El acceso a la información detallada de tus consultas está restringido y protegido.</p>
            <p>Aunque nos esforzamos por proteger tu información personal, ninguna transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Sin embargo, nos comprometemos a utilizar medios comercialmente aceptables para proteger tus datos.</p>

            <h2 className="text-2xl font-bold text-pink-200">4. Requisito de Edad</h2>
            <p>Nuestros servicios están dirigidos exclusivamente a personas mayores de 18 años. No recopilamos intencionadamente información de menores de edad. Si tienes conocimiento de que un menor nos ha proporcionado información, por favor contáctanos para eliminarla.</p>

            <h2 className="text-2xl font-bold text-pink-200">5. Tus Derechos</h2>
            <p>Tienes derecho a solicitar acceso, rectificar o eliminar la información personal que tenemos sobre ti. Para ejercer estos derechos, por favor contáctanos a través de los medios provistos en el sitio web.</p>

            <h2 className="text-2xl font-bold text-pink-200">6. Cambios a esta Política</h2>
            <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios y aclaraciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Te recomendamos revisar esta página periódicamente.</p>

            <p className="pt-4"><strong>Última actualización:</strong> [Fecha Actual]</p>
          </div>
        </article>
      </main>
    </div>
  );
}
