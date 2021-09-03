import { Theme } from "theme-ui"

export const theme: Theme = {
  breakpoints: ["48em", "64em", "90em"],
  space: [
    "0em", // 0px
    "0.469em", // 7.5px
    "0.938em", // 15px
    "1.875em", // 30px
    "3.75em", // 60px
    "7.5em", // 120px
    "15em" // 240px
  ],
  colors: {
    background: "white",
    themePink: "#FFDBDB",
    themeBlack: "#1C1C1C",
    themeGreen: "#8EA7AA",
    themeCream: "#E2DFC4",
    defaultText: "#1C1C1C",
    buttonBorder: "#1C1C1C"
  },
  zIndices: {
    back: -1,
    front: 1
  },
  borders: {
    nav: "6px solid #F0F0F0",
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
  shadows: {
    roundedCard: "0 3px 5px rgba(0, 0, 0, 0.2)"
  },
  layout: {
    container: {
      maxWidth: ["374px", "728px", "784px", "1200px"]
    },
    narrowContainer: {
      maxWidth: ["314px", "668px", "544px", "960px"]
    }
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
      background: "transparent",
      border: "4px solid",
      borderColor: "buttonBorder",
      borderRadius: "50px",
      color: "themePink"
    },
    contact: {
      width: "150px",
      height: "40px",
      border: "none",
      fontFamily: "heading",
      fontSize: 2,
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
      fontSize: 1,
      color: "defaultText",
      textDecoration: "none"
    }
  },
  forms: {},
  cards: {
    primary: {},
    blog: {
      borderRadius: ""
    }
  },
  styles: {
    root: {
      body: {
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
    }
  }
}

export default theme
