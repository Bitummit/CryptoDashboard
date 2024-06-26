const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        green: "#4CBB17",
        red: "#D2042D",
        shiwa: "#0F4561",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        9: "9 9 0%",
      },
      height: {
        70: "70px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
