import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#BDC2F6",
        darkPurple: "#3C0195",
        saladGreen: "#E3FD9A",
        lightBlack: "#101010",
        raisinBlack: "#262626",
      },
      screens: {
        sm: "390px",
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
      keyframes: {
        "infinite-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 10s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 10s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
