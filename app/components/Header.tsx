'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black/30 backdrop-blur-lg shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-pink-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    <Link href="/">Santuario de Amor</Link>
                </h1>
                <nav className="hidden md:flex space-x-6 text-white">
                    <Link href="/" className="hover:text-pink-400">Inicio</Link>
                    <Link href="/servicios" className="hover:text-pink-400">Servicios</Link>
                    <a href="/#donaciones" className="hover:text-pink-400">Donaciones</a>
                    <Link href="/acerca-de" className="hover:text-pink-400">Acerca de</Link>
                </nav>
                <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-black/50 backdrop-blur-md px-6 pb-4">
                    <ul className="flex flex-col items-center space-y-4">
                        <li><Link href="/" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                        <li><Link href="/servicios" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
                        <li><a href="/#donaciones" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Donaciones</a></li>
                        <li><Link href="/acerca-de" className="hover:text-pink-400" onClick={() => setMenuOpen(false)}>Acerca de</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
