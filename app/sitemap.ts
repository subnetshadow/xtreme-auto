import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://xtremedetailingyyc.ca'
  const pages = [
    '',
    '/ceramic-coating-calgary',
    '/paint-correction-calgary',
    '/mobile-detailing-calgary',
  ]
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }))
}
