import type { Metadata } from 'next'
import Link from 'next/link'
import { webPageSchema } from '@/lib/schema'
import CaseStudiesCTA from './CaseStudiesCTA'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results from real businesses. See how Omnivance Media Group drives measurable revenue growth across 47 industries.',
  alternates: { canonical: '/case-studies' },
}

const caseStudies = [
  {
    slug: 'hvac-contractor-340k',
    tag: 'HVAC CONTRACTOR',
    title: '$340,000 in New Contracts in 90 Days',
    description: 'A Dallas-based HVAC company was spending $8,000/month on Google Ads with a 1.2× ROAS. We rebuilt their campaign architecture, created conversion-optimized landing pages, and implemented CRM automation for lead follow-up. Within 90 days, they closed $340,000 in new contracts with a 7.8× ROAS.',
    services: ['Google Ads', 'CRM Automation', 'Landing Pages'],
    stats: [
      { label: 'Revenue Generated', value: '$340K' },
      { label: 'ROAS', value: '7.8×' },
      { label: 'Cost Per Lead', value: '$23' },
      { label: 'Timeline', value: '90 days' },
    ],
  },
  {
    slug: 'ecommerce-80k-to-420k',
    tag: 'E-COMMERCE',
    title: '$80K to $420K Monthly Revenue in 6 Months',
    description: 'An Austin-based DTC brand was plateaued at $80K/month with declining organic traffic and unprofitable ads. We implemented a full-stack strategy: technical SEO overhaul, Google Shopping and Meta retargeting campaigns, email automation sequences, and conversion rate optimization. Revenue grew from $80K to $420K per month in 6 months.',
    services: ['SEO', 'Google Ads', 'Meta Ads', 'Email Automation', 'CRO'],
    stats: [
      { label: 'Starting Revenue', value: '$80K/mo' },
      { label: 'Ending Revenue', value: '$420K/mo' },
      { label: 'Organic Traffic', value: '+312%' },
      { label: 'Timeline', value: '6 months' },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema('Case Studies', 'Real results from real businesses.', '/case-studies')),
        }}
      />
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto text-center">
          <h1 className="mb-4">Case Studies</h1>
          <p className="max-w-xl mx-auto">
            Real numbers. Real businesses. Every result tracked, verified, and repeatable.
          </p>
        </div>
      </section>

      <section className="bg-ink-mid section-padding">
        <div className="container-max mx-auto space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="bg-ink border border-ink-border rounded-xl overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-ember/20 text-ember text-[10px] uppercase font-semibold px-2 py-1 rounded tracking-wider mb-4">
                  {cs.tag}
                </span>
                <h2 className="text-2xl lg:text-3xl mb-4">{cs.title}</h2>
                <p className="text-white/60 max-w-3xl mb-6">{cs.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cs.services.map((s) => (
                    <span key={s} className="text-xs bg-ink-mid border border-ink-border rounded-full px-3 py-1 text-white/60">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {cs.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display font-bold text-2xl text-ember">{stat.value}</div>
                      <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink section-padding text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4">Want Results Like These?</h2>
          <p className="mb-6">Book a free strategy call and get a custom growth plan for your business.</p>
          <CaseStudiesCTA />
        </div>
      </section>
    </>
  )
}
