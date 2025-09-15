"use client"
import { useState } from "react"
import { cn } from "@/app/_utils/cn"
import Link from "next/link"
import MenuButton from "@/app/_components/MenuButton"

const links = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/#portfolio",
    text: "Portfolio"
  },
  {
    href: "/#work-history",
    text: "Work history"
  },
  {
    href: "/#writing",
    text: "Writing"
  }
]

export default function TopNavigationBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <nav className="relative z-10 overflow-clip">
      {/* Blur */}
      <div
        className={cn(
          "pointer-events-none fixed bg-transparent w-full left-0 top-0 h-full transition-all duration-300",
          menuIsOpen &&
            "pointer-events-auto backdrop-blur-sm bg-[rgba(0,0,0,0.2)]"
        )}
      />

      <div
        className={cn(
          "px-16 bg-white dark:bg-body-dark rounded-l-3xl w-full h-full left-full fixed top-0 transition-all duration-300 md:w-1/2",
          menuIsOpen && "left-0 md:left-1/2"
        )}
      >
        <ul className="mt-32">
          {links.map((link, index) => (
            <li key={index} className="my-4">
              <Link
                href={link.href}
                className={cn(
                  "text-h2-desktop transition-colors hover:text-primary"
                )}
                aria-label={`Go to ${link.text} page`}
                onClick={() => setMenuIsOpen(false)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <span className="fixed right-8 top-3">
        <MenuButton toggleFunction={toggleMenu} isOpen={menuIsOpen} />
      </span>
    </nav>
  )
}
