"use client"

import InternalLink from "@/app/_components/InternalLink"
import { useEffect, useState } from "react"

interface NavLink {
  sectionId: string
  text: string
}

export default function SectionNav() {
  const [navLinks, setNavLinks] = useState<NavLink[]>([])

  useEffect(() => {
    function generateSectionId(headingText: string) {
      const regex = /[?.#()-]/g
      return headingText.toLowerCase().replace(regex, "").split(" ").join("-")
    }

    const h2s = document
      .getElementsByTagName("main")[0]
      .getElementsByTagName("h2")
    const newState: NavLink[] = []
    for (let i = 0; i < h2s.length; i++) {
      const text = h2s[i].innerText
      const sectionId = generateSectionId(text)
      newState.push({
        sectionId,
        text
      })

      // TODO we can append our "fake region" anchor here to account for the sticky navs
      h2s[i].id = sectionId
    }
    setNavLinks(newState)
  }, [])

  return (
    <nav className="sticky top-16 py-1 px-2 border-solid border-b-2 border-themeLightGray bg-white">
      <span className="mr-4 font-bold">Contents:</span>
      {navLinks.length > 0 && (
        <ul className="inline-flex flex-wrap">
          {navLinks.map(({ sectionId, text }, index) => (
            <li
              key={`section-nav=${index}`}
              className={`${index < navLinks.length - 1 ? "mr-4" : ""}`}
            >
              <InternalLink href={`#${sectionId}`}>{text}</InternalLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
