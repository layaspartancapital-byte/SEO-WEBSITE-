import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INDUSTRIES, industryContent } from '@/lib/industries'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import IndustryPageTemplate from '@/components/IndustryPageTemplate'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const data = industryContent[params.slug]
  if (!data) return {}
  return {
    title: data.h1,
    description: data.metaDescription,
    openGraph: { title: data.h1, description: data.metaDescription, type: 'website' },
    alternates: { canonical: `/industries/${params.slug}` },
  }
}

export default function IndustryPage({ params }: Props) {
  const data = industryContent[params.slug]
  if (!data) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Industries', url: '/industries' },
              { name: data.title, url: `/industries/${data.slug}` },
            ])
          ),
        }}
      />
      {data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(data.faqs)),
          }}
        />
      )}

      <IndustryPageTemplate data={data} />
    </>
  )
}
