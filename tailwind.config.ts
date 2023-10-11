import type { Config } from 'tailwindcss'

export default {
  // content: ['./app/**/*.{js,jsx,ts,tsx}'],
  content: [ 
    './app/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config

