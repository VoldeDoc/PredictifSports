import type { Config } from 'tailwindcss'
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    'index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  darkMode: 'selector',
  theme: {
    // colors: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ]
} as Config;