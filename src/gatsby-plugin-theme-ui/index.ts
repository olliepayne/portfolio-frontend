import { Theme } from "theme-ui"

export const theme: Theme = {
  breakpoints: [
    "40em",
    "60em"
  ],
  space: [
    "1.563em", // 25px
    "3.125em", // 50px
    "7.5em", // 120px
    "15em" // 240px
  ],
  colors: {
    initialColorModeName: "light",
    background: "white",
    themePink: "#FF8787",
    themeBlack: "#1C1C1C",
    themeGreen: "#66797B",
    themeCream: "#F5F2D7",
    defaultText: "#1C1C1C",
    buttonBorder: "#1C1C1C",
    modes: {
      dark: {
        background: "#1C1C1C",
        defaultText: "white",
        buttonBorder: "white"
      }
    }
  },
  zIndices: {
    back: -1,
    front: 1
  },
  fonts: {
    heading: "Poppins, Sans-Serif",
    body: "Petrona, Sans-Serif"
  },
  fontSizes: [
    "0.75rem", // 12px
    "1rem", // 16px
    "1.414rem", // 22.62px
    "2rem", // 32px
    "2.827rem", // 45.23px
    "3.998rem", // 63.96px
    "5.653rem" // 90.44px
  ],
  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    body: 400,
    light: 300
  },
  lineHeights: {
    default: 1.75
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "semiBold",
      lineHeight: "default"
    },
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "default"
    },
    light: {
      fontFamily: "body",
      fontWeight: "light",
      lineHeight: "default"
    }
  },
  buttons: {
    blackBorder: {
      width: "150px",
      height: "50px",
      background: "transparent",
      border: "4px solid",
      borderColor: "buttonBorder",
      borderRadius: "50px",
      color: "themePink",
    },
    contact: {
      width: "150px",
      height: "40px",
      fontFamily: "heading",
      fontWeight: "semiBold",
      bg: "#97A6DE",
      color: "white",
      borderRadius: "10px 0px",
      cursor: "pointer",
      transition: "all 0.3s ease-out",
      ":hover": {
        bg: "#C3CBE6",
        color: "themeBlack",
        boxShadow: "6px 8px 0px #97A6DE",
        transition: "all 0.3s ease-out"
      }
    }
  },
  links: {
    nav: {
      position: "relative",
      fontFamily: "heading",
      fontSize: 2,
      color: "defaultText",
      textDecoration: "none",
      "::after": {
        content: `""`,
        position: "absolute",
        display: "block",
        width: "100%",
        height: "6px",
        bottom: "0",
        left: "0",
        bg: "themePink",
        transformOrigin: "top left",
        transform: "scaleX(0)",
        transition: "transform 0.3s ease-out"
      },
      ":hover::after": {
        transform: "scaleX(1)"
      }
    }
  },
  forms: {

  },
  styles: {
    root: {
      "body": {
        p: "0px",
        m: "0px",
        boxSizing: "border-box",
        color: "defaultText"
      }
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, null, 6]
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, null, 5]
    },
    h3: {
      variant: "text.heading",
      fontSize: [3, null, 4]
    },
    h4: {
      variant: "text.heading",
      fontSize: [2, null, 3]
    },
    h5: {
      variant: "text.heading",
      fontSize: [1, null, 2]
    },
  }
}

export default theme