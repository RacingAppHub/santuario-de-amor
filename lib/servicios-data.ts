
import { LucideIcon } from 'lucide-react';

export interface Servicio {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  icon: string; // Nombre del icono de Lucide
}

export const serviciosData: Servicio[] = [
  {
    id: 1,
    title: "Lectura de Tarot Evolutivo",
    slug: "lectura-de-tarot-evolutivo",
    shortDescription: "Una guía 100% digital para explorar tus dudas y descubrir los caminos que se abren ante ti.",
    longDescription: "Nuestra Lectura de Tarot Evolutivo te ofrece una ventana a las energías que moldean tu vida. A través de una tirada de cartas personalizada, interpretaré los arcanos para darte claridad sobre tus relaciones, carrera y camino espiritual. Recibirás un informe detallado en formato PDF, con la foto de tu tirada y una explicación profunda de cada carta y su significado en tu contexto actual.",
    imageUrl: "https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "LayoutGrid",
  },
  {
    id: 2,
    title: "Análisis de Sueños",
    slug: "analisis-de-suenos",
    shortDescription: "Descifra los mensajes de tu subconsciente a través de un informe detallado en PDF.",
    longDescription: "Los sueños son mensajes codificados de tu subconsciente. Con nuestro servicio de Análisis de Sueños, puedes desentrañar estos misterios. Simplemente describe tu sueño con el mayor detalle posible y te enviaré un análisis completo en PDF. Este informe explorará los símbolos, arquetipos y emociones presentes en tu sueño, conectándolos con tu situación de vida actual.",
    imageUrl: "https://images.pexels.com/photos/733162/pexels-photo-733162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "Cloudy",
  },
  {
    id: 3,
    title: "Limpieza Energética Remota",
    slug: "limpieza-energetica-remota",
    shortDescription: "Libera energías densas y bloqueos para promover claridad, ligereza y bienestar.",
    longDescription: "La negatividad y el estrés pueden acumularse en tu campo energético. Nuestro servicio de Limpieza Energética a Distancia es un ritual poderoso realizado para purificar tu aura. Me conectaré con tu energía para disolver bloqueos y restaurar tu vibración natural. Después, recibirás una guía de meditación en PDF para ayudarte a mantener tu nueva claridad.",
    imageUrl: "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "Sun",
  },
  {
    id: 4,
    title: "Rituales de Abundancia",
    slug: "rituales-de-abundancia",
    shortDescription: "Alinea tu energía con la prosperidad y abre tu mentalidad al éxito con guías digitales.",
    longDescription: "La abundancia es tu estado natural. Nuestros Rituales de Abundancia están diseñados para realinear tu energía con la frecuencia de la prosperidad. Recibirás una guía digital personalizada con rituales y afirmaciones para eliminar creencias limitantes y abrir los canales para que la riqueza fluya hacia ti.",
    imageUrl: "https://images.pexels.com/photos/1435496/pexels-photo-1435496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "CircleDollarSign",
  },
  {
    id: 5,
    title: "Armonización de Relaciones",
    slug: "armonizacion-de-relaciones",
    shortDescription: "Rituales a distancia para sanar y armonizar la energía entre dos personas.",
    longDescription: "Las relaciones son intercambios energéticos. Una Armonización de Relaciones puede restaurar el equilibrio. Este servicio a distancia se enfoca en limpiar la energía discordante y tejer un lazo de entendimiento, compasión y amor. Ideal para parejas, familiares o amigos que deseen sanar su vínculo.",
    imageUrl: "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "Heart",
  },
  {
    id: 6,
    title: "Activación de Anclas Mentales",
    slug: "activacion-de-anclas-mentales",
    shortDescription: "Convierte un concepto o recuerdo en una fuente de poder espiritual que reside en tu interior.",
    longDescription: "Un 'ancla mental' es un interruptor psicológico que puedes activar para acceder a estados de calma o poder. En esta guía PDF, te enseñaré cómo crear y anclar un estado emocional positivo a un gesto, palabra o imagen, dándote control sobre tu mundo interior.",
    imageUrl: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "Anchor",
  },
  {
    id: 7,
    title: "Ritual de Amor Propio",
    slug: "ritual-de-amor-propio-guia-digital",
    shortDescription: "Fortalece tu autoestima y poder personal con una guía paso a paso para tu propio ritual.",
    longDescription: "El amor más importante es el que sientes por ti mismo. Este Ritual de Amor Propio es una guía PDF que te enseñará a crear un espacio sagrado y realizar un ritual para fortalecer tu autoestima. La guía incluye instrucciones, lista de materiales y afirmaciones para reconectar con tu valor interior.",
    imageUrl: "https://images.pexels.com/photos/3998389/pexels-photo-3998389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "Gem",
  },
  {
    id: 8,
    title: "Oráculo de Vidas Pasadas",
    slug: "oraculo-de-vidas-pasadas-reporte-pdf",
    shortDescription: "Explora las influencias de tus vidas anteriores en tu presente con un reporte personalizado.",
    longDescription: "Las lecciones de tus vidas pasadas resuenan en tu presente. Con nuestro Oráculo, realizaré una consulta a distancia para identificar las influencias kármicas relevantes. Recibirás un reporte en PDF que revela los arquetipos y lecciones de una vida anterior significativa y cómo puedes usar ese conocimiento para sanar.",
    imageUrl: "https://images.pexels.com/photos/7645831/pexels-photo-7645831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "BookOpenText",
  },
    {
    id: 9,
    title: "Guía de Numerología Personal",
    slug: "guia-de-numerologia-personal",
    shortDescription: "Descubre los números que definen tu personalidad y destino con un análisis completo en PDF.",
    longDescription: "Tu nombre y fecha de nacimiento contienen un código numérico que revela las claves de tu personalidad y propósito. Nuestra Guía de Numerología Personal es un análisis exhaustivo en PDF. Descubrirás tu Número de Camino de Vida, Destino y Alma, y aprenderás cómo estas vibraciones influyen en tu vida.",
    imageUrl: "https://images.pexels.com/photos/5499913/pexels-photo-5499913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "Calculator",
  }
];
