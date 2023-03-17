/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        twitch: {
          "0%, 100%": { transform: "rotate(57deg)" },
          "50%": { transform: "rotate(63deg)" },
        },
      },
    },
  },
  plugins: [],
};
