"use client"

import Link from "next/link"
import LinkButton from "@/app/_components/LinkButton"
import Container from "@/app/_components/Container"
import { useEffect, useState } from "react"
import NavLink from "@/app/_components/NavLink"
import useThrottle from "@/app/useThrottle"

const links = [
  {
    href: "/#about",
    text: "About"
  },
  {
    href: "/#projects",
    text: "Projects"
  },
  {
    href: "/#experience",
    text: "Experience"
  }
]

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const throttledCheckWindowSize = useThrottle(checkWindowSize, 200)

  function handleBodyScroll() {
    if (!navIsOpen) document.body.style.overflow = "auto"
    else if (isMobile && navIsOpen) document.body.style.overflow = "hidden"
    else if (!isMobile) document.body.style.overflow = "auto"
  }

  const [navIsOpen, setNavIsOpen] = useState(false)
  function toggleNav() {
    const newState = !navIsOpen
    setNavIsOpen(newState)
  }
  function closeNav() {
    if (isMobile) setNavIsOpen(false)
  }

  function checkWindowSize() {
    if (window.innerWidth >= 1024) {
      setIsMobile(false)
    } else if (window.innerWidth < 1024) {
      setIsMobile(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", throttledCheckWindowSize)

    return () => {
      window.removeEventListener("resize", throttledCheckWindowSize)
    }
  }, [])

  useEffect(handleBodyScroll, [isMobile, navIsOpen])

  return (
    <header className="bg-charcoal text-white sticky top-0 z-50">
      <Container>
        <nav className="flex flex-row justify-between items-center h-16">
          <Link
            href="/"
            className="text-heading5Desktop font-bold relative z-10 lg:z-0 lg:static"
            onClick={closeNav}
          >
            Ollie Payne
          </Link>
          <div
            className={`bg-charcoal border-solid border-primary absolute transition-all left-0 top-16 overflow-hidden ${
              navIsOpen
                ? "max-h-screen border-t-2 pt-4 pb-8"
                : "max-h-0 pt-0 pb-0"
            } h-screen justify-between pl-4 w-full lg:max-h-fit lg:flex lg:overflow-auto lg:border-none lg:h-fit lg:p-0 lg:static lg:flex-row lg:bg-transparent lg:w-fit`}
          >
            <ul className="flex flex-col lg:items-center lg:flex-row">
              {links.map((link, index) => (
                <li key={`nav-link-${index}`} className="mb-4 lg:mb-0 lg:mr-6">
                  <NavLink {...link} variant="top" onClick={closeNav} />
                </li>
              ))}
              <li>
                <LinkButton
                  href="/contact"
                  text="Contact Me"
                  className="hover:text-black"
                  onClick={closeNav}
                />
              </li>
            </ul>
          </div>
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
