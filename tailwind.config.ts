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
        primaryIntense: "#fca2a4",
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
      dropShadow: {
        "xl-darker": [
          "0 20px 13px rgb(0 0 0 / 0.1)",
          " 0 8px 5px rgb(0 0 0 / 0.25)"
        ]
      },
      gridTemplateColumns: {
        "3-auto": "repeat(auto-fill, minmax(300px, 33%))"
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      },
      keyframes: {
        blobXToY: {
          "0%, 100%": {
            transform: "scale(1, 1)"
          },
          "25%": {
            transform: "scaleX(1.1) rotateZ(10deg)"
          },
          "75%": {
            transform: "scaleY(1.2) rotateZ(-10deg)"
          }
        },
        blobYToX: {
          "0%, 100%": {
            transform: "scale(1, 1)"
          },
          "25%": {
            transform: "scaleY(1.1)"
          },
          "50%": {
            transform: "scaleX(1.2)"
          }
        }
      },
      animation: {
        blobXToY: "blobXToY 10s ease-in-out infinite",
        blobYToX: "blobYToX 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
}
export default config
