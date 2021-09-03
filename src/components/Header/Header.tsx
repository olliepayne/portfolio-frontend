/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React, { useState } from "react"
import HeaderLogo from "./HeaderLogo"
import NavLink from "./NavLink"

const links = [
  {
    to: "#",
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
    console.log("test")
  }

  if (global.window) {
    window.addEventListener("scroll", checkScrollPosition)
  }

  return (
    <header
      sx={{
        width: "100%",
        height: userHasScrolled ? "65px" : "60px",
        px: ["30px", null, "120px"],
        position: "fixed",
        zIndex: "front",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bg: "white",
        boxShadow: userHasScrolled ? "0 0px 10px rgba(0, 0, 0, 0.3)" : "none",
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
              mr: 3
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
