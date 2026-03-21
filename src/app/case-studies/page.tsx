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
  {
    slug: 'law-firm-312-leads',
    tag: 'LAW FIRM',
    title: '312 Qualified Leads in 60 Days',
    description: 'A New Jersey personal injury law firm was burning through $15,000/month on Google Ads with a $380 cost per lead and no CRM follow-up system. We restructured their entire paid search campaign with negative keyword pruning, dayparted bidding, and dedicated landing pages for each practice area. We then implemented a CRM with automated intake sequences that responded to inquiries within 2 minutes. Cost per lead dropped from $380 to $67, and they generated 312 qualified consultation requests in just 60 days.',
    services: ['Google Ads', 'SEO', 'CRM Automation', 'Landing Pages'],
    stats: [
      { label: 'Qualified Leads', value: '312' },
      { label: 'Cost Per Lead', value: '$67' },
      { label: 'ROAS', value: '4.2×' },
      { label: 'Timeline', value: '60 days' },
    ],
  },
  {
    slug: 'restaurant-chain-3x-locations',
    tag: 'RESTAURANT CHAIN',
    title: '3× Locations Opened After Digital Rebrand',
    description: 'A growing restaurant group in the Northeast was struggling with inconsistent branding across locations and zero social media presence. We executed a full rebrand — new visual identity, menu photography, and brand guidelines — then launched an aggressive social media strategy on Instagram and TikTok paired with hyper-local SEO for each location. Instagram grew 890% in 4 months, and when they opened 3 new locations, all had waitlists within 2 weeks of launch — entirely driven by organic social buzz and local search visibility.',
    services: ['Branding', 'Social Media', 'Local SEO', 'Photography'],
    stats: [
      { label: 'Instagram Growth', value: '890%' },
      { label: 'New Locations', value: '3' },
      { label: 'Waitlist Time', value: '2 weeks' },
      { label: 'Timeline', value: '4 months' },
    ],
  },
  {
    slug: 'medical-practice-428-bookings',
    tag: 'MEDICAL PRACTICE',
    title: '428% Increase in New Patient Bookings',
    description: 'A multi-location medical practice in Pennsylvania was relying entirely on referrals and had no digital presence. We built a comprehensive Google Ads campaign targeting high-intent searches for their specialties, optimized their Google Business Profiles across all locations with review generation workflows, and created a reputation management system that boosted their average rating from 3.6 to 4.8 stars. New patient bookings increased 428% in 4 months and cost per booking dropped from $210 to $38.',
    services: ['Google Ads', 'Local SEO', 'Reputation Management', 'CRM Automation'],
    stats: [
      { label: 'Booking Increase', value: '+428%' },
      { label: 'Cost Per Booking', value: '$38' },
      { label: 'Avg. Rating', value: '4.8★' },
      { label: 'Timeline', value: '4 months' },
    ],
  },
  {
    slug: 'real-estate-2m-sales',
    tag: 'REAL ESTATE AGENCY',
    title: '$2.1M in Property Sales from Digital Leads',
    description: 'A New Jersey real estate agency had no digital lead generation — every deal came from cold calling and referrals. We launched targeted Meta Ads campaigns for buyer and seller audiences, built Google Ads campaigns around high-intent neighborhood searches, and implemented a CRM with automated drip sequences that nurtured leads from first click to showing. Within 90 days, digital leads accounted for $2.1M in closed property transactions, with the agency receiving an average of 18 qualified buyer leads per week.',
    services: ['Meta Ads', 'Google Ads', 'CRM Automation', 'Landing Pages'],
    stats: [
      { label: 'Closed Sales', value: '$2.1M' },
      { label: 'Leads Per Week', value: '18' },
      { label: 'Cost Per Lead', value: '$41' },
      { label: 'Timeline', value: '90 days' },
    ],
  },
  {
    slug: 'saas-1200-signups',
    tag: 'SAAS COMPANY',
    title: '0 to 1,200 Trial Signups in 45 Days',
    description: 'An early-stage SaaS company had built a strong product but had zero marketing infrastructure — no blog, no ads, no email sequences. We built a full-funnel acquisition strategy from scratch: SEO-optimized comparison and feature pages targeting competitor keywords, Google Ads campaigns for high-intent searches, and a 7-email onboarding sequence that guided free trial users to activation milestones. They went from 0 to 1,200 free trial signups in 45 days with a 23% trial-to-paid conversion rate.',
    services: ['SEO', 'Google Ads', 'Email Automation', 'Content Strategy'],
    stats: [
      { label: 'Trial Signups', value: '1,200' },
      { label: 'Conversion Rate', value: '23%' },
      { label: 'Cost Per Signup', value: '$14' },
      { label: 'Timeline', value: '45 days' },
    ],
  },
  {
    slug: 'fitness-gym-847-members',
    tag: 'FITNESS GYM',
    title: '847 New Members in 3 Months',
    description: 'A gym chain with 4 locations was losing members to boutique fitness studios and had no digital marketing beyond an outdated Facebook page. We launched hyper-targeted Meta Ads with video creatives showcasing the gym experience, optimized all 4 Google Business Profiles with local SEO, and built automated email sequences for lead nurture and member retention. The result: 847 new memberships in 90 days at just $12 per lead, with a 340% return on total ad spend.',
    services: ['Meta Ads', 'Local SEO', 'Email Automation', 'Video Production'],
    stats: [
      { label: 'New Members', value: '847' },
      { label: 'Cost Per Lead', value: '$12' },
      { label: 'ROI', value: '340%' },
      { label: 'Timeline', value: '90 days' },
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
