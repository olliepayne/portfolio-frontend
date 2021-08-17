/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import HeaderLogo from "./HeaderLogo"
import NavLink from "./NavLink"
import ContactButton from "./ContactButton"
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
        height: "120px",
        my: 0,
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
          listStyle: "none",
          "li": {
            mx: 1
          }
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
        {/* <li>
          <ContactButton />
        </li> */}
      </ul>
      <ToggleColorMode />
    </header>
  )
}

export default Header