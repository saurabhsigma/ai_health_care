/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animation: 'timing-function: cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animation: 'timing-function: cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};