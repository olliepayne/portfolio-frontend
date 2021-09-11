import { Theme } from "theme-ui"

export const theme: Theme = {
  breakpoints: ["48em", "64em", "90em"],
  space: [
    "0em", // 0px
    "0.25em", // 4px
    "0.5em", // 8px
    "1em", // 16px
    "2em", // 32px
    "4em", // 64px
    "8em" // 128px
  ],
  colors: {
    background: "white",
    themePink: "#FFDBDB",
    themeBlack: "#1C1C1C",
    themeGreen: "#8EA7AA",
    themeCream: "#E2DFC4",
    defaultText: "white",
    buttonBorder: "#1C1C1C",
    codeSnippet: "#1f2123"
  },
  zIndices: {
    back: -1,
    front: 1
  },
  borders: {
    nav: "6px solid #F0F0F0"
  },
  fonts: {
    heading: "Poppins, Sans-Serif",
    body: "Petrona, Sans-Serif",
    codeSnippet: "Inconsolota"
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
    container: {}
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
    copyToClipboard: {
      py: 1,
      px: 2,
      fontFamily: "heading",
      fontWeight: "medium",
      color: "themeGreen",
      cursor: "pointer",
      bg: "transparent",
      borderRadius: "4px",
      transition: "all 0.2s ease-out",
      ":hover": {
        color: "themeBlack",
        bg: "themeGreen",
        transition: "all 0.2s ease-out"
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
    },
    navActive: {
      position: "relative",
      fontFamily: "heading",
      fontSize: 1,
      color: "defaultText",
      textDecoration: "none",
      // bg: "#222325"
    }
  },
  forms: {},
  cards: {
    primary: {},
    technology: {
      width: ["125px", null, "150px"],
      height: ["125px", null, "150px"],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      bg: "white",
      borderRadius: "4px",
      color: "black",
      cursor: "pointer",
      transition: "transform 0.1s ease-out",
      ":hover": {
        transition: "transform 0.1s ease-out",
        transform: "scale(1.05, 1.05)"
      }
    },
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
        color: "defaultText",
        bg: "themeBlack"
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
    articleProgress: {
      width: "4px",
      height: "90%",
      color: "white",
      bg: "gray",
      borderRadius: "0"
    }
  }
}

export default theme
