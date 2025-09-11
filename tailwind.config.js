/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      extend: {
        backgroundImage: {
          "hero-image": "url('/background.png')",
        },
        fontFamily: {
          mono: ["var(--font-plex-mono)", "monospace"],
        },
      },
    },
  },
  plugins: [],
};
