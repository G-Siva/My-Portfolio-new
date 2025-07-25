// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          bebas: ['var(--font-bebas)', 'sans-serif'],
          manrope: ['var(--font-manrope)', 'sans-serif']
        }
      }
    },
    plugins: []
  }
  