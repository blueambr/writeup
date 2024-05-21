/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdoc,mdx,yaml,json}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        body: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        "@font-face": [
          {
            fontFamily: "Lato",
            fontWeight: 400,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Lato-Regular.woff2") format("woff2")',
          },
          {
            fontFamily: "Lato",
            fontWeight: 700,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Lato-Bold.woff2") format("woff2")',
          },
        ],
      });
    }),
    require("@tailwindcss/typography"),
  ],
};
