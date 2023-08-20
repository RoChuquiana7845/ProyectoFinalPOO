/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animate-flip-in-ver-right": {
          animation:
            "flip-in-ver-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        },
        "@keyframes flip-in-ver-right": {
          "0%": {
            transform: "rotateX(80deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
