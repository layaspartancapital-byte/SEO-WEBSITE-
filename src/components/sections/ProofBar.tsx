'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { STATS } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import { ROW_1_LOGOS, ROW_2_LOGOS } from '@/components/MediaLogos'

export default function ProofBar() {
  const { ref, controls, isInView } = useScrollReveal()

  return (
    <section id="proof" className="bg-ink-mid py-16" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls}>
        <h6 className="text-center mb-8">FEATURED IN &amp; DISTRIBUTED THROUGH</h6>
      </motion.div>

      {/* Marquee Row 1 — scrolls left */}
      <div className="overflow-hidden mb-6">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...ROW_1_LOGOS, ...ROW_1_LOGOS, ...ROW_1_LOGOS].map(({ key, Logo }, i) => (
            <div key={`r1-${key}-${i}`} className="flex-shrink-0 mx-8">
              <Logo className="h-[28px] w-auto text-white/[0.45] hover:text-white hover:drop-shadow-[0_0_8px_rgba(232,101,26,0.5)] transition-all duration-300 cursor-default" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div className="overflow-hidden mb-12">
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {[...ROW_2_LOGOS, ...ROW_2_LOGOS, ...ROW_2_LOGOS].map(({ key, Logo }, i) => (
            <div key={`r2-${key}-${i}`} className="flex-shrink-0 mx-8">
              <Logo className="h-[28px] w-auto text-white/[0.45] hover:text-white hover:drop-shadow-[0_0_8px_rgba(232,101,26,0.5)] transition-all duration-300 cursor-default" />
            </div>
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
