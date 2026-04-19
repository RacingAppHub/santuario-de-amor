
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
    shortDescription: "¿Sientes que estás en una encrucijada y no sabes qué camino tomar?",
    longDescription: "A veces, el ruido del día a día no nos deja escuchar nuestra propia intuición. El Tarot Evolutivo no se trata de predecir un futuro inamovible, sino de poner un espejo frente a tu alma para entender tu presente. A través de esta guía 100% digital, exploraremos juntos esos bloqueos que te detienen y arrojaremos luz sobre las oportunidades que el universo está abriendo ante ti. Es un espacio seguro para hacer esas preguntas que no te dejan dormir y encontrar respuestas que resuenen con tu propósito.\n\n👉 ¿Hablamos? Haz clic aquí para enviarme un WhatsApp y cuéntame qué dudas necesitas resolver hoy.",
    imageUrl: "/images/servicios/lectura-de-tarot-evolutivo.jpg",
    icon: "LayoutGrid",
  },
  {
    id: 2,
    title: "Análisis de Sueños",
    slug: "analisis-de-suenos",
    shortDescription: "Tu mente nunca descansa; por las noches, tu subconsciente intenta hablarte.",
    longDescription: "¿Te despiertas con la sensación de haber vivido otra vida? ¿Tienes sueños recurrentes, símbolos extraños o pesadillas que te dejan pensando todo el día? Los sueños son mensajes encriptados de tu propia alma. A través de este servicio, me encargaré de descifrar esas imágenes y símbolos para entregarte un informe detallado en PDF. Descubrirás qué emociones necesitas sanar, qué advertencias te da tu intuición y qué deseos ocultos están pidiendo salir a la luz.\n\n👉 No ignores lo que tu mente intenta decirte. Escríbeme por WhatsApp, cuéntame tu sueño y vamos a descifrarlo.",
    imageUrl: "/images/servicios/analisis-de-suenos.jpg",
    icon: "Cloudy",
  },
  {
    id: 3,
    title: "Limpieza Energética Remota",
    slug: "limpieza-energetica-remota",
    shortDescription: "¿Sientes un cansancio inexplicable, estancamiento o una pesadez que no es tuya?",
    longDescription: "Al igual que nuestro cuerpo físico, nuestro campo energético acumula \"suciedad\" del entorno: estrés, discusiones, envidias o simplemente la carga del día a día. Esta limpieza energética a distancia está diseñada para barrer con esas energías densas, cortar lazos que te drenan y armonizar tu aura. El resultado es casi inmediato: volverás a sentir claridad mental, una ligereza en el pecho y una renovada sensación de paz y bienestar para avanzar sin cargas invisibles.\n\n👉 Mereces sentirte en paz y con energía. Haz clic aquí, envíame un mensaje por WhatsApp y agendemos tu limpieza.",
    imageUrl: "/images/servicios/limpieza-energetica-remota.jpg",
    icon: "Sun",
  },
  {
    id: 4,
    title: "Rituales de Abundancia",
    slug: "rituales-de-abundancia",
    shortDescription: "¿Sientes que trabajas muy duro pero la prosperidad se te escapa de las manos?",
    longDescription: "La abundancia no es solo cuestión de suerte; es una frecuencia energética. Si tu mentalidad o tu energía están bloqueadas por miedos o creencias limitantes, el éxito encontrará barreras para llegar a ti. Con estas guías digitales de Rituales de Abundancia, te enseñaré paso a paso cómo alinear tu vibración con la prosperidad. Aprenderás a abrir tus caminos, a soltar la mentalidad de escasez y a convertirte en un imán para las buenas oportunidades.\n\n👉 El universo tiene abundancia infinita para ti. Escríbeme por WhatsApp y demos el primer paso para desbloquear tu éxito.",
    imageUrl: "/images/servicios/rituales-de-abundancia.jpg",
    icon: "CircleDollarSign",
  },
  {
    id: 5,
    title: "Armonización de Relaciones",
    slug: "armonizacion-de-relaciones",
    shortDescription: "Cuando la conexión con alguien que nos importa se daña, todo nuestro mundo pierde el equilibrio.",
    longDescription: "Ya sea por malentendidos, distancia emocional o conflictos no resueltos, a veces las palabras no alcanzan para sanar un vínculo. La armonización de relaciones trabaja a nivel energético y a distancia. Su propósito no es forzar la voluntad de nadie (eso va contra las leyes espirituales), sino limpiar la toxicidad, suavizar los resentimientos y crear un puente de luz y entendimiento entre dos personas para que la energía fluya desde el amor y la paz.\n\n👉 Si tu corazón pide sanar ese vínculo, no estás solo/a. Haz clic en el botón de WhatsApp y cuéntame tu historia de forma confidencial.",
    imageUrl: "/images/servicios/armonizacion-de-relaciones.jpg",
    icon: "Heart",
  },
  {
    id: 6,
    title: "Activación de Anclas Mentales",
    slug: "activacion-de-anclas-mentales",
    shortDescription: "Imagina tener un \"botón de emergencia\" en tu mente que, al presionarlo, te llene de calma, seguridad o fuerza instantánea.",
    longDescription: "A lo largo de tu vida has sentido poder, amor y paz absoluta en momentos específicos. Con la Activación de Anclas Mentales, tomaremos ese recuerdo o concepto de alta vibración y lo programaremos en tu subconsciente. Te enseñaré a crear una fuente inagotable de poder espiritual que reside únicamente en ti. Ideal para momentos de ansiedad, entrevistas importantes o situaciones donde necesites volver a tu centro rápidamente.\n\n👉 Tu mente es tu herramienta más poderosa. Escríbeme por WhatsApp y descubre cómo activar tu propio ancla de poder.",
    imageUrl: "/images/servicios/activacion-de-anclas-mentales.jpg",
    icon: "Anchor",
  },
  {
    id: 7,
    title: "Ritual de Amor Propio",
    slug: "ritual-de-amor-propio",
    shortDescription: "¿Cuándo fue la última vez que te trataste a ti mismo/a con la misma ternura que le das a los demás?",
    longDescription: "En la carrera de la vida, solemos dejarnos para el final. Pero no puedes servir de una copa vacía. Esta guía paso a paso te llevará de la mano para realizar tu propio Ritual de Amor Propio en la intimidad de tu hogar. Está diseñado para reconectar con tu valor, sanar tu autoestima, perdonarte por errores pasados y abrazar tu poder personal. Es un regalo de ti, para ti.\n\n👉 Es hora de ponerte en primer lugar. Haz clic aquí, envíame un WhatsApp y comienza tu viaje de reencuentro contigo mismo/a.",
    imageUrl: "/images/servicios/ritual-de-amor-propio.jpg",
    icon: "Gem",
  },
  {
    id: 8,
    title: "Oráculo de Vidas Pasadas",
    slug: "oraculo-de-vidas-pasadas",
    shortDescription: "¿Tienes miedos irracionales, talentos innatos, o has conocido a alguien y sentiste que ya lo conocías de antes?",
    longDescription: "Lo que vivimos hoy es, muchas veces, el eco de lo que ya hemos vivido. Explorar tus vidas anteriores no es solo curiosidad; es una herramienta de sanación profunda. A través de este reporte personalizado, viajaremos a los registros de tu alma para entender qué lecciones trajiste pendientes, qué bloqueos kármicos estás repitiendo y qué dones antiguos puedes despertar hoy para mejorar tu presente.\n\n👉 Tu alma tiene una historia fascinante que contarte. Escríbeme al WhatsApp y abre el libro de tus vidas pasadas.",
    imageUrl: "/images/servicios/oraculo-de-vidas-pasadas.jpg",
    icon: "BookOpenText",
  },
    {
    id: 9,
    title: "Guía de Numerología Personal",
    slug: "guia-de-numerologia-personal",
    shortDescription: "El día que naciste no fue una coincidencia; el universo te asignó un código único.",
    longDescription: "Tu nombre y tu fecha de nacimiento esconden el mapa completo de tu vida. A través de este análisis completo en PDF, desnudaremos tu carta numerológica. Descubrirás cuáles son tus talentos ocultos, cuál es tu misión de vida, cómo te ven los demás y cuáles son los ciclos que marcarán tu destino. Es una herramienta de autoconocimiento brutalmente exacta que te dará un norte claro sobre quién eres y hacia dónde vas.\n\n👉 ¿Listo/a para descubrir tu verdadero código? Haz clic, mándame un mensaje por WhatsApp con tu fecha de nacimiento y empecemos.",
    imageUrl: "/images/servicios/guia-de-numerologia-personal.jpg",
    icon: "Calculator",
  }
];
