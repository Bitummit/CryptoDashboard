/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#4CBB17',
        'red': " 	#D2042D"
      },
    },
  },
  plugins: [],
}

