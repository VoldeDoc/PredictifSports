import flowbite from "flowbite-react/tailwind";
import { colors } from "tailwindcss/colors";
import { plugin } from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    'index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  darkMode: 'selector',
  theme: {
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin
  ]
}