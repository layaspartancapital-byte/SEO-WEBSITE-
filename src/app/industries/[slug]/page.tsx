import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { INDUSTRIES, industryContent } from '@/lib/industries'
import { SERVICES } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'

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

  const relatedServices = data.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)

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

      {/* Hero */}
      <section className="bg-ink pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto">
          <nav className="text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/industries" className="hover:text-ember transition-colors">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{data.title}</span>
          </nav>
          <h5 className="text-xs uppercase tracking-[0.14em] text-ember font-medium mb-4">Industry Solutions</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">{data.h1}</h1>
          <p className="text-lg text-white/60 max-w-3xl mb-8">{data.subtitle}</p>
          <Link href="/contact" className="btn-primary inline-flex items-center py-3.5 px-8 text-base">
            Get a Free Strategy Session
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-ink-border bg-ink">
                <p className="text-4xl md:text-5xl font-display font-bold text-ember mb-2">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {data.sections.map((section, i) => (
        <section key={i} className={`${i % 2 === 0 ? 'bg-ink' : 'bg-ink-mid'} section-padding`}>
          <div className="container-max mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{section.heading}</h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/60 leading-relaxed space-y-4">
              {section.content.split('\n\n').map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Services for this industry */}
      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Our Services for {data.title}</h2>
          <p className="text-white/50 text-center mb-10 max-w-2xl mx-auto">
            We combine multiple channels into one unified growth strategy built specifically for {data.title.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((service) => service && (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card block p-6 group"
              >
                <h3 className="text-base font-semibold mb-2 group-hover:text-ember transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="bg-ink section-padding">
          <div className="container-max mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0">
              {data.faqs.map((faq, i) => (
                <div key={i} className="border-b border-ink-border py-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink-mid section-padding text-center">
        <div className="container-max mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Grow Your {data.title} Business?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Book a free strategy session with our team. We&apos;ll audit your current marketing and show you exactly where the growth opportunities are.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center py-3.5 px-8 text-base">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
