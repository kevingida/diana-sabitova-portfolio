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
        saladGreen: "#E3FD9A",
      },
      screens: {
        sm: "390px",
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
