import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mer: '#4d7d7d',
        mer2: '#BFCFBB',
        mer3: '#8EA58C',
        mer4: '#738A6E',
        mer5: '#344C3D'
      },
    },
  },
  plugins: [],
} satisfies Config;
