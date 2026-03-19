import { Variants } from 'framer-motion'

const springEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: springEase },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: springEase },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: springEase },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: springEase },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: springEase },
  },
}

export const stagger = (delay: number = 0.08) => ({
  visible: {
    transition: {
      staggerChildren: delay,
    },
  },
})

export const heroSequence = {
  nav: { delay: 0 },
  overline: { delay: 0.2 },
  heading: { delay: 0.35, stagger: 0.08 },
  subheading: { delay: 0.7 },
  cta: { delay: 0.85 },
  trust: { delay: 1.0 },
}
