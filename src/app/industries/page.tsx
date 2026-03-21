import type { Metadata } from 'next'
import Link from 'next/link'
import { INDUSTRIES } from '@/lib/industries'

export const metadata: Metadata = {
  title: 'Industries We Serve | Omnivance Media Group',
  description: 'Omnivance Media Group provides specialized digital marketing solutions for 20+ industries including law firms, healthcare, e-commerce, real estate, and more.',
  alternates: { canonical: '/industries' },
}

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-ink pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <div className="w-16 h-1 bg-ember mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Industries We Serve
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Specialized digital marketing strategies for businesses across the United States. No matter your industry, we have the expertise to drive measurable growth.
          </p>
        </div>
      </section>

      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="service-card block p-6 group"
              >
                <h2 className="text-base font-semibold mb-2 group-hover:text-ember transition-colors">
                  {industry.title}
                </h2>
                <p className="text-sm text-white/40">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink section-padding text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-white/50 mb-6">We work with businesses across dozens of verticals. Get in touch to discuss your specific needs.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center py-3.5 px-8">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
