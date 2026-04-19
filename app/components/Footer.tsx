
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-white/10 mt-20 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/politica-de-privacidad" className="text-sm hover:text-pink-400 transition-colors duration-300">
            Política de Privacidad
          </Link>
          <Link href="/terminos-y-condiciones" className="text-sm hover:text-pink-400 transition-colors duration-300">
            Términos y Condiciones
          </Link>
          <Link href="/politica-de-reembolso" className="text-sm hover:text-pink-400 transition-colors duration-300">
            Política de Reembolso
          </Link>
        </div>
        <p className="text-sm">&copy; {currentYear} Santuario de Amor. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">
          Los servicios ofrecidos son para fines de entretenimiento y guía espiritual. Debes ser mayor de 18 años para utilizar este sitio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
