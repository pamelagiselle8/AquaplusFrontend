const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mistral: ["Mistral", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "ap",
      themes: {
        aquaplus: {
          extend: "light", // <- inherit default values from light theme
          colors: {
            background: "#ffffff",
            foreground: "#072939",
            primary: "#347cdc", // hsl(var(--ap-primary))
            secondary: "#57e2c7",
          },
        },
      },
    }),
  ],
};
