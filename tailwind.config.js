/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'], // For Headings
        body: ['Space Grotesk', 'sans-serif'], // For Text
      },
      colors: {
        'void': '#050505',      // Background
        'surface': '#121212',   // Cards
        'muted': '#888888',     // Secondary text
        'accent': '#CCFF00',    // Acid Lime (The "Unique" pop)
      },
      backgroundImage: {
        'grain': "url('/noise.png')", // We will add a CSS noise later
      }
    },
  },
  plugins: [],
}