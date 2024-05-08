import flowbitePlugin from 'flowbite/plugin';
import flowbite  from "flowbite-react/tailwind"
// /** @type {import('tailwindcss').Config} **/
export default {
  
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite,
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,
    flowbite,
  ],
}



