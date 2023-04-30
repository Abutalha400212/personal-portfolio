/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideTop: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 100, transform: "translateY(0px)" },
        },
        slideBottom: {
          "0%": { opacity: 0, transform: "translateY(-100px)" },
          "100%": { opacity: 100, transform: "translateY(0px)" },
        },
        slideBottomNav: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
            background: "#0f0c29",
          },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 100, transform: "translateY(0px)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 100, transform: "translateY(0px)" },
        },
        zoomIn: {
          "0%": { opacity: 0, transform: "scale(0)" },

          "100%": { opacity: 100, transform: "scale(1)" },
        },
      },
      animation: {
        slideTop: "slideTop 1s forwards",
        slideBottom: "slideBottom 1s 0.5s forwards ",
        slideBottomNav: "slideBottomNav 0.8s forwards ",
        slideRight: "slideRight 1s 0.6s forwards ",
        slideLeft: "slideLeft 1s  0.7s forwards",
        zoomIn: "zoomIn 1s 0.8s forwards ",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
