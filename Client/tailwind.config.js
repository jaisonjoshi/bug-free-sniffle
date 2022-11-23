/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'evergreen': '#2AF599',
      'whiteglow': '#FFFFFF',
      'blacky': {
        'dark': '#000000',
        'medium': '#1A1A1A',
        'light': '#303030',
        'bright': '#4E4E4E',
      },
      'graydust': {
        'extralight': '#F7F7F7',
        'light': '#F6F6F6',
        'normal': '#949494',
        'medium': '#666666',
        'dark': '#000000a6',
      },
      'status': {
        '100': '#2AF599',
        '150': '#BCFFE1',
        '200': '#126BF0',
        '250': '#EEF6FF',
        '300': '#FF0000',
        '350': '#FEF2F2',

      }
    },
    extend: {

      backgroundImage: {
        'hero-image': 'url("./Pages/Assets/b_img1.png")',

        'green-slop': "url('/public/images/Greenbg.png')",
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide'),
  require('flowbite/plugin')],

}
