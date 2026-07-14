import type { Config } from "tailwindcss";

/**
 * Paleta da marca LSM CompanyP.
 * Com Tailwind CSS v4, as cores também estão definidas em globals.css via @theme
 * (fonte efetiva para utilitários). Este ficheiro documenta a identidade visual.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown-primary": "#91683D",
        "brown-dark": "#6F4E2D",
        "solar-gold": "#D9A441",
        "sustainable-green": "#4F7D4A",
        "energy-blue": "#1F5D91",
        "light-gray": "#F7F7F5",
        "dark-gray": "#333333",
      },
      fontFamily: {
        display: ["Satoshi", "Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
