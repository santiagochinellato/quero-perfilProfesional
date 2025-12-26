import { MetadataRoute } from 'next'

export const dynamic = "force-static";
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://martinquero.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
        url: `${baseUrl}/#problema`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/#sobre-mi`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/#servicios`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: `${baseUrl}/#contacto`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    },
  ]
}
