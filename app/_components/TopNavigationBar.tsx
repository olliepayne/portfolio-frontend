"use client"
import { useEffect, useState } from "react"
import { cn } from "@/app/_utils/cn"
import Container from "@/app/_components/Container"
import Link from "next/link"

const links = [
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
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [scrollYTimestamp, setScrollYTimestamp] = useState(new Date().getTime())
  const scrollYCheckDelay = 100

  function checkScrollY() {
    if (window.scrollY > 0) {
      setIsTopOfPage(false)
    } else {
      setIsTopOfPage(true)
    }

    if (new Date().getTime() >= scrollYTimestamp) {
      setScrollYTimestamp(new Date().getTime())
    }
    setTimeout(checkScrollY, scrollYCheckDelay)
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollY)

    return () => {
      window.removeEventListener("scroll", checkScrollY)
    }
  }, [])

  return (
    <nav
      className={cn(
        "relative py-4 border-b-2 transition-all dark:border-off-black border-light-gray",
        !isTopOfPage && "dark:border-b-transparent border-b-transparent"
      )}
    >
      <Container variant="full">
        <div className="flex justify-between">
          <Link
            href="/"
            className="transition-colors dark:hover:text-primary-intense hover:text-primary"
            aria-label="Go to homepage"
          >
            Ollie Payne
          </Link>
          <div className="flex items-center">
            {links.map((item, index) => (
              <Link
                href={item.href}
                key={`top-nav-link-${index}`}
                className="ml-8 transition-colors dark:hover:text-primary-intense hover:text-primary"
                aria-label={`Go to ${item} page`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  )
}
