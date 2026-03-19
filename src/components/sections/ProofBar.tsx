'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { STATS } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'

const ROW_1 = [
  'Forbes', 'Entrepreneur', 'Business Insider', 'AdWeek', 'Inc Magazine',
  'Marketing Week', 'Fast Company', 'TechCrunch', 'Wired', 'HubSpot Blog',
  'Search Engine Journal', 'Moz',
]

const ROW_2 = [
  'Neil Patel', 'Content Marketing Institute', 'PR Newswire', 'Cision',
  'PR Web', 'Business Wire', 'Globe Newswire', 'Yahoo Finance', 'Reuters',
  'AP News', 'MarketWatch', 'Benzinga',
]

function LogoItem({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center justify-center mx-8 h-8 px-5 text-white/[0.6] text-[13px] font-semibold tracking-wide whitespace-nowrap flex-shrink-0 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(232,101,26,0.5)] cursor-default select-none">
      {name}
    </span>
  )
}

export default function ProofBar() {
  const { ref, controls, isInView } = useScrollReveal()

  return (
    <section id="proof" className="bg-ink-mid py-16" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls}>
        <h6 className="text-center mb-8">FEATURED IN &amp; DISTRIBUTED THROUGH</h6>
      </motion.div>

      {/* Marquee Row 1 — scrolls left */}
      <div className="overflow-hidden mb-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...ROW_1, ...ROW_1, ...ROW_1].map((name, i) => (
            <LogoItem key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div className="overflow-hidden mb-12">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...ROW_2, ...ROW_2, ...ROW_2].map((name, i) => (
            <LogoItem key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 text-center ${
                i < STATS.length - 1 ? 'lg:border-r border-white/10' : ''
              } ${i === 0 || i === 1 ? 'border-b lg:border-b-0 border-white/10' : ''}`}
            >
              <div className="font-display font-bold text-3xl md:text-4xl text-ember mb-1">
                {stat.prefix || ''}
                {isInView ? (
                  <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
                ) : (
                  '0'
                )}
                {stat.suffix || ''}
              </div>
              <p className="text-[13px] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
