/** @jsx jsx */
import { jsx } from "theme-ui"
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
        width: ["90%", null, "964px"],
        height: userHasScrolled ? "65px" : "60px",
        position: "fixed",
        zIndex: "front",
        display: "flex",
        alignItems: "center",
        bg: "themeBlack",
        borderBottom: userHasScrolled ? "2px solid" : "none",
        borderBottomColor: "themePink",
        transition: "all 0.2s"
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
            p: "0px",
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
    </header>
  )
}

export default Header
