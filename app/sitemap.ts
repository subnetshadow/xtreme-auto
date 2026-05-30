import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.xtremedetailingyyc.ca'
  const pages = [
    '',
    '/ceramic-coating-calgary',
    '/paint-correction-calgary',
    '/mobile-detailing-calgary',
    '/interior-detailing-calgary',
    '/headlight-restoration-calgary',
    '/paint-protection-film-calgary',
    '/window-tinting-calgary',
    '/faq',
    '/privacy',
    '/terms',
  ]
  const lowPriority = ['/privacy', '/terms']
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : lowPriority.includes(p) ? 0.3 : 0.8,
  }))
}
