const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...fontFamily.sans],
      },
      colors: {
        blue: {
          "marine-dark": "hsl(213, 96%, 18%)",
          "marine-lighter": "hsl(214, 71%, 31%)",
          standard: "hsl(243, 100%, 62%)",
          "standard-lighter": "hsl(243, 93%, 77%)",
          "pastel-light": "hsl(228, 100%, 84%)",
          light: "hsl(206, 94%, 87%)",
          lighter: "hsla(206, 94%, 87%, 0.8)",
        },
        red: {
          strawberry: "hsl(354, 84%, 57%)",
        },
        gray: {
          cool: "hsl(231, 11%, 63%)",
          light: "hsl(229, 24%, 87%)",
        },
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
      screens: {
        tall: {
          raw: "(min-height: 800px)",
        },
      },
    },
  },
  plugins: [],
};
