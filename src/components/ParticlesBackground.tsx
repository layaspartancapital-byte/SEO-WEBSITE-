'use client'

import { useEffect, useRef } from 'react'

interface Orb {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  opacity: number
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = 0
    let height = 0

    const orbs: Orb[] = []
    const ORB_COUNT = 18

    function resize() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      canvas!.width = width * devicePixelRatio
      canvas!.height = height * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
    }

    function initOrbs() {
      orbs.length = 0
      for (let i = 0; i < ORB_COUNT; i++) {
        orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 40 + Math.random() * 120,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: 0.03 + Math.random() * 0.06,
        })
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)

      for (const orb of orbs) {
        orb.x += orb.vx
        orb.y += orb.vy

        // Wrap around edges
        if (orb.x < -orb.r) orb.x = width + orb.r
        if (orb.x > width + orb.r) orb.x = -orb.r
        if (orb.y < -orb.r) orb.y = height + orb.r
        if (orb.y > height + orb.r) orb.y = -orb.r

        const grad = ctx!.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        grad.addColorStop(0, `rgba(232, 101, 26, ${orb.opacity})`)
        grad.addColorStop(1, 'rgba(232, 101, 26, 0)')

        ctx!.beginPath()
        ctx!.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
        ctx!.fillStyle = grad
        ctx!.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    initOrbs()
    draw()

    window.addEventListener('resize', () => {
      resize()
      initOrbs()
    })

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
