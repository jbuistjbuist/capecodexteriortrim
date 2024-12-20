import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      title: ["var(--title-font)", ...fontFamily.sans],
      body: ["var(--body-font)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#384E1D",
          50: "#D1E5B8",
          100: "#C7DFA9",
          200: "#B4D48C",
          300: "#A0C96E",
          400: "#8DBE50",
          500: "#78A73E",
          600: "#638933",
          700: "#4D6C28",
          800: "#384E1D",
          900: "#1B250E",
          950: "#0C1106",
        },
        teal: {
          DEFAULT: "#338984",
          50: "#D6F0EE",
          100: "#C7EAE8",
          200: "#A9DFDC",
          300: "#8BD4D0",
          400: "#6EC9C4",
          500: "#50BEB7",
          600: "#3EA7A1",
          700: "#338984",
          800: "#24605D",
          900: "#153735",
          950: "#0D2322",
        },
        purple: {
          DEFAULT: "#593389",
          50: "#E1D6F0",
          100: "#D6C7EA",
          200: "#C1A9DF",
          300: "#AB8BD4",
          400: "#966EC9",
          500: "#8050BE",
          600: "#6C3EA7",
          700: "#593389",
          800: "#3E2460",
          900: "#241537",
          950: "#170D23",
        },
        maroon: {
          DEFAULT: "#893338",
          50: "#F0D6D7",
          100: "#EAC7C9",
          200: "#DFA9AC",
          300: "#D48B90",
          400: "#C96E73",
          500: "#BE5056",
          600: "#A73E44",
          700: "#893338",
          800: "#602427",
          900: "#371517",
          950: "#230D0E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
