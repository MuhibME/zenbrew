/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '15px',
    },
    screens:{
      sm:'640px',
      md:'7860px',
      lg:'960px',
      xl:'1430px',
    },
    fontFamily: {
      primary:'var(--font-cormorant_upright)',
      secondry:'var(--font-open-sans)'
    },
    extend: {
      colors:{
        primary:{
          DEFAULT: '#100e0e'
        },
        secondry:{
          DEFAULT: '#787d8a'
        },
        accent:{
          DEFAULT: '#c7a17a',
          hover: '#a08161'
        },
      },
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.png')"
      },
    },
  },
  plugins: [],
};
