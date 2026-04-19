
# Blueprint: Santuario de Amor

## Visión General

Esta es una landing page para "Santuario de Amor", un servicio de guía espiritual. La página está diseñada para ser visualmente atractiva, con un diseño moderno y profesional que inspira confianza y tranquilidad. El objetivo es presentar los servicios ofrecidos, mostrar testimonios de clientes y facilitar el contacto a través de WhatsApp.

## Plan de Desarrollo: Fase 2 - Landing Pages para Google Ads

**Objetivo:** Transformar la sección de servicios en una serie de landing pages de alta conversión, una para cada servicio, con el fin de maximizar la efectividad de las campañas de Google Ads y mejorar la experiencia del usuario.

### Fase 1: Arquitectura y Diseño

1.  **Centralizar Datos de Servicios:**
    *   **Acción:** Crear un nuevo archivo en `lib/servicios-data.ts`.
    *   **Propósito:** Este archivo exportará un array de objetos. Cada objeto representará un servicio y contendrá su `id`, `slug` (para la URL), `title`, `shortDescription` (para la página de catálogo), `longDescription` (para la landing page), y un `imageUrl` para la imagen principal. Esto facilita la gestión y escalabilidad del contenido.

2.  **Crear Ruta Dinámica para Servicios:**
    *   **Acción:** Crear una nueva estructura de carpetas: `app/servicios/[slug]`. Dentro de esta, se creará el archivo `page.tsx`.
    *   **Propósito:** Esta será la plantilla de landing page dinámica. El `[slug]` permitirá que cualquier URL (ej. `/servicios/limpieza-energetica`) sea manejada por este único archivo, cargando dinámicamente el contenido correspondiente.

3.  **Diseñar la Plantilla de Landing Page (`app/servicios/[slug]/page.tsx`):**
    *   **Estructura:** La página tendrá un layout de dos columnas en escritorio.
    *   **Columna Izquierda (Sidebar):**
        *   Contendrá una lista de **todos** los servicios, funcionando como un menú de navegación secundario.
        *   El servicio actualmente activo (el que corresponde al `slug` de la URL) estará visualmente resaltado.
    *   **Columna Derecha (Contenido Principal):**
        *   Mostrará el `title` del servicio como un encabezado principal.
        *   Incluirá la `imageUrl` del servicio.
        *   Presentará la `longDescription` para explicar en detalle los beneficios y el proceso.
        *   Tendrá un botón de Llamada a la Acción (CTA) prominente para contactar por WhatsApp.

### Fase 2: Implementación y Conexión

1.  **Actualizar la Página Principal de Servicios (`/servicios`):**
    *   **Acción:** Modificar el componente `app/components/ServiciosClient.tsx`.
    *   **Propósito:** Cada tarjeta de servicio, que actualmente es estática, se convertirá en un componente `<Link>` de Next.js. Al hacer clic, el usuario será redirigido a la landing page dinámica correspondiente (ej. a `/servicios/lectura-de-tarot`).

## Estructura del Proyecto y Tecnologías

*   **Framework:** Next.js (con App Router)
*   **Lenguaje:** TypeScript
*   **Estilos:** Tailwind CSS v4
*   **Iconos:** Lucide React

## Diseño y Estilo

*   **Paleta de Colores:** Definida en la configuración de Tailwind, con un enfoque en tonos rosa, verde y grises para una sensación espiritual y profesional.
*   **Tipografía:** Fuentes sans-serif estándar para legibilidad, con jerarquía visual a través del tamaño y peso de la fuente.
*   **Componentes Visuales:** Uso de tarjetas con sombras, botones redondeados e iconos para una interfaz moderna e interactiva.

