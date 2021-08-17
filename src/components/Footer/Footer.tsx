/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { theme } from "../../gatsby-plugin-theme-ui/index"

const Footer = () => {
  return (
    <footer
      sx={{
        height: "90px",
        position: "relative",
        bg: "themeGreen"
      }}
    >
      <Heading
        sx={{
          position: "absolute",
          top: "-30%",
          left: 0,
          color: theme.colors.modes
        }}
        as="h4"
        variant="styles.h4"
      >
        Copyright {new Date().getFullYear()} Ollie Payne
      </Heading>
    </footer>
  )
}

export default Footer