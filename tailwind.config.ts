import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ivories & creams
        ivory: "hsl(var(--ivory))",
        "ivory-warm": "hsl(var(--ivory-warm))",
        linen: "hsl(var(--linen))",
        // Dusty rose family
        rose: "hsl(var(--rose))",
        "rose-light": "hsl(var(--rose-light))",
        "rose-muted": "hsl(var(--rose-muted))",
        "rose-dark": "hsl(var(--rose-dark))",
        // Plum / deep accent
        plum: "hsl(var(--plum))",
        "plum-light": "hsl(var(--plum-light))",
        // Neutrals
        "warm-stone": "hsl(var(--warm-stone))",
        "warm-stone-light": "hsl(var(--warm-stone-light))",
        slate: "hsl(var(--slate))",
        "off-white": "hsl(var(--off-white))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Lora'", "Georgia", "serif"],
        sans: ["'Nunito Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.75s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.65s ease-out forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
