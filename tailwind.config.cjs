/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'neu': '5px 5px 20px rgba(255, 255, 255, 0.5)'
      },
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
