'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { fadeUp } from '@/lib/animations'
import { openCalendly } from '@/lib/useCalendlyModal'

function WaveformBars({ side }: { side: 'left' | 'right' }) {
  const bars = Array.from({ length: 5 })
  return (
    <div
      className={`hidden lg:flex flex-col items-center justify-center gap-1 ${
        side === 'left' ? 'mr-4' : 'ml-4'
      }`}
    >
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-ember/60"
          animate={{ height: [8, 20 + Math.random() * 16, 8] }}
          transition={{
            duration: 0.8 + Math.random() * 0.6,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  )
}

export default function VSLSection() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="bg-ink section-padding" ref={ref}>
      <motion.div variants={fadeUp} initial="hidden" animate={controls} className="container-max mx-auto text-center">
        <h5 className="mb-4">SEE THE OMNIVANCE SYSTEM</h5>
        <h2 className="mb-4 max-w-4xl mx-auto">
          Watch How We Build Brands That Dominate Every Channel
        </h2>
        <p className="mb-10 max-w-2xl mx-auto">
          From search rankings to social media — see the Omnivance system in action
        </p>

        {/* Video Player with Waveform */}
        <div className="flex items-center justify-center">
          <WaveformBars side="left" />

          <div className="relative max-w-[900px] w-full rounded-xl overflow-hidden border border-ember/30 shadow-[0_0_80px_rgba(232,101,26,0.12)]">
            {/* Episode title overlay */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent px-6 py-4 pointer-events-none">
              <p className="text-[11px] uppercase tracking-widest text-ember font-semibold">Omnivance Media • Brand Growth Series</p>
              <p className="text-sm text-white/70 mt-0.5">Ep. 1 — The Full-Channel Growth System</p>
            </div>

            <div className="aspect-video relative">
              <iframe
                src="https://player.vimeo.com/video/1175612082?autoplay=0&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Omnivance Media — The Full-Channel Growth System"
              />
            </div>
          </div>

          <WaveformBars side="right" />
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
