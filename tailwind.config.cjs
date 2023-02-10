/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        darkblue: {
          300: 'hsl(217, 54%, 11%)',
          200: 'hsl(216, 50%, 16%)',
          100: 'hsl(215, 32%, 27%)',
        },
        softblue: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
      },
      fontFamily: {
        outfit: ['outfit'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
