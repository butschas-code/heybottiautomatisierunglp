/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Raleway', 'sans-serif'],
      },
      colors: {
        botti: {
          bg: '#0a0a0a',
          card: '#111111',
          card2: '#161616',
          teal: '#28E6B4',
          'teal-dark': '#1db891',
          'teal-dim': 'rgba(40,230,180,0.12)',
          border: 'rgba(255,255,255,0.07)',
          'border-light': 'rgba(255,255,255,0.12)',
          muted: 'rgba(255,255,255,0.55)',
          subtle: 'rgba(255,255,255,0.35)',
        },
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #28E6B4 0%, #1db891 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #0f2a22 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
