'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'] });

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        bg-black/10 backdrop-blur-xl shadow-lg fixed w-full top-0 z-50 transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-6 py-4 flex justify-center items-center relative h-20">
        <div className="absolute left-6 md:left-8">
            {pathname !== '/' && (
                <button onClick={() => router.back()} className="text-white hover:text-pink-400 transition-colors">
                    <ChevronLeft size={28} />
                </button>
            )}
        </div>

        <div className="text-center">
            <h1 className={`${cinzel.className} text-2xl md:text-3xl font-bold text-white`}>
                <Link href="/" className="[text-shadow:0_0_15px_rgba(236,72,153,0.9),0_0_5px_rgba(236,72,153,0.7)]">Santuario de Amor</Link>
            </h1>
        </div>
        
        <div className="absolute right-6 md:right-8 flex items-center">
            <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-white hover:text-pink-400">Inicio</Link>
                <Link href="/servicios" prefetch={false} className="text-white hover:text-pink-400">Servicios</Link>
                <a href="#donaciones" className="text-white hover:text-pink-400">Donaciones</a>
                <Link href="/acerca-de" className="text-white hover:text-pink-400">Acerca de</Link>
            </nav>
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-black/50 backdrop-blur-md px-6 pb-4">
          <ul className="flex flex-col items-center space-y-4 py-4">
              <li><Link href="/" className="text-white hover:text-pink-400 text-lg" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
              <li><Link href="/servicios" prefetch={false} className="text-white hover:text-pink-400 text-lg" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
              <li><a href="#donaciones" className="text-white hover:text-pink-400 text-lg" onClick={() => setMenuOpen(false)}>Donaciones</a></li>
              <li><Link href="/acerca-de" className="text-white hover:text-pink-400 text-lg" onClick={() => setMenuOpen(false)}>Acerca de</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
