/** @type {import('tailwindcss').Config} */
// importacao dos tokens para customizar o tema
import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/fontFamily"

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}