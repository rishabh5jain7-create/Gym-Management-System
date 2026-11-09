/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#08090b',
          900: '#0e1014',
          850: '#13161c',
          800: '#191d25',
          750: '#21262f',
          700: '#2a313c',
          600: '#3a4250',
          500: '#4a5462',
        },
        orange: {
          glow: '#ff6a1a',
          DEFAULT: '#ff5c00',
          300: '#ff9d5c',
          400: '#ff8a3d',
          500: '#ff6a1a',
          600: '#e65300',
          700: '#cc4400',
        },
        neon: {
          green: '#39ff88',
          lime: '#c6ff3d',
          DEFAULT: '#39ff88',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(255,106,26,0.35)',
        'glow-lg': '0 0 40px rgba(255,106,26,0.25)',
        neon: '0 0 24px rgba(57,255,136,0.30)',
        card: '0 16px 40px -12px rgba(0,0,0,0.8)',
        'card-hover': '0 20px 50px -12px rgba(0,0,0,0.9)',
        inner: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        'grid-dark': "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        'orange-gradient': 'linear-gradient(135deg, #ff5c00 0%, #ff8a3d 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(8,9,11,0.6) 0%, rgba(8,9,11,0.95) 100%)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInFast: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.96)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        slideIn: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        pulseGlow: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        glowPulse: { '0%,100%': { boxShadow: '0 0 20px rgba(255,106,26,0.3)' }, '50%': { boxShadow: '0 0 30px rgba(255,106,26,0.5)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out both',
        fadeInFast: 'fadeInFast 0.3s ease-out both',
        scaleIn: 'scaleIn 0.2s ease-out both',
        slideIn: 'slideIn 0.3s ease-out both',
        slideUp: 'slideUp 0.5s ease-out both',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
