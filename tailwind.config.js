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
      colors: {
        primary: "#46B2C8",
        secondary: "#0F808C",
        dark: "#1C697A",
        light: "#C2E2E9",
        white: "#FDFDFD",
        red: "#D72830",
        black: "#200E32"
      }
    },
  },
  plugins: [],
}
