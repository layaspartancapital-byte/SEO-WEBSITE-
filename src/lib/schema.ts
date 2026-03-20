import { SITE } from './constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://omnivancemedia.com/#organization',
    name: 'Omnivance Media Group',
    url: 'https://omnivancemedia.com',
    logo: 'https://omnivancemedia.com/logo.png',
    description: 'Full-service digital marketing agency specializing in SEO, AEO, paid ads, CRM automation, and brand growth.',
    founder: { '@type': 'Person', name: 'Laya Shah', jobTitle: 'Founder & CEO', url: 'https://omnivancemedia.com/about' },
    address: { '@type': 'PostalAddress', addressLocality: 'New Jersey', addressRegion: 'NJ', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: '40.0583', longitude: '-74.4057' },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'City', name: 'New York' }, { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Chicago' }, { '@type': 'City', name: 'Houston' },
      { '@type': 'City', name: 'Miami' }, { '@type': 'City', name: 'Atlanta' },
      { '@type': 'City', name: 'Dallas' }, { '@type': 'City', name: 'Seattle' },
      { '@type': 'City', name: 'Boston' }, { '@type': 'City', name: 'Philadelphia' },
    ],
    sameAs: ['https://www.linkedin.com/company/omnivance-media-group/', 'https://x.com/Omnivancemedia', 'https://www.instagram.com/omnivancemedia/'],
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+1-848-349-2528', email: 'hello@omnivancemedia.com', availableLanguage: 'English' },
    priceRange: '$',
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://omnivancemedia.com/#website',
    url: 'https://omnivancemedia.com',
    name: 'Omnivance Media Group',
    publisher: { '@id': 'https://omnivancemedia.com/#organization' },
    potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://omnivancemedia.com/blog?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
  }
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE.url}${url}`,
    publisher: {
      '@type': 'Organization',
      name: 'Omnivance Media Group',
    },
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Omnivance Media Group',
    },
  }
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  author: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE.url}${url}`,
    datePublished,
    dateModified,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Omnivance Media Group',
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  }
}

export function enhancedArticleSchema(title: string, description: string, url: string, datePublished: string, dateModified: string, author: string, authorTitle: string, quickAnswer?: string) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
    url: `https://omnivancemedia.com${url}`, datePublished, dateModified: dateModified || datePublished,
    author: { '@type': 'Person', name: author, jobTitle: authorTitle || 'Digital Marketing Team', url: 'https://omnivancemedia.com/about' },
    publisher: { '@type': 'Organization', name: 'Omnivance Media Group', url: 'https://omnivancemedia.com', logo: { '@type': 'ImageObject', url: 'https://omnivancemedia.com/logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://omnivancemedia.com${url}` },
    isPartOf: { '@id': 'https://omnivancemedia.com/#website' },
  }
  if (quickAnswer) { schema.speakable = { '@type': 'SpeakableSpecification', cssSelector: '.quick-answer' } }
  return schema
}

export function localBusinessSchemaForCity(city: string, state: string) {
  return {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    '@id': `https://omnivancemedia.com/locations/${city.toLowerCase().replace(/\s/g, '-')}-${state.toLowerCase()}`,
    name: `Omnivance Media Group — ${city}, ${state}`, url: 'https://omnivancemedia.com',
    areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: state } },
    parentOrganization: { '@id': 'https://omnivancemedia.com/#organization' },
  }
}

export function howToSchema(name: string, description: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org', '@type': 'HowTo', name, description,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}

export function videoObjectSchema(name: string, description: string, thumbnailUrl: string, uploadDate: string) {
  return {
    '@context': 'https://schema.org', '@type': 'VideoObject', name, description, thumbnailUrl, uploadDate,
    publisher: { '@id': 'https://omnivancemedia.com/#organization' },
  }
}
