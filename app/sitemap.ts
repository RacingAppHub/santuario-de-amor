import { MetadataRoute } from 'next';
import { serviciosData } from '@/lib/servicios-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://energiadeamor.com';

  // URLs dinámicas para cada servicio
  const serviciosUrls = serviciosData.map(servicio => ({
    url: `${siteUrl}/servicios/${servicio.slug}`,
    lastModified: new Date(),
  }));

  // URLs estáticas
  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/acerca-de`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/servicios`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/politica-de-privacidad`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/politica-de-reembolso`,
      lastModified: new Date(),
    },
  ];

  return [...staticUrls, ...serviciosUrls];
}
