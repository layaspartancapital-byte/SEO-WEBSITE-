'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { openCalendly } from '@/lib/useCalendlyModal'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={openCalendly}
          className="fixed bottom-7 right-7 z-[9999] w-14 h-14 rounded-full bg-ember flex items-center justify-center shadow-lg hover:bg-ember-bright transition-colors animate-float-bounce group"
          aria-label="Book a Free Call"
        >
          <Calendar className="w-6 h-6 text-white" />
          <span className="absolute right-full mr-3 bg-ink-soft text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-ink-border">
            Book a Free Call
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
