import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { serviceContent } from '@/lib/serviceContent'
import { SERVICES } from '@/lib/constants'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const data = serviceContent[params.slug]
  if (!data) return {}

  return {
    title: data.h1,
    description: data.metaDescription,
    openGraph: {
      title: data.h1,
      description: data.metaDescription,
    },
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  }
}

export default function ServicePage({ params }: Props) {
  const data = serviceContent[params.slug]
  if (!data) notFound()

  const service = SERVICES.find((s) => s.slug === params.slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service?.title || '', data.metaDescription, `/services/${params.slug}`)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(data.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: service?.title || '', url: `/services/${params.slug}` },
            ])
          ),
        }}
      />
      <ServicePageTemplate data={data} />
    </>
  )
}
