/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151515",
        panel: "rgba(74, 76, 77, 0.7)",
      }
    },
  },
  plugins: [],
}
