import { Theme } from "theme-ui"

export const theme: Theme = {
  breakpoints: ["48em"],
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
    defaultText: "#1C1C1C",
    buttonBorder: "#1C1C1C",
    codeSnippet: "#fff6eb",
    themeLightGray: "#F7F7F7"
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
    code: "Inconsolata, monospace"
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
    
  },
  lineHeights: {
    default: 1.5
  },
  shadows: {
    roundedCard: "0 2px 10px rgba(0, 0, 0, 0.1)",
    articleHero: "0 0 10px rgba(0, 0, 0, 0.5)"
  },
  layout: {
    container1200: {
      maxWidth: ["100%", "1232px"],
      px: 3
    },
    container1000: {
      maxWidth: ["100%", "1032px"],
      px: 3
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: 600,
      lineHeight: "default"
    },
    body: {
      fontFamily: "body",
      fontWeight: 400,
      lineHeight: "default"
    },
    light: {
      fontFamily: "body",
      fontWeight: 300,
      lineHeight: "default"
    },
    code: {
      fontFamily: "code",
      fontWeight: "medium",
      fontSize: [0, null, 1],
      lineHeight: "1.25"
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
    },
    tag: {
      py: 1,
      px: 2,
      borderRadius: "20px",
      ":hover": {}
    }
  },
  links: {
    nav: {
      position: "relative",
      fontFamily: "heading",
      fontSize: 1,
      color: "defaultText",
      textDecoration: "none",
      transition: "all 0.2s ease-out",
      ":hover": {
        transition: "all 0.2s ease-out"
      }
    },
    navActive: {
      position: "relative",
      fontFamily: "heading",
      fontSize: 1,
      color: "defaultText",
      textDecoration: "none"
      // bg: "#222325"
    }
  },
  forms: {},
  cards: {
    primary: {},
    articleHero: {
      p: 4,
      display: "flex",
      flexDirection: "column",
      bg: "themeLightGray"
    },
    articlePreview: {
      width: "300px",
      height: "300px",
      p: 3,
      display: "flex",
      flexDirection: "column",
      bg: "themeLightGray",
      cursor: "pointer"
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
        color: "defaultText"
      }
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6]
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5]
    },
    h3: {
      variant: "text.heading",
      fontSize: [3, 4]
    },
    h4: {
      variant: "text.heading",
      fontSize: [2, 3]
    },
    h5: {
      variant: "text.heading",
      fontSize: [1, 2]
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
