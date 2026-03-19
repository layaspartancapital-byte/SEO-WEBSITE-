import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#080808',
          soft: '#111111',
          mid: '#161616',
          border: '#2a2a2a',
        },
        ember: {
          DEFAULT: '#E8651A',
          bright: '#FF7A2F',
          dim: '#B84D10',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        'ember-pulse': {
          '0%': { boxShadow: '0 0 0px rgba(232,101,26,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(232,101,26,0.7)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'float-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'ember-pulse': 'ember-pulse 2.5s ease-in-out infinite alternate',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 35s linear infinite reverse',
        'float-bounce': 'float-bounce 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
