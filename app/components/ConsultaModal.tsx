'use client';

import { useState, useEffect } from 'react';

interface ConsultaModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  nombreServicio: string;
}

declare global {
  interface Window {
    gtag: (type: string, eventName: string, eventParams: object) => void;
  }
}

export default function ConsultaModal({ isOpen, onClose, phoneNumber, nombreServicio }: ConsultaModalProps) {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [motivo, setMotivo] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);

  useEffect(() => {
    let ageIsValid = false;
    if (fechaNacimiento) {
      const birthDate = new Date(fechaNacimiento);
      if (!isNaN(birthDate.getTime()) && birthDate < new Date()) {
        const today = new Date();
        const cutoffDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        if (birthDate <= cutoffDate) {
          ageIsValid = true;
        }
      }
    }
    setIsAgeValid(ageIsValid);

    const isComplete = nombre.trim() !== '' && fechaNacimiento.trim() !== '' && motivo.trim() !== '';
    const finalValidity = isComplete && ageIsValid;
    setIsFormValid(finalValidity);

    if (finalValidity) {
      const mensaje = `*Nueva Consulta de Santuario de Amor*\n\n*Solicitud desde:* ${nombreServicio}\n\n*Nombre Completo:* ${nombre}\n*Fecha de Nacimiento:* ${fechaNacimiento}\n*Motivo de Consulta:* ${motivo}`;
      const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(mensaje)}&type=phone_number&app_absent=0`;
      setWhatsappUrl(url);
    } else {
      setWhatsappUrl('');
    }
  }, [nombre, fechaNacimiento, motivo, phoneNumber, nombreServicio]);

  useEffect(() => {
    if (isOpen) {
        setNombre('');
        setFechaNacimiento('');
        setMotivo('');
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isFormValid) {
      e.preventDefault();
      return;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
          'send_to': 'AW-18113276034/h3ruCPOcs6YcEILRir1D'
      });
    }

    setTimeout(() => {
      onClose();
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-gray-900/80 border border-pink-500/50 p-8 rounded-2xl shadow-2xl shadow-pink-500/10 max-w-md w-full m-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-pink-300 mb-6 text-center">Formulario de Consulta</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full bg-gray-800/90 text-white border border-gray-600 rounded-lg px-3 py-2 focus:ring-pink-500 focus:border-pink-500 transition"
            />
          </div>
          <div>
            <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-300 mb-1">Fecha de Nacimiento</label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
              className="w-full bg-gray-800/90 text-white border border-gray-600 rounded-lg px-3 py-2 focus:ring-pink-500 focus:border-pink-500 transition [color-scheme:dark]"
            />
          </div>
          <div>
            <label htmlFor="motivo" className="block text-sm font-medium text-gray-300 mb-1">Motivo de la Consulta</label>
            <textarea
              id="motivo"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              required
              rows={4}
              placeholder="Cuéntame tu caso con el detalle que consideres necesario. Esta información es confidencial y me ayudará a entender mejor tu situación."
              className="w-full bg-gray-800/90 text-white border border-gray-600 rounded-lg px-3 py-2 focus:ring-pink-500 focus:border-pink-500 transition placeholder:text-gray-500"
            ></textarea>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="px-6 py-2 rounded-full font-semibold text-gray-300 hover:bg-gray-700 transition">Cancelar</button>
            <a
              href={whatsappUrl}
              onClick={handleLinkClick}
              aria-label={isFormValid ? "Abrir chat de WhatsApp" : "Complete todos los campos para continuar"}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-semibold text-white transition shadow-lg ${
                isFormValid
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gray-500 opacity-50 cursor-not-allowed'
              }`}
            >
              Consulta Gratis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
