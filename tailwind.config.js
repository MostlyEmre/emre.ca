module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: [
      "text-red-400",
      "text-blue-400",
      "text-yellow-400",
      "text-purple-400",
      "text-pink-400",
      "text-gray-900",
      "text-green-400",
      "hover:text-green-400",
      "hover:text-blue-400",
      "hover:text-pink-400",
      "hover:text-red-400",
      "hover:text-purple-400",
      "hover:text-yellow-400",
      "hover:bg-green-300",
      "hover:bg-blue-300",
      "hover:bg-pink-300",
      "hover:bg-red-300",
      "hover:bg-purple-300",
      "hover:bg-yellow-300",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};

// "./src/**/*.{js,jsx,ts,tsx}"
