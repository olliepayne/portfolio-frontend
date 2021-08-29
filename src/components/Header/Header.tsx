/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui"
import * as React from "react"
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
  {
    to: "#",
    text: "Contact"
  }
]

const Header = () => {
  return (
    <header>
      <Container variant="header">
        <div
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <HeaderLogo />
          <nav
            sx={{
              ml: 5
            }}
          >
            <ul
              sx={{
                p: "0px",
                display: "flex",
                listStyle: "none",
                li: {
                  mx: 3
                }
              }}
            >
              {links.map(({ to, text }, index) => (
                <li key={`${to}+${index}`}>
                  <NavLink to={to} text={text} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ToggleColorMode />
      </Container>
    </header>
  )
}

export default Header
