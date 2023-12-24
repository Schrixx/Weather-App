/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131214",
        surface: "#1D1C1F",
        surfaceOutline: "#2E2D31",
        surfaceText: "#DDDAE5",
        panel: "rgba(74, 76, 77, 0.7)",
      }
    },
  },
  plugins: [],
}
