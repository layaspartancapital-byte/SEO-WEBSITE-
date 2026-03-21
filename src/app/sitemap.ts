import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/constants'
import { INDUSTRIES } from '@/lib/industries'
import { LOCATIONS } from '@/lib/locationContent'
import { getAllPosts } from '@/lib/blogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omnivancemedia.com'

  const staticPages = [
    '', '/about', '/services', '/industries', '/locations', '/contact', '/blog',
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

  const locationPages = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
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
