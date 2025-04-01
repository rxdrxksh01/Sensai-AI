/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "custom-bounce": "customBounce 1.5s ease-in-out infinite", // Adjust the duration for less bounce
      },
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translateY(0)", // Start and end position
          },
          "50%": {
            transform: "translateY(-5px)", // Less intense bounce
          },
        },
      },
    },
  },
  plugins: [],
};
