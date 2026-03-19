'use client'

// Simple state management for Calendly modal
let listeners: Array<(open: boolean) => void> = []
let isOpen = false

export function openCalendly() {
  isOpen = true
  listeners.forEach((l) => l(true))
}

export function closeCalendly() {
  isOpen = false
  listeners.forEach((l) => l(false))
}

export function subscribeCalendly(listener: (open: boolean) => void) {
  listeners.push(listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

export function getCalendlyState() {
  return isOpen
}
