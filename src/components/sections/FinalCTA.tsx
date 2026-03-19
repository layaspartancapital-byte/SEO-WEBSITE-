'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'

export default function FinalCTA() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="bg-ink section-padding relative overflow-hidden" ref={ref}>
      {/* Ember glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--grad-glow)' }}
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="container-max mx-auto text-center relative z-10"
      >
        <h5 className="mb-4">READY TO SCALE?</h5>
        <h2 className="mb-4 max-w-3xl mx-auto">
          Your Next $500K Starts With One Conversation.
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Free strategy call. No contracts. No pitch decks. Just a clear plan for your growth.
        </p>

        <button onClick={openCalendly} className="btn-primary text-base px-10 py-4 max-w-xs mx-auto">
          Book a Free Strategy Call
        </button>

        <div className="mt-4">
          <a href="mailto:omnivancemedia@gmail.com" className="btn-ghost text-sm px-6 py-2.5">
            Or email us →
          </a>
        </div>

        <p className="mt-6 text-[13px] text-white/40">
          We limit new client intake each quarter — spots fill fast.
        </p>
      </motion.div>
    </section>
  )
}
