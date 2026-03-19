import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/locationContent'

export const metadata: Metadata = {
  title: 'Locations | Omnivance Media Group',
  description: 'Omnivance Media Group serves businesses across the United States. Find digital marketing services in your city.',
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container-max mx-auto">
        <h1 className="text-center mb-4">Our Locations</h1>
        <p className="text-center text-white/60 max-w-xl mx-auto mb-12">
          Omnivance Media Group delivers data-driven digital marketing to businesses across America's top markets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}`} className="service-card block group">
              <h2 className="text-lg font-semibold group-hover:text-ember transition-colors">
                {loc.city}, {loc.state}
              </h2>
              <p className="text-sm text-white/60 mt-2 line-clamp-2">{loc.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
