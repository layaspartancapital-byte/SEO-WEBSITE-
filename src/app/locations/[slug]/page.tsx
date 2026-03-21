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
          __html: JSON.stringify(localBusinessSchemaForCity(loc.city, loc.stateAbbr)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Locations', url: '/locations' },
              { name: loc.state, url: `/locations/${loc.slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-ember transition-colors">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{loc.state}</span>
          </nav>

          <h5 className="text-xs uppercase tracking-[0.14em] text-ember font-medium mb-4">{loc.stateAbbr} — Serving Statewide</h5>
          <h1 className="text-3xl md:text-5xl mb-6">{loc.h1}</h1>

          <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed mb-8">
            {loc.intro.split('\n\n').map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <a
            href="https://calendly.com/hello-omnivancemedia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center py-3.5 px-8 text-base"
          >
            Get a Free Strategy Session
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink-mid section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {loc.localStats.map((s: { stat: string; description: string }, i: number) => (
              <div key={i} className="service-card text-center p-6">
                <div className="text-2xl font-display font-bold text-ember mb-2">{s.stat}</div>
                <div className="text-sm text-white/60">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services + Why Local */}
      <section className="bg-ink section-padding">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed">
          <h2>Our Services in {loc.state}</h2>
          <p>{loc.services}</p>

          <h2>Why {loc.state} Businesses Choose Omnivance</h2>
          <p>{loc.whyLocal}</p>
        </div>
      </section>

      {/* Top Cities */}
      {loc.topCities && loc.topCities.length > 0 && (
        <section className="bg-ink-mid section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6">Major Cities We Serve in {loc.state}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {loc.topCities.map((city: string) => (
                <div key={city} className="service-card p-5">
                  <h3 className="text-base font-semibold text-white mb-1">{city}</h3>
                  <p className="text-xs text-white/40">SEO, Paid Ads, CRM & more</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ember/10 border border-ember/20 rounded-lg p-6 sm:p-8 text-center">
            <p className="text-lg text-white/80 mb-4">{loc.cta}</p>
            <a
              href="https://calendly.com/hello-omnivancemedia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ember hover:bg-ember-bright text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Schedule Your Free Strategy Call
            </a>
          </div>

          {loc.nearbyAreas.length > 0 && (
            <div className="text-sm text-white/40 mt-8">
              <p>Also serving nearby: {loc.nearbyAreas.join(' · ')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
