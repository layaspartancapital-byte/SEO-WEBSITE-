'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, CheckCircle, ArrowRight, TrendingUp, Cpu, Target, Tv, Video, GitBranch, Code2, BarChart3, Newspaper, Sparkles, Mail, Instagram, Scale, Heart, Smile, UtensilsCrossed, Home, Hammer, ShoppingCart, DollarSign, Shield, Calculator, Dumbbell, Scissors, Car, Wrench, HardHat, Zap, HeartHandshake, Laptop, Store, Hotel } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'
import { SERVICES } from '@/lib/constants'
import type { IndustryPageData } from '@/lib/industries'
import dynamic from 'next/dynamic'

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
})

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Cpu, Target, Tv, Video, GitBranch, Code2, BarChart3, Newspaper, Sparkles, Mail, Instagram,
  Scale, Heart, Smile, UtensilsCrossed, Home, Hammer, ShoppingCart, DollarSign, Shield, Calculator, Dumbbell, Scissors, Car, Wrench, HardHat, Zap, HeartHandshake, Laptop, Store, Hotel,
}

/* ---------- Animated Section Wrapper ---------- */

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

/* ---------- CountUp Animation ---------- */

function CountUp({ value, suffix = '', prefix = '' }: { value: string; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Extract numeric part from value string
  const numericMatch = value.match(/[\d,.]+/)
  const numericValue = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, '')) : 0
  const beforeNum = value.slice(0, value.indexOf(numericMatch?.[0] || ''))
  const afterNum = value.slice((value.indexOf(numericMatch?.[0] || '') || 0) + (numericMatch?.[0]?.length || 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepTime = duration / steps
          let current = 0
          const timer = setInterval(() => {
            current++
            const progress = current / steps
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(numericValue * eased))
            if (current >= steps) {
              setCount(numericValue)
              clearInterval(timer)
            }
          }, stepTime)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericValue, hasAnimated])

  const displayNum = numericValue >= 1000
    ? count.toLocaleString()
    : count.toString()

  return (
    <span ref={ref}>
      {beforeNum}{prefix}{displayNum}{afterNum}{suffix}
    </span>
  )
}

/* ---------- FAQ Accordion Item ---------- */

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="border border-ink-border rounded-xl overflow-hidden hover:border-ember/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={open}
      >
        <h3 className="text-base font-semibold pr-4 group-hover:text-ember transition-colors">{question}</h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-ember" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-ink-border pt-4">
                <p className="text-sm text-white/60 leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ---------- Scrollspy Sidebar + Content ---------- */

