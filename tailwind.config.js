/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'sans': ['Open Sans', 'sans-serif'],
        'pops': ['Poppins', 'sans-serif']
    },
    colors: {
      'primary': '#5F35F5',
      'shadow' : '(0px 4px 4px rgba(0, 0, 0, 0.25));',
      'overlay': 'rgba(0, 0, 0, 0.41);'
    }
  },
},
  plugins: [],
}
