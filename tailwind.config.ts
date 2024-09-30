import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
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
      body: "1rem"
    },
    colors: {
      primary: "#FFD1D2",
      bone: "#F3F1D9",
      charcoal: "272727"
    }
  },
  plugins: []
}
export default config
