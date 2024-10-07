"use client"

import Link from "next/link"
import LinkButton from "@/app/_components/LinkButton"
import Container from "@/app/_components/Container"
import { useState } from "react"

const links = [
  {
    href: "/#about",
    text: "About"
  },
  {
    href: "/#experience",
    text: "Experience"
  },
  {
    href: "/#projects",
    text: "Projects"
  }
]

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  function toggleNav() {
    const newState = !navIsOpen
    if (newState) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"

    setNavIsOpen(!navIsOpen)
  }

  return (
    <header className="bg-charcoal text-white sticky top-0 z-50 h-16 lg:py-4 lg:h-fit">
      <Container>
        <nav className="flex flex-row justify-between items-center h-full">
          <Link
            href="/"
            className="text-heading5Desktop font-bold relative z-10 lg:z-0 lg:static"
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
              {links.map(({ href, text }, index) => (
                <li key={`nav-link-${index}`} className="mb-4 lg:mb-0 lg:mr-6">
                  <Link
                    href={href}
                    className="inline-block hover:opacity-75 transition-opacity"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li>
                <LinkButton
                  href="#"
                  text="Contact Me"
                  className="hover:text-black"
                />
              </li>
            </ul>
          </div>
          <button
            className="w-8 h-5 flex flex-col justify-between lg:hidden"
            onClick={toggleNav}
          >
            <span className="rounded-full inline-block h-0.5 w-full bg-white" />
            <span className="rounded-full inline-block h-0.5 w-full bg-white" />
            <span className="rounded-full inline-block h-0.5 w-full bg-white" />
          </button>
        </nav>
      </Container>
    </header>
  )
}
