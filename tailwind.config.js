/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-step": "rotate 60s steps(60) infinite",
        "rotate-step-cc": "rotatecc 60s steps(60) infinite",
      },
      keyframes: {
        rotate: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotatecc: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
