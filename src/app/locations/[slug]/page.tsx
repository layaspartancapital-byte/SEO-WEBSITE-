import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/locationContent'
import { localBusinessSchemaForCity, breadcrumbSchema } from '@/lib/schema'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = LOCATIONS.find((l) => l.slug === params.slug)
  if (!loc) return {}
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
  }
}

export default function LocationPage({ params }: Props) {
  const loc = LOCATIONS.find((l) => l.slug === params.slug)
  if (!loc) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchemaForCity(loc.city, loc.state)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Locations', url: '/locations' },
              { name: `${loc.city}, ${loc.state}`, url: `/locations/${loc.slug}` },
            ])
          ),
        }}
      />

      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-ember transition-colors">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{loc.city}, {loc.state}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl mb-6">{loc.h1}</h1>

          <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed mb-12">
            {loc.intro.split('\n\n').map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {loc.localStats.map((s: { stat: string; description: string }, i: number) => (
              <div key={i} className="service-card text-center p-6">
                <div className="text-2xl font-bold text-ember mb-2">{s.stat}</div>
                <div className="text-sm text-white/60">{s.description}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed mb-12">
            <h2>Our Services in {loc.city}</h2>
            <p>{loc.services}</p>

            <h2>Why {loc.city} Businesses Choose Omnivance</h2>
            <p>{loc.whyLocal}</p>
          </div>

          <div className="bg-ember/10 border border-ember/20 rounded-lg p-8 text-center mb-12">
            <p className="text-lg text-white/80 mb-4">{loc.cta}</p>
            <Link href="/contact" className="inline-block bg-ember hover:bg-ember-bright text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Get Your Free Strategy Call
            </Link>
          </div>

          {loc.nearbyAreas.length > 0 && (
            <div className="text-sm text-white/40">
              <p>Also serving: {loc.nearbyAreas.join(' · ')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
