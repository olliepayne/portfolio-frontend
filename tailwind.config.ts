import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans", system-ui']
    },
    extend: {
      colors: {
        primary: "#FFD1D2",
        bone: "#EBE6DE",
        charcoal: "#272727",
        themeLightGray: "#DFDFDF",
        themeGray: "#5C5C5C"
      },
      fontSize: {
        heading1Mobile: "2.67rem",
        heading2Mobile: "2.14rem",
        heading3Mobile: "1.71rem",
        heading4Mobile: "1.37rem",
        heading5Mobile: "1.09rem",
        heading1Desktop: "3.05rem",
        heading2Desktop: "2.44rem",
        heading3Desktop: "1.95rem",
        heading4Desktop: "1.56rem",
        heading5Desktop: "1.25rem",
        body: "1rem"
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "scale(1, 1)"
          },
          "25%": {
            transform: "scaleX(1.1)"
          },
          "50%": {
            transform: "scaleY(1.2)"
          }
        }
      },
      animation: {
        blob: "blob 15s ease-in-out infinite"
      }
    }
  },
  plugins: []
}
export default config
