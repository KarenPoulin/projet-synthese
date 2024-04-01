/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  media: false,
  theme: {
    extend: {},
/*     screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '900px',
      'xl': '1280px',
    }, */
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

