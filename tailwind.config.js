/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Royal Blue — Primary
        royal: {
          50: '#eef3ff',
          100: '#dae5ff',
          200: '#bccfff',
          300: '#8eaeff',
          400: '#5882ff',
          500: '#2f57f5',
          600: '#1d3fe0',
          700: '#1730b8',
          800: '#192c94',
          900: '#1a2b75',
          950: '#141c47',
        },
        // Light Beige — Secondary
        beige: {
          50: '#fdfbf7',
          100: '#faf5ec',
          200: '#f4ead4',
          300: '#ecdab6',
          400: '#e1c389',
          500: '#d6ac63',
          600: '#c69247',
          700: '#a5743b',
          800: '#865d35',
          900: '#6e4d2e',
        },
        // Black / Accent
        ink: {
          DEFAULT: '#0b0b0f',
          800: '#15151c',
          700: '#1f1f29',
        },
        // Silver / Accent 2
        silver: {
          light: '#f1f2f5',
          DEFAULT: '#c7ccd6',
          dark: '#9aa1ad',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 28, 71, 0.25)',
        glow: '0 0 40px -8px rgba(47, 87, 245, 0.45)',
        card: '0 24px 60px -20px rgba(11, 11, 15, 0.35)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #1a2b75 0%, #2f57f5 100%)',
        'beige-gradient': 'linear-gradient(135deg, #faf5ec 0%, #f4ead4 100%)',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
