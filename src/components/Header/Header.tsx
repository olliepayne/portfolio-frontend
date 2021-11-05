/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import * as React from "react"
import { useState, useEffect } from "react"
import HeaderLogo from "./HeaderLogo"
import NavLink from "./NavLink"

const links = [
  {
    to: "/learn",
    text: "Learn"
  },
  {
    to: "#",
    text: "Blog"
  }
]

const Header = () => {
  const [userHasScrolled, setUserHasScrolled] = useState(false)

  const checkScrollPosition = () => {
    setUserHasScrolled(window.scrollY > 0 ? true : false)
  }

  // TODO: add debouncing
  useEffect(() => {   
    if (global.window) {
      window.addEventListener("scroll", checkScrollPosition)
    }

    return () => {
      window.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  return (
    <header
      sx={{
        width: "100%",
        height: userHasScrolled ? "65px" : "60px",
        position: "fixed",
        zIndex: "front",
        borderBottom: userHasScrolled ? "4px solid" : "none",
        // borderBottom: "4px solid",
        borderBottomColor: "themePink",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s",
        backdropFilter: "blur(16px)",
        bg: "rgb(255 255 255 / 0.75)"
      }}
    >
      <Container variant="container1200">
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <HeaderLogo />
          <nav
            sx={{
              ml: 4
            }}
          >
            <ul
              sx={{
                p: 0,
                display: "flex",
                listStyle: "none",
                li: {
                  mr: 4
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
        </Box>
      </Container>
    </header>
  )
}

export default Header
