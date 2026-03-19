'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { subscribeCalendly, closeCalendly, getCalendlyState } from '@/lib/useCalendlyModal'
import { SITE } from '@/lib/constants'

export default function CalendlyModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(getCalendlyState())
    return subscribeCalendly(setOpen)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeCalendly()
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          onClick={closeCalendly}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Book a strategy call"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-[10px]" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[900px] bg-ink-soft rounded-2xl overflow-hidden"
            style={{ height: '80vh', maxHeight: '700px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCalendly}
              className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <iframe
              src={`${SITE.calendly}?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=E8651A`}
              className="w-full h-full border-0"
              title="Schedule a strategy call"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
