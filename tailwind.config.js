/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // nextui code
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundColor: {
        'customColor': 'linear-gradient(0deg, rgba(81, 51, 149, 0.05) 0%, rgba(81, 51, 149, 0.05) 100%), #F6F2FF',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
       
      },
    }),
  ],
};
