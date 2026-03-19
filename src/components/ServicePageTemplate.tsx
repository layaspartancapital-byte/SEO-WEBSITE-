'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp, scaleIn, stagger } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'
import { SERVICES } from '@/lib/constants'
import type { ServicePageData } from '@/lib/serviceContent'

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, controls } = useScrollReveal()
  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      className={`section-padding ${className}`}
    >
      <div className="container-max mx-auto">{children}</div>
    </motion.section>
  )
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const relatedServices = SERVICES.filter((s) => data.relatedServices.includes(s.slug))

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto">
          <nav className="text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-ember transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{SERVICES.find((s) => s.slug === data.slug)?.title}</span>
          </nav>
          <h1 className="mb-4 max-w-4xl">{data.h1}</h1>
          <p className="text-lg max-w-2xl mb-8">{data.subtitle}</p>
          <button onClick={openCalendly} className="btn-primary text-base px-8 py-4">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Deliverables */}
      <Section className="bg-ink-mid">
        <h2 className="text-center mb-12">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.deliverables.map((d) => (
            <div key={d.title} className="service-card">
              <h3 className="text-lg mb-2">{d.title}</h3>
              <p className="text-sm text-white/60">{d.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-ink">
        <h2 className="text-center mb-12">Our {SERVICES.find((s) => s.slug === data.slug)?.title} Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.process.map((step, i) => (
            <div key={step.title} className="relative">
              <span className="font-display font-bold text-[60px] text-ember/20 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why It Matters */}
      <Section className="bg-ink-mid">
        <h2 className="text-center mb-8">
          Why {SERVICES.find((s) => s.slug === data.slug)?.title} Is Critical for Your Business in 2025
        </h2>
        <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/60 prose-p:text-base prose-p:leading-relaxed">
          {data.whyItMatters.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section className="bg-ink">
        <h2 className="text-center mb-8">Platforms We Use</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {data.tools.map((tool) => (
            <div
              key={tool}
              className="px-5 py-3 bg-ink-mid border border-ink-border rounded-lg text-sm text-white/60"
            >
              {tool}
            </div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-ink-mid">
        <h2 className="text-center mb-8">Real Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.results.map((r) => (
            <div
              key={r.stat}
              className="bg-ink border-l-[3px] border-l-ember border border-ink-border rounded-xl p-6"
            >
              <h3 className="text-xl mb-2">{r.stat}</h3>
              <p className="text-sm text-white/60">{r.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-ink">
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {data.faqs.map((faq) => (
            <div key={faq.question} className="border-b border-ink-border pb-6">
              <h3 className="text-base font-semibold mb-2">{faq.question}</h3>
              <p className="text-sm text-white/60">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-ink-mid">
        <h2 className="text-center mb-8">You Might Also Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {relatedServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="service-card text-center"
            >
              <h4 className="mb-2">{s.title}</h4>
              <p className="text-sm text-white/60">{s.description}</p>
              <span className="text-ember text-sm mt-3 inline-block">Learn More →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-ink section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--grad-glow)' }} />
        <div className="container-max mx-auto text-center relative z-10">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Schedule a free strategy call and let&apos;s discuss how we can grow your business.
          </p>
          <button onClick={openCalendly} className="btn-primary text-base px-10 py-4">
            Schedule a Free Call
          </button>
        </div>
      </section>
    </>
  )
}
