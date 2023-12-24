const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      backgroundImage: {
        product: "linear-gradient(rgba(0, 0, 0, 0.95), rgba(31, 41, 55, 0.95)), url('/src/assets/bg-image.webp')",
        hero: "linear-gradient(rgba(0, 0, 0, 0.95), rgba(31, 41, 55, 0.6)), url('/src/assets/fotoHero.jpeg')",
      },
      backgroundPosition: {
        'hero-center': 'center',
      },

      backgroundSize: {
        'hero-cover': 'cover',
      },
      
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};