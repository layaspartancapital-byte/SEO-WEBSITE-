'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'
import { SERVICES } from '@/lib/constants'
import dynamic from 'next/dynamic'
import type { ServicePageData } from '@/lib/serviceContent'

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
})

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

/* ---------- Scrollable Results Carousel ---------- */

function ResultsCarousel({ results }: { results: ServicePageData['results'] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  function updateArrows() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-ink-mid border border-white/10 flex items-center justify-center text-white/60 hover:text-ember hover:border-ember transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-ink-mid border border-white/10 flex items-center justify-center text-white/60 hover:text-ember hover:border-ember transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="min-w-[290px] max-w-[320px] flex-shrink-0 snap-start bg-ink border-l-[3px] border-l-ember border border-ink-border rounded-xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,101,26,0.08)] transition-all duration-300"
          >
            <p className="font-display font-bold text-xl text-ember mb-2">{r.stat}</p>
            <p className="text-sm text-white/60 mb-3">{r.description}</p>
            {r.tag && (
              <span className="inline-block text-[10px] uppercase tracking-wider text-white/40 bg-white/5 px-2.5 py-1 rounded-full">
                {r.tag}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Main Template ---------- */

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const relatedServices = SERVICES.filter((s) => data.relatedServices.includes(s.slug))

  // Split whyItMatters into paragraphs; first paragraph is the "key insight"
  const paragraphs = data.whyItMatters.split('\n\n').filter(Boolean)
  const keyInsight = paragraphs[0]
  const restParagraphs = paragraphs.slice(1)

  // Pull stats from first 2 results for the left column
  const highlightStats = data.results.slice(0, 2)

  return (
    <>
      {/* Hero — with particle background + scroll arrow */}
      <section className="relative bg-ink pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ParticlesBackground />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232,101,26,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,101,26,.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-max mx-auto relative z-10">
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

        {/* Bouncing scroll arrow */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-ember" />
        </motion.div>
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

      {/* Why It Matters — magazine-style 2-column */}
      <Section className="bg-ink-mid relative">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(232,101,26,1) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16">
          {/* Left — heading + stats */}
          <div>
            <h5 className="mb-3">WHY IT MATTERS</h5>
            <h2 className="mb-8">
              Why {SERVICES.find((s) => s.slug === data.slug)?.title} Is Critical for Your Business in 2025
            </h2>

            {highlightStats.map((s, i) => (
              <div key={i} className="mb-6">
                <p className="font-display font-bold text-2xl text-ember">{s.stat}</p>
                <p className="text-sm text-white/50 mt-1">{s.description}</p>
              </div>
            ))}
          </div>

          {/* Right — content with accent lines + key insight box */}
          <div>
            {/* Key Insight callout */}
            <div className="border-l-[3px] border-ember bg-ember/[0.04] rounded-r-lg px-6 py-5 mb-8">
              <p className="text-xs uppercase tracking-widest text-ember font-semibold mb-2">Key Insight</p>
              <p className="text-white/70 leading-relaxed text-[15px]">{keyInsight}</p>
            </div>

            {restParagraphs.map((p, i) => (
              <div key={i} className="mb-6 flex gap-4">
                <div className="w-0.5 bg-ember/20 rounded-full flex-shrink-0 mt-1.5" style={{ minHeight: 20 }} />
                <p className="text-white/60 leading-relaxed text-[15px]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tools / Platforms */}
      <Section className="bg-ink">
        <h2 className="text-center mb-8">Platforms We Use</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {data.tools.map((tool) => (
            <div
              key={tool}
              className="py-3 px-6 bg-ink-mid border border-ink-border rounded-lg text-sm text-white/60 hover:border-ember/40 hover:text-white hover:shadow-[0_0_16px_rgba(232,101,26,0.12)] hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>
      </Section>

      {/* Results — scrollable carousel */}
      <Section className="bg-ink-mid">
        <h2 className="text-center mb-8">Real Results</h2>
        <ResultsCarousel results={data.results} />
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
