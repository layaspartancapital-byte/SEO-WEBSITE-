'use client'

import { useEffect, useState, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from 'tsparticles-slim'

export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(true)
  const [init, setInit] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isMobile) return
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine as any)
    }).then(() => setInit(true))
  }, [isMobile])

  const options = useMemo(() => ({
    fullScreen: false,
    particles: {
      number: { value: 40 },
      color: { value: '#E8651A' },
      opacity: { value: 0.25 },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.4,
        direction: 'none' as const,
        random: true,
        outModes: { default: 'out' as const },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' as const },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
      },
    },
  }), [])

  if (isMobile || !init) return null

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 z-0"
      options={options as any}
    />
  )
}
