import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-base)',
        surface: 'var(--color-surface)',
        glass: 'var(--color-glass)',
        accent: 'var(--color-accent)',
        highlight: 'var(--color-highlight)',
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(90, 193, 255, 0.35)',
        'glow-strong': '0 0 80px rgba(153, 107, 255, 0.35)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(92, 198, 255, 0.25), transparent 55%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 12s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
