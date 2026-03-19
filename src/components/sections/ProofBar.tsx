'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { STATS } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'

export default function ProofBar() {
  const { ref, controls, isInView } = useScrollReveal()

  const clientLogos = Array.from({ length: 10 }, (_, i) => `Client ${i + 1}`)
  const mediaLogos = ['Forbes', 'AdWeek', 'Entrepreneur', 'Inc', 'Marketing Week', 'Business Insider']

  return (
    <section id="proof" className="bg-ink-mid py-16" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls}>
        <h6 className="text-center mb-8">FEATURED IN & TRUSTED BY</h6>
      </motion.div>

      {/* Marquee Row 1 - Left */}
      <div className="overflow-hidden mb-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 h-8 w-24 bg-white/10 rounded text-white/30 text-xs flex-shrink-0"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right */}
      <div className="overflow-hidden mb-12">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 h-8 px-6 bg-white/10 rounded text-white/30 text-xs flex-shrink-0"
            >
              {logo}
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
