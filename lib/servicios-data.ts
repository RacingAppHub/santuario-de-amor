
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
    shortDescription: "¿Sientes que estás en una encrucijada y buscas mayor claridad?",
    longDescription: "El Tarot Evolutivo es una herramienta de introspección que actúa como un espejo del alma, ayudándote a comprender tu presente. A través de una guía 100% digital, exploramos juntos posibles bloqueos y arrojamos luz sobre las oportunidades que el universo podría estar presentándote. Es un espacio seguro para explorar tus dudas y buscar respuestas que resuenen con tu propósito interior.\n\n👉 ¿Sientes el llamado? Haz clic para enviarme un WhatsApp y cuéntame qué aspectos de tu vida te gustaría explorar.",
    imageUrl: "/images/servicios/lectura-de-tarot-evolutivo.jpg",
    icon: "LayoutGrid",
  },
  {
    id: 2,
    title: "Análisis de Sueños",
    slug: "analisis-de-suenos",
    shortDescription: "Tu subconsciente puede estar intentando enviarte mensajes mientras duermes.",
    longDescription: "Los sueños son a menudo mensajes encriptados de nuestra propia psique. Con este servicio, te ofrezco mi ayuda para descifrar esas imágenes y símbolos, entregándote un informe detallado en PDF. El objetivo es que puedas descubrir qué emociones podrías necesitar atender, qué advertencias podría estar dándote tu intuición y qué deseos ocultos podrían estar buscando tu atención.\n\n👉 No ignores las señales de tu mente. Escríbeme por WhatsApp, cuéntame tu sueño y exploremos juntos su posible significado.",
    imageUrl: "/images/servicios/analisis-de-suenos.jpg",
    icon: "Cloudy",
  },
  {
    id: 3,
    title: "Limpieza Energética Remota",
    slug: "limpieza-energetica-remota",
    shortDescription: "¿Experimentas un cansancio persistente, estancamiento o una sensación de pesadez?",
    longDescription: "Nuestro campo energético puede acumular \"residuos\" del entorno como el estrés o las tensiones diarias. Esta limpieza energética a distancia busca ayudar a disipar esas energías densas y armonizar tu aura. El objetivo es que puedas sentir una mayor claridad mental, ligereza y una renovada sensación de paz para avanzar sin cargas invisibles.\n\n👉 Todos merecemos sentirnos en paz. Haz clic aquí, envíame un mensaje por WhatsApp y agendemos tu sesión de limpieza.",
    imageUrl: "/images/servicios/limpieza-energetica-remota.jpg",
    icon: "Sun",
  },
  {
    id: 4,
    title: "Rituales Guiados de Abundancia",
    slug: "rituales-de-abundancia",
    shortDescription: "¿Sientes que te esfuerzas pero la prosperidad parece no llegar a tu vida?",
    longDescription: "La abundancia es también una frecuencia energética. Si tu mentalidad está enfocada en la carencia, podrías estar creando barreras para la prosperidad. Con estas guías digitales de Rituales de Abundancia, te enseñaré paso a paso cómo trabajar para alinear tu vibración con una mentalidad de prosperidad. Aprenderás a abrir tus caminos, a soltar la mentalidad de escasez y a fomentar una energía que atraiga buenas oportunidades.\n\n👉 El universo ofrece infinitas posibilidades. Escríbeme por WhatsApp y demos el primer paso para trabajar en tu energía de abundancia.",
    imageUrl: "/images/servicios/rituales-de-abundancia.jpg",
    icon: "CircleDollarSign",
  },
  {
    id: 5,
    title: "Armonización Energética de Relaciones",
    slug: "armonizacion-de-relaciones",
    shortDescription: "Cuando una conexión importante se debilita, nuestro equilibrio emocional puede verse afectado.",
    longDescription: "Ya sea por malentendidos, distancia o conflictos, a veces las palabras no son suficientes para restaurar un vínculo. La armonización de relaciones trabaja a nivel energético y a distancia. Su propósito no es forzar la voluntad de nadie, ya que el libre albedrío es fundamental, sino ayudar a limpiar la energía discordante, suavizar resentimientos y fomentar un puente de entendimiento para que la comunicación pueda fluir desde un lugar de mayor paz y amor.\n\n👉 ¿Listo/a para dar el primer paso? Haz clic en el botón de WhatsApp y solicita información sin compromiso. Descubre cómo podemos ayudarte.",
    imageUrl: "/images/servicios/armonizacion-de-relaciones.jpg",
    icon: "Heart",
  },
  {
    id: 6,
    title: "Activación de Anclas Mentales",
    slug: "activacion-de-anclas-mentales",
    shortDescription: "Imagina poder acceder a un estado de calma o seguridad de forma casi instantánea.",
    longDescription: "A lo largo de tu vida has experimentado momentos de poder, amor y paz. Con la Activación de Anclas Mentales, trabajamos para asociar esos recuerdos a un gesto o palabra, programándolos en tu subconsciente. Te enseñaré a crear una fuente de poder espiritual que reside en ti, ideal para momentos de ansiedad o situaciones donde necesites volver a tu centro rápidamente.\n\n👉 Tu mente es una herramienta poderosa. Escríbeme por WhatsApp y descubre cómo puedes aprender a activar tu propia ancla de poder.",
    imageUrl: "/images/servicios/activacion-de-anclas-mentales.jpg",
    icon: "Anchor",
  },
  {
    id: 7,
    title: "Ritual Guiado de Amor Propio",
    slug: "ritual-de-amor-propio",
    shortDescription: "¿Cuándo fue la última vez que te diste un espacio para conectar contigo mismo/a?",
    longDescription: "En la rutina diaria, a menudo nos dejamos para el final. Esta guía paso a paso te orientará para realizar tu propio Ritual de Amor Propio en casa. Está diseñado para ayudarte a reconectar con tu valor, trabajar en tu autoestima y abrazar tu poder personal. Es un regalo de ti, para ti.\n\n👉 Es momento de priorizarte. Haz clic aquí, envíame un WhatsApp y comienza tu viaje de reencuentro interior.",
    imageUrl: "/images/servicios/ritual-de-amor-propio.jpg",
    icon: "Gem",
  },
  {
    id: 8,
    title: "Oráculo de Vidas Pasadas",
    slug: "oraculo-de-vidas-pasadas",
    shortDescription: "¿Tienes miedos irracionales, talentos innatos o déja vus que te generan curiosidad?",
    longDescription: "Lo que vivimos hoy puede ser un eco de experiencias pasadas. Explorar tus vidas anteriores es una herramienta de autoconocimiento. A través de este reporte personalizado, exploramos los registros de tu alma para intentar entender qué lecciones podrías tener pendientes, qué patrones kármicos podrías estar repitiendo y qué dones antiguos podrías despertar para enriquecer tu presente.\n\n👉 Tu alma tiene una historia fascinante. Escríbeme al WhatsApp y abre el libro de tus posibles vidas pasadas.",
    imageUrl: "/images/servicios/oraculo-de-vidas-pasadas.jpg",
    icon: "BookOpenText",
  },
    {
    id: 9,
    title: "Guía de Numerología Personal",
    slug: "guia-de-numerologia-personal",
    shortDescription: "Tu fecha de nacimiento podría contener un código único sobre tu personalidad.",
    longDescription: "Tu nombre y fecha de nacimiento pueden esconder un mapa sobre tu vida. A través de este análisis en PDF, exploramos tu carta numerológica. El objetivo es que descubras tus posibles talentos, tu aparente misión de vida, cómo te podrían ver los demás y los ciclos que podrían marcar tu camino. Es una herramienta de autoconocimiento que busca darte un norte más claro sobre quién eres.\n\n👉 ¿Listo/a para explorar tu código numerológico? Haz clic, mándame un mensaje por WhatsApp con tus datos y empecemos.",
    imageUrl: "/images/servicios/guia-de-numerologia-personal.jpg",
    icon: "Calculator",
  }
];
