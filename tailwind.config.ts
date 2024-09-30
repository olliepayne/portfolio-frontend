import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      mobile: "425px",
      tablet: "728px",
      desktop: "1440px"
    },
    fontFamily: {
      sans: ['"Open Sans", system-ui']
    },
    fontSize: {
      body: "1rem",
      heading5Desktop: "1.25rem"
    },
    extend: {
      colors: {
        primary: "#FFD1D2",
        bone: "#F3F1D9",
        charcoal: "#272727"
      }
    }
  },
  plugins: []
}
export default config
