'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp, stagger } from '@/lib/animations'
import { PROCESS_STEPS } from '@/lib/constants'

export default function HowWeWork() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="how-we-work" className="bg-ink-mid section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto">
        <div className="text-center mb-16">
          <h5 className="mb-4">THE PROCESS</h5>
          <h2>From Day One to Dominant</h2>
        </div>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="relative">
              <span className="font-display font-bold text-[80px] lg:text-[100px] text-ember/20 absolute -top-6 -left-2 select-none leading-none">
                {step.number}
              </span>
              <div className="relative pt-12">
                <h3 className="text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="text-sm text-white/40 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-ember flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
