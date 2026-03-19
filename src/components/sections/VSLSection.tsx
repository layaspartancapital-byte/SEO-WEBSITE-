'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Play } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'
import { SITE } from '@/lib/constants'
import { useState } from 'react'

const ReactPlayer = dynamic(() => import('react-player').then((mod) => mod.default), {
  ssr: false,
}) as any

export default function VSLSection() {
  const { ref, controls } = useScrollReveal()
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-ink section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto text-center">
        <h5 className="mb-4">FREE TRAINING — 47 MINUTES</h5>
        <h2 className="mb-4 max-w-4xl mx-auto">
          Watch How We Add $150K–$500K to Businesses Like Yours in 90 Days
        </h2>
        <p className="mb-10 max-w-2xl mx-auto">
          The exact playbook our clients use. No fluff. No pitch. Just the system.
        </p>

        {/* Video Player */}
        <div className="relative max-w-[900px] mx-auto rounded-xl overflow-hidden border border-ember/30 shadow-[0_0_80px_rgba(232,101,26,0.12)]">
          <div className="aspect-video relative">
            {!playing && (
              <div
                className="absolute inset-0 bg-ink-mid flex items-center justify-center cursor-pointer z-10"
                onClick={() => setPlaying(true)}
              >
                <div className="w-20 h-20 rounded-full bg-ember flex items-center justify-center shadow-lg hover:bg-ember-bright transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            )}
            <ReactPlayer
              url={SITE.vslVideo}
              width="100%"
              height="100%"
              playing={playing}
              controls
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        </div>

        <p className="mt-8 text-sm text-white/40 mb-4">
          Or skip the video and talk to us directly
        </p>
        <button onClick={openCalendly} className="btn-primary">
          Book a Strategy Call
        </button>
      </motion.div>
    </section>
  )
}
