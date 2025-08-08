"use client"

import Link from "next/link"
import LinkButton from "@/app/_components/LinkButton"
import Container from "@/app/_components/Container"
import { useEffect, useState } from "react"
import NavLink from "@/app/_components/NavLink"

const links = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/#about",
    text: "About"
  },
  {
    href: "/projects",
    text: "Projects"
  },
  {
    href: "/#experience",
    text: "Experience"
  },
  {
    href: "/contact",
    text: "Contact"
  }
  // {
  //   href: "/learn",
  //   text: "Learn"
  // }
]

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  function toggleNav() {
    const newState = !navIsOpen
    setNavIsOpen(newState)
  }
  function closeNav() {
    if (window.innerWidth < 1024) {
      setNavIsOpen(false)
    }
  }

  const [canCheckWindowSize, setCanCheckWindowSize] = useState(true)
  function checkWindowSize() {
    if (canCheckWindowSize) {
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "auto"
      } else if (window.innerWidth < 1024) {
        if (!navIsOpen) document.body.style.overflow = "auto"
        else if (navIsOpen) document.body.style.overflow = "hidden"
      }

      setCanCheckWindowSize(false)
      setTimeout(() => {
        setCanCheckWindowSize(true)
      }, 300)
    }
  }

  useEffect(() => {
    checkWindowSize()
    window.addEventListener("resize", checkWindowSize)

    return () => {
      window.removeEventListener("resize", checkWindowSize)
    }
  })

  return (
    <header className="bg-charcoal text-white fixed w-full bottom-0 z-50 lg:sticky lg:top-0">
      <Container variant="narrow">
        <nav className="h-12 flex flex-col items-center justify-center">
          <ul
            className={`flex flex-col items-center justify-center bg-charcoal ${
              navIsOpen ? "opacity-100 duration-200" : "opacity-0"
            } h-full w-full border-b-2 border-solid border-primary  lg:border-none lg:opacity-100 lg:duration-0 lg:justify-between fixed left-0 bottom-12 lg:static lg:flex-row`}
          >
            {links.map((link, index) => (
              <li key={`nav-link-${index}`} className="mb-8 lg:mb-0">
                <NavLink {...link} variant="top" onClick={closeNav} />
              </li>
            ))}
          </ul>
          <button className="w-8 h-6 relative lg:hidden" onClick={toggleNav}>
            <span
              className={`rounded-full inline-block absolute top-0 left-0 h-0.5 w-full ease-bounce transition-all bg-white origin-center ${
                navIsOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`rounded-full inline-block absolute top-1/2 -translate-y-1/2 left-0 h-0.5 w-full transition-all bg-white origin-center ${
                navIsOpen ? "scale-x-0" : "scale-x-100"
              }`}
            />
            <span
              className={`rounded-full inline-block absolute bottom-0 left-0 h-0.5 w-full transition-all ease-bounce bg-white origin-center ${
                navIsOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </Container>
    </header>
  )
}
