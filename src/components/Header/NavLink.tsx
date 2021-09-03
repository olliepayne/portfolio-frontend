/** @jsx jsx */
import { jsx } from "theme-ui"
import { theme } from "../../gatsby-plugin-theme-ui/index"
import { Link } from "gatsby"

interface NavLinkProps {
  to: string
  text: string
}
const NavLink = ({
  to,
  text
}: NavLinkProps) => {
  return (
    <Link
      sx={theme.links.nav}
      to={to}
    >
      {text}
    </Link>
  )
}

export default NavLink