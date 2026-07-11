/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#8B5CF6',
        accent: '#A855F7',
        bg: '#030712',
        card: '#111827',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(139, 92, 246, 0.45)',
        'glow-lg': '0 0 45px rgba(139, 92, 246, 0.35)',
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 55%)',
        'hero-radial':
          'radial-gradient(circle at 70% 30%, rgba(168,85,247,0.35), transparent 60%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
