"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface HeadingProperty {
  id: string
  text: string
}

interface Props {
  className?: string
}

export default function TableOfContents({ className }: Props) {
  const [headingProperties, setHeadingProperties] = useState<HeadingProperty[]>(
    []
  )

  function generateId(text: string) {
    const regex = /[?.#()-]/g
    return text.toLowerCase().replace(regex, "").split(" ").join("-")
  }

  useEffect(() => {
    const sections = Array.from(
      document.getElementsByTagName("main")[0].getElementsByTagName("h2")
    ).map((item) => {
      const id = generateId(item.innerText)
      item.id = id

      return {
        id,
        text: item.innerText
      }
    })

    setHeadingProperties(sections)
  }, [])

  return (
    <nav className={`py-1 px-2 ${className || ""}`}>
      <span className="mr-4 font-bold text-heading5Desktop">Table of Contents</span>
      <ul className="border-t-2 border-solid border-themeLightGray pt-2 mt-2">
        {headingProperties.length > 0 &&
          headingProperties.map((item, index) => (
            <li key={`heading-${index}`} className={`${index > 0 ? "mt-2" : ""}`}>
              <Link href={`#${item.id}`} className="text-themeGray font-bold transition-colors hover:text-themeLightGray">{item.text}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
