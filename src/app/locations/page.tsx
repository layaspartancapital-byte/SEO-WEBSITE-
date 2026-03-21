import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/locationContent'

export const metadata: Metadata = {
  title: 'Locations — Digital Marketing Agency in All 50 States | Omnivance Media Group',
  description: 'Omnivance Media Group serves businesses across all 50 US states. Find expert digital marketing, SEO, paid ads, and CRM services in your state.',
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <>
      <section className="bg-ink pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <div className="w-16 h-1 bg-ember mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Locations We Serve
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Omnivance Media Group delivers data-driven digital marketing to businesses in all 50 states. Find your state below.
          </p>
        </div>
      </section>

      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="service-card block p-4 sm:p-5 group text-center"
              >
                <h2 className="text-sm sm:text-base font-semibold group-hover:text-ember transition-colors">
                  {loc.state}
                </h2>
                <p className="text-xs text-white/40 mt-1">{loc.city}, {loc.stateAbbr}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink section-padding text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4">Don&apos;t See Your Area?</h2>
          <p className="text-white/50 mb-6">We serve businesses across the entire United States. Get in touch to discuss your specific market.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center py-3.5 px-8">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
