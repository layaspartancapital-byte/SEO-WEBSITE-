import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { webPageSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'All Services',
  description: 'Explore all 12 marketing and technology services offered by Omnivance Media Group. SEO, paid ads, TV commercials, CRM, custom software, and more.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema('All Services', 'Explore all 12 services.', '/services')
          ),
        }}
      />
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <h1 className="mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto">
            12 disciplines. One team. Every channel your brand needs to dominate.
          </p>
        </div>
      </section>
      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="service-card block group">
              <h2 className="text-lg mb-2 group-hover:text-ember transition-colors">{s.title}</h2>
              <p className="text-sm text-white/60 mb-3">{s.description}</p>
              <span className="text-ember text-sm font-medium">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
