/** @jsx jsx */
import { jsx } from "theme-ui"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <footer
      sx={{
        width: "100%",
        height: "60px",
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bg: "#F5F5F5"
      }}
    >
      <Copyright />
    </footer>
  )
}

export default Footer
