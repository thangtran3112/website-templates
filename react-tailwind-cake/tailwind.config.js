/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      animation: {
        loader: "loader 1.3s infinite ease-in-out",
      },
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        "shuttle-gray": {
          50: "#f5f6f6",
          100: "#e5e6e8",
          200: "#ced0d3",
          300: "#acb0b4",
          400: "#83888d",
          500: "#686d72",
          600: "#5f6368",
          700: "#4c4f52",
          800: "#434547",
          900: "#3b3c3e",
          950: "#252627",
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
      keyframes: {
        loader: {
          "0%, 100%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
