/** @jsx jsx */
import { jsx } from "theme-ui"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <footer
      sx={{
        height: "60px",
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bg: "themeBlack"
      }}
    >
      <Copyright />
    </footer>
  )
}

export default Footer
