/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: '#181717',
        linkedin: '#0A66C2',
        x: '#000000',
        medium: '#000000',
        kaggle: '#20BEFF',
        spotify: '#1DB954',
        codepen: '#000000',
        email: '#b5a76a',
      },
    },
  },
  plugins: [
    require('shadcn-ui/plugin'),
  ],
};
