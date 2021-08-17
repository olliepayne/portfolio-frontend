import { Theme } from "theme-ui"

export const theme: Theme = {
  breakpoints: [
    "40em",
    "60em"
  ],
  space: [
    "",
    "3.125em", // 50px
    "7.5em" // 120px
  ],
  fonts: {
    heading: "Petrona, Sans-Serif",
    body: "Poppins, Sans-Serif"
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
    heading: 600,
    body: 400,
    light: 300
  },
  lineHeights: {
    default: 1.75
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
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
      
    },
    contact: {
      width: "150px",
      height: "40px",
      bg: "#97A6DE",
      color: "white",
      borderRadius: "10px 0px"
    }
  },
  links: {

  },
  forms: {

  },
  styles: {
    root: {
      "body": {
        p: "0px",
        m: "0px",
        boxSizing: "border-box"
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