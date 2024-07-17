const flowbite = require("flowbite-react/tailwind");
const tailwind = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        green: "#4CBB17",
        red: "#D2042D",
        blue: "#1876E2",
        shiwa: {
          '50': "#6EC1E4",
          '100': "#5CAED1",
          '200': "#4F9CBD",
          '300': "#4188A6",
          '400': "#4A6DA1",
          '500': "#327592",
          '600': "#256681",
          '700': "#1B566F",
          '800': "#13455A",
          '900': "#0C3243",

        },
        colorBgPrimary: "var(--color-bg-primary)",
        colorBgSecondary: "var(--color-bg-secondary)",
        colorBgThird: "var(--color-bg-third)",
        colorTextPrimary: "var(--color-text-primary)",
        colorTextGray: "var(--color-text-gray)",
        colorTextGraySecond: "var(--color-text-gray-second)",
        colorBorder: "var(--color-border)",
        colorBorderNone: "var(--color-border-none)",
        
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
  plugins: [
    flowbite.plugin(),
    tailwind(({ addVariant }) => {
      addVariant("shiwa", ".shiwa &");
    }),
  ],
};
