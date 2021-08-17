/** @jsx jsx */
import { jsx } from "theme-ui"
import HeaderLogo from "./HeaderLogo"
import NavLink from "./NavLink"
import ToggleColorMode from "./ToggleColorMode"

const links = [
  {
    to: "#",
    text: "About"
  },
  {
    to: "#",
    text: "Portfolio"
  },
  {
    to: "#",
    text: "Blog"
  },
]

const Header = () => {
  return (
    <header
      sx={{
        my: 1,
        mx: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <HeaderLogo />
      <ul
        sx={{
          p: "0px",
          display: "flex",
          listStyle: "none"
        }}
      >
        {links.map(({
          to,
          text
        }, index) => (
          <li
            key={`${to}+${index}`}
          >
            <NavLink
              to={to}
              text={text}
            />
          </li>
        ))}
      </ul>
      <ToggleColorMode />
    </header>
  )
}

export default Header