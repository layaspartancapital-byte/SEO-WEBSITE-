import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/constants'
import { INDUSTRIES } from '@/lib/industries'
import { getAllPosts } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omnivancemedia.com'

  const staticPages = [
    '', '/about', '/services', '/industries', '/contact', '/blog',
    '/case-studies', '/privacy', '/terms', '/sitemap-page',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogPages = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cities = [
    { city: 'New York', state: 'NY' },
    { city: 'Los Angeles', state: 'CA' },
    { city: 'Chicago', state: 'IL' },
    { city: 'Houston', state: 'TX' },
    { city: 'Miami', state: 'FL' },
    { city: 'Atlanta', state: 'GA' },
    { city: 'Dallas', state: 'TX' },
    { city: 'Seattle', state: 'WA' },
    { city: 'Boston', state: 'MA' },
    { city: 'Philadelphia', state: 'PA' },
  ]

  const locationPages = cities.map((c) => ({
    url: `${baseUrl}/locations/${c.city.toLowerCase().replace(/\s/g, '-')}-${c.state.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const industryPages = INDUSTRIES.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages, ...industryPages, ...blogPages, ...locationPages]
}
