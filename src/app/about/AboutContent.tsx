'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'
import { STATS } from '@/lib/constants'
import CountUp from 'react-countup'

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, controls } = useScrollReveal()
  return (
    <motion.section ref={ref} variants={fadeUp} initial="hidden" animate={controls} className={`section-padding ${className}`}>
      <div className="container-max mx-auto">{children}</div>
    </motion.section>
  )
}

export default function AboutContent() {
  const { ref, isInView } = useScrollReveal()

  return (
    <>
      <section className="bg-ink pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max mx-auto">
          <h1 className="mb-4 max-w-4xl">
            We Build Growth Machines for Ambitious Brands
          </h1>
          <p className="text-lg max-w-2xl">
            Omnivance Media Group is a full-service marketing and technology agency that combines every discipline under one roof — so you get one team, one strategy, and one relentless focus on results.
          </p>
        </div>
      </section>

      <Section className="bg-ink-mid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="mb-4">OUR STORY</h5>
            <h2 className="mb-4">Born From Frustration With Broken Agencies</h2>
            <p className="mb-4">
              We started Omnivance because we saw the same problem everywhere: businesses juggling 4-6 different vendors for their marketing — one for SEO, one for ads, one for creative, one for their CRM — with nobody owning the full picture.
            </p>
            <p className="mb-4">
              The result? Strategies that contradict each other, finger-pointing when numbers drop, and business owners spending more time managing agencies than running their companies.
            </p>
            <p>
              Omnivance was built to end that cycle. One team handles everything — from search rankings to TV screens, from CRM automation to custom software. Every channel connected. Every decision data-driven. Every result tracked to the dollar.
            </p>
          </div>
          <div className="bg-ink-mid border border-ink-border rounded-xl aspect-video flex items-center justify-center">
            <span className="text-white/20 text-sm">Team Photo</span>
          </div>
        </div>
      </Section>

      <section className="bg-ink section-padding" ref={ref}>
        <div className="container-max mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-ember mb-1">
                  {stat.prefix || ''}
                  {isInView ? <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce /> : '0'}
                  {stat.suffix || ''}
                </div>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-ink-mid">
        <div className="text-center mb-12">
          <h5 className="mb-4">OUR VALUES</h5>
          <h2>What Drives Every Decision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Radical Transparency',
              desc: 'Real-time dashboards. No vanity metrics. You see exactly where every dollar goes and what it produces.',
            },
            {
              title: 'Ownership Over Excuses',
              desc: 'When something breaks, we fix it. When results dip, we diagnose it same-day. No blame games, no finger-pointing.',
            },
            {
              title: 'Speed as a Strategy',
              desc: 'Markets move fast. We launch campaigns in days, not months. Build software in weeks, not quarters. Speed compounds.',
            },
          ].map((v) => (
            <div key={v.title} className="service-card text-center">
              <h3 className="text-lg mb-3">{v.title}</h3>
              <p className="text-sm text-white/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--grad-glow)' }} />
        <div className="container-max mx-auto text-center relative z-10">
          <h2 className="mb-4">Ready to Work With a Team That Actually Delivers?</h2>
          <p className="mb-8 max-w-xl mx-auto">
            Book a free strategy session and see why 300+ brands trust Omnivance with their growth.
          </p>
          <button onClick={openCalendly} className="btn-primary text-base px-10 py-4">
            Book a Free Strategy Call
          </button>
        </div>
      </section>
    </>
  )
}
