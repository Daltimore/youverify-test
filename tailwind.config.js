/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#46B2C8",
        secondary: "#0F808C",
        dark: "#1C697A",
        light: "#C2E2E9",
        white: "#FDFDFD",
        red: "#D72830",
        black: "#200E32"
      },
      textColor: {
        secondary: "#C2E2E9",
        primary: "#0F808C",
        lightgrey: "#ACB6BE",
      }
    },
  },
  plugins: [],
}
