module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: ["text-red-400", "text-blue-400", "text-yellow-400", "text-purple-400", "text-pink-400", "text-gray-900", "text-blue-800", "text-pink-800", "text-green-500"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

// "./src/**/*.{js,jsx,ts,tsx}"
