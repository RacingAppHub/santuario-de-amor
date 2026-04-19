
# Blueprint: Santuario de Amor

## Visión General

Esta es una landing page para "Santuario de Amor", un servicio de guía espiritual. La página está diseñada para ser visualmente atractiva, con un diseño moderno y profesional que inspira confianza y tranquilidad. El objetivo es presentar los servicios ofrecidos, mostrar testimonios de clientes y facilitar el contacto a través de WhatsApp.

## Funcionalidades Implementadas

### Fase 1: Diseño Inicial y Estructura

*   **Página de Inicio (`/`):**
    *   Diseño de landing page con un fondo atractivo.
    *   Secciones para "Servicios", "Donaciones" y "Acerca de".
    *   Encabezado y pie de página reutilizables.
*   **Página de Servicios (`/servicios`):**
    *   Catálogo de servicios presentados en tarjetas con un diseño atractivo.
*   **Páginas Legales:**
    *   Creación de páginas para "Política de Privacidad", "Términos y Condiciones" y "Política de Reembolso".
*   **Estilo y Diseño:**
    *   Paleta de colores definida en la configuración de Tailwind, con un enfoque en tonos rosa, verde y grises.
    *   Tipografía con fuentes sans-serif para legibilidad.
    *   Componentes visuales modernos como tarjetas con sombras y botones redondeados.

### Fase 2: Landing Pages para Servicios

*   **Arquitectura de Datos:**
    *   Centralización de los datos de los servicios en `lib/servicios-data.ts`.
*   **Rutas Dinámicas:**
    *   Creación de la ruta `app/servicios/[slug]` para generar páginas de destino dinámicas para cada servicio.
*   **Diseño de Plantilla de Servicio:**
    *   Layout de dos columnas en escritorio: una barra lateral con la lista de todos los servicios y una columna principal con los detalles del servicio seleccionado.
    *   Botón de llamada a la acción para contactar por WhatsApp.

### Fase 2.5: Ajustes de Diseño y Correcciones

*   **Encabezado:**
    *   Ajustado el tamaño del título para una mejor visualización en dispositivos móviles.
*   **Páginas Legales:**
    *   Eliminado el encabezado redundante para un diseño más limpio y consistente.
*   **Proceso de Despliegue:**
    *   Solucionado un problema con los `hooks` de `husky` que impedían el despliegue automático.

## Próximos Pasos: Fase 3 - Pulido y Contenido

**Objetivo:** Enriquecer el sitio con contenido clave para generar confianza y mejorar la experiencia del usuario, además de realizar una revisión final de la interfaz.

1.  **Desarrollar la Página "Acerca de":**
    *   **Acción:** Añadir contenido a la página `app/acerca-de/page.tsx`.
    *   **Propósito:** Contar la historia, la misión y los valores de "Santuario de Amor". Presentar al guía espiritual para crear una conexión más personal y generar confianza.
2.  **Crear una Sección de Testimonios:**
    *   **Acción:** Añadir una nueva sección a la página de inicio (`app/page.tsx`).
    *   **Propósito:** Mostrar testimonios de clientes satisfechos. Esto actúa como prueba social, un elemento crucial para la credibilidad y la conversión de nuevos clientes.
3.  **Optimización de Imágenes:**
    *   **Acción:** Revisar todas las imágenes del sitio.
    *   **Propósito:** Asegurarse de que las imágenes estén comprimidas y en formatos modernos (como WebP) para garantizar tiempos de carga rápidos, lo cual es vital para la retención de usuarios y el SEO.
4.  **Revisión Final de Estilo:**
    *   **Acción:** Realizar una revisión exhaustiva de la interfaz de usuario en todo el sitio.
    *   **Propósito:** Verificar la consistencia en espaciados, tamaños de fuente, colores y alineaciones para un acabado profesional y pulido.

## Estructura del Proyecto y Tecnologías

*   **Framework:** Next.js (con App Router)
*   **Lenguaje:** TypeScript
*   **Estilos:** Tailwind CSS
*   **Iconos:** Lucide React