function ScrollspyContent({ sections, title }: { sections: IndustryPageData['sections']; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // All nav items: content sections + key insight
  const navItems = [
    { label: 'Key Insight', id: 'key-insight' },
    ...sections.map((s, i) => ({ label: s.heading, id: `section-${i}` })),
  ]

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionRefs.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i)
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sections.length])

  function scrollToSection(index: number) {
    const el = sectionRefs.current[index]
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // First section content split: first paragraph is the "Key Insight"
  const firstSection = sections[0]
  const firstParagraphs = firstSection ? firstSection.content.split('\n\n').filter(Boolean) : []
  const keyInsight = firstParagraphs[0] || ''
  const restFirstParagraphs = firstParagraphs.slice(1)

  return (
    <section className="bg-ink-mid section-padding relative">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,101,26,1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div ref={containerRef} className="container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
          {/* Left — sticky sidebar nav */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <h5 className="mb-4">ON THIS PAGE</h5>
              <nav className="space-y-1" aria-label="Page sections">
                {navItems.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(i)}
                    className={`w-full text-left flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm transition-all duration-300 group ${
                      activeIndex === i
                        ? 'text-ember bg-ember/[0.08]'
                        : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                    }`}
                  >
                    {/* Active indicator bar */}
                    <div
                      className={`w-0.5 h-5 rounded-full flex-shrink-0 transition-all duration-300 ${
                        activeIndex === i ? 'bg-ember' : 'bg-white/10 group-hover:bg-white/20'
                      }`}
                    />
                    <span className="line-clamp-1">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Sidebar mini CTA */}
              <div className="mt-8 pt-6 border-t border-ink-border">
                <p className="text-xs text-white/30 mb-3">Ready to grow?</p>
                <button onClick={openCalendly} className="btn-primary text-xs py-2.5 px-5 w-full justify-center">
                  Free Strategy Call
                </button>
              </div>
            </div>
          </div>

          {/* Right — scrolling content */}
          <div>
            {/* Key Insight section */}
            <div
              ref={(el) => { sectionRefs.current[0] = el }}
              className="mb-16 scroll-mt-28"
              id="key-insight"
            >
              <h5 className="mb-3">KEY INSIGHT</h5>
              <h2 className="mb-6">
                Why {title} Need Specialized Digital Marketing
              </h2>

              {/* Callout box */}
              <div className="border-l-[3px] border-ember bg-ember/[0.04] rounded-r-lg px-6 py-5 mb-8">
                <p className="text-xs uppercase tracking-widest text-ember font-semibold mb-2">Key Insight</p>
                <p className="text-white/70 leading-relaxed text-[15px]">{keyInsight}</p>
              </div>

              {restFirstParagraphs.map((p, j) => (
                <div key={j} className="mb-5 flex gap-4">
                  <div className="w-0.5 bg-ember/20 rounded-full flex-shrink-0 mt-1.5" style={{ minHeight: 20 }} />
                  <p className="text-white/60 leading-relaxed text-[15px]">{p}</p>
                </div>
              ))}
            </div>

            {/* Remaining content sections */}
            {sections.slice(1).map((section, i) => (
              <div
                key={i}
                ref={(el) => { sectionRefs.current[i + 1] = el }}
                className="mb-16 scroll-mt-28"
                id={`section-${i}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-bold text-[48px] text-ember/20 leading-none">
                    {String(i + 2).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="mb-4">{section.heading}</h2>
                <div className="w-16 h-1 bg-ember rounded-full mb-8" />

                {section.content.split('\n\n').map((p, j) => (
                  <div key={j} className="mb-5 flex gap-4">
                    <div className="w-0.5 bg-ember/20 rounded-full flex-shrink-0 mt-1.5" style={{ minHeight: 20 }} />
                    <p className="text-white/60 leading-relaxed text-[15px]">{p}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile section nav — horizontal scrollable pills */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink/95 backdrop-blur-md border-t border-ink-border px-3 sm:px-4 py-2.5 safe-area-pb">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(i)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-ember/20 border-ember text-ember'
                  : 'bg-ink-mid border-ink-border text-white/40'
              }`}
            >
              {item.label.length > 25 ? item.label.slice(0, 25) + '…' : item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Why Omnivance Card ---------- */

const whyCards = [
  {
    icon: 'Target',
    title: 'Industry-Specific Strategy',
    description: 'We don\'t use one-size-fits-all playbooks. Every campaign is built around the unique challenges, regulations, and buyer journeys in your industry.',
  },
  {
    icon: 'TrendingUp',
    title: 'Proven Track Record',
    description: 'Our team has generated over $50M in trackable client revenue across 47+ industries. We bring battle-tested strategies to your business from day one.',
  },
  {
    icon: 'GitBranch',
    title: 'Full-Funnel Execution',
    description: 'From first click to closed deal, we build and manage every touchpoint — SEO, ads, CRM, email, and automation — so nothing falls through the cracks.',
  },
]

/* ---------- Main Template ---------- */

export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const relatedServices = data.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)

  const IndustryIcon = iconMap[data.icon]

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative bg-ink pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ParticlesBackground />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(232,101,26,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,101,26,.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-max mx-auto relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-white/40 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/industries" className="hover:text-ember transition-colors">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{data.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            {IndustryIcon && (
              <div className="w-12 h-12 rounded-xl bg-ember/10 border border-ember/20 flex items-center justify-center">
                <IndustryIcon className="w-6 h-6 text-ember" />
              </div>
            )}
            <h5 className="text-xs uppercase tracking-[0.14em] text-ember font-medium">Industry Solutions</h5>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="max-w-5xl mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-ember/80 bg-clip-text text-transparent">
              {data.h1}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-lg text-white/60 max-w-3xl mb-10"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={openCalendly} className="btn-primary text-base px-8 py-4">
              Get a Free Strategy Session
            </button>
            <Link
              href="/case-studies"
              className="btn-ghost text-base px-8 py-4 inline-flex items-center gap-2"
            >
              View Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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

      {/* ═══════ ANIMATED STATS ═══════ */}
      <Section className="bg-ink-mid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center p-10 rounded-2xl border border-ink-border bg-ink relative overflow-hidden group hover:border-ember/30 transition-all duration-500"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-ember/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-display font-bold text-5xl md:text-6xl text-ember mb-3 relative z-10">
                <CountUp value={stat.value} />
              </p>
              <p className="text-sm text-white/50 relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════ WHY OMNIVANCE FOR [INDUSTRY] ═══════ */}
      <Section className="bg-ink">
        <div className="text-center mb-12">
          <h5 className="mb-3">WHY OMNIVANCE</h5>
          <h2 className="max-w-3xl mx-auto">
            Why {data.title} Choose Omnivance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyCards.map((card, i) => {
            const CardIcon = iconMap[card.icon]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="service-card relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-ember/10 border border-ember/20 flex items-center justify-center mb-5">
                  {CardIcon && <CardIcon className="w-6 h-6 text-ember" />}
                </div>
                <h3 className="text-lg mb-3">{card.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* ═══════ CONTENT SECTIONS with SCROLLSPY SIDEBAR ═══════ */}
      <ScrollspyContent sections={data.sections} title={data.title} />

      {/* ═══════ SERVICES GRID ═══════ */}
      <Section className="bg-ink-mid">
        <div className="text-center mb-12">
          <h5 className="mb-3">OUR SERVICES</h5>
          <h2 className="max-w-3xl mx-auto mb-4">
            Marketing Services for {data.title}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We combine multiple channels into one unified growth strategy built specifically for {data.title.toLowerCase()}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedServices.map((service, i) => {
            if (!service) return null
            const ServiceIcon = iconMap[service.icon]
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="service-card block p-6 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4">
                    {ServiceIcon && (
                      <div className="w-10 h-10 rounded-lg bg-ember/10 border border-ember/20 flex items-center justify-center flex-shrink-0">
                        <ServiceIcon className="w-5 h-5 text-ember" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-base font-semibold mb-1.5 group-hover:text-ember transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/40 mb-3">{service.description}</p>
                      <span className="text-ember text-sm inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* ═══════ FAQ ACCORDION ═══════ */}
      {data.faqs.length > 0 && (
        <Section className="bg-ink">
          <div className="text-center mb-12">
            <h5 className="mb-3">FAQ</h5>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="bg-ink-mid section-padding relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--grad-glow)' }} />

        {/* Animated border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ember/40 to-transparent" />

        <div className="container-max mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="mb-4">GET STARTED</h5>
              <h2 className="mb-6">
                Ready to Dominate Your{' '}
                <span className="text-ember">{data.title}</span>{' '}
                Market?
              </h2>
              <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
                Book a free strategy session with our team. We&apos;ll audit your current marketing and show you exactly where the growth opportunities are.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={openCalendly} className="btn-primary text-base px-10 py-4">
                  Schedule Your Free Consultation
                </button>
                <Link
                  href="/contact"
                  className="text-sm text-white/50 hover:text-ember transition-colors inline-flex items-center gap-1"
                >
                  Or contact us directly <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/30">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-ember/60" /> No contracts required</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-ember/60" /> Free marketing audit</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-ember/60" /> Results in 30 days</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
