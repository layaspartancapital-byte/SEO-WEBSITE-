'use client'

import { openCalendly } from '@/lib/useCalendlyModal'

export default function BlogCTAClient() {
  return (
    <button onClick={openCalendly} className="btn-primary text-base px-8 py-4">
      Book a Free Strategy Call
    </button>
  )
}
