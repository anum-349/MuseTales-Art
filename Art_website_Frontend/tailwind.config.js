/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold'), color: theme('colors.black') },
        'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.semibold') },
        'p': { fontSize: theme('fontSize.base'), color: theme('colors.gray.700'), lineHeight: theme('lineHeight.relaxed') },
        'button': {
          padding: `${theme('spacing.2')} ${theme('spacing.6')}`,
        },
        'b': {
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.black'),
        }
      });
    })
  ],
}

