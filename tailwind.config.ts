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
    colors: {
      primary: "#FFD1D2",
      bone: "#F3F1D9",
      charcoal: "#272727",
      white: "white"
    },
    spacing: {
      0: "0rem",
      1: "0.5",
      2: "0.75rem",
      3: "1rem",
      4: "1.25rem",
      5: "1.5rem",
      6: "2rem",
      7: "2.5rem",
      8: "3rem",  
    }
  },
  plugins: []
}
export default config
