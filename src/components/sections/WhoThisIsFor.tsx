'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp, slideLeft, slideRight } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'

const forYou = [
  'Doing $300K+/year and want to break $1M',
  'Tired of agencies that promise and underdeliver',
  'Want one team for everything, not 6 vendors',
  'Ready to invest in real marketing',
  'Want full transparency — dashboards and real numbers',
]

const notForYou = [
  'You want the cheapest option',
  'You want to micromanage every task',
  "You're not ready to scale aggressively",
  'You prefer slow, safe, incremental results',
]

export default function WhoThisIsFor() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="section-padding" style={{ background: 'var(--grad-ember)' }} ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div variants={slideLeft} initial="hidden" animate={controls}>
            <h5 className="mb-4 text-ink">IS THIS YOU?</h5>
            <h2 className="mb-4 text-ink">
              We Work With Brands Ready to Scale Past $500K
            </h2>
            <p className="text-ink/80 mb-6">
              Omnivance is selective. We take on clients who are serious and move fast.
            </p>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div variants={slideRight} initial="hidden" animate={controls}>
            <h5 className="mb-4 text-ink/60">This is NOT for you if...</h5>
            <ul className="space-y-3 mt-8">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/70">
                  <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={openCalendly}
            className="inline-flex items-center justify-center px-8 py-4 rounded-[20px] font-medium text-base bg-ink text-white hover:bg-ink-soft transition-colors"
          >
            Book Your Strategy Call — It&apos;s Free
          </button>
          <p className="mt-3 text-xs text-ink/60">
            Limited to 10 new clients per quarter.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
