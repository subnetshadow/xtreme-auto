/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'xad-black':   '#08080d',
        'xad-dark':    '#191e24',
        'xad-card':    '#1d2130',
        'xad-medium':  '#25272d',
        'xad-muted':   '#7e7e8f',
        'xad-gold':    '#d89235',
        'xad-orange':  '#e85b03',
        'xad-warm':    '#ffa023',
        'xad-blue':    '#3cb0f5',
        'xad-bright':  '#184cfa',
        'xad-white':   '#ffffff',
        'xad-gray':    '#cccccc',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
