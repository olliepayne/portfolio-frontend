import React, { Children } from "react"

interface Props {
  level: "h1" | "h2" | "h3" | "h4" | "h5"
  children?: React.ReactNode
}

export default function Heading({ level, children }: Props) {
  switch (level) {
    case "h1":
      return <h1 className="font-bold text-heading1Mobile md:text-heading1Desktop">{children}</h1>
    case "h2":
      return <h2 className="font-bold text-heading2Mobile md:text-heading2Desktop">{children}</h2>
    case "h3":
      return <h3 className="font-bold text-heading3Mobile md:text-heading3Desktop">{children}</h3>
    case "h4":
      return <h4 className="font-bold text-heading4Mobile md:text-heading4Desktop">{children}</h4>
    case "h5":
      return <h5 className="font-bold text-heading5Mobile md:text-heading5Desktop">{children}</h5>
  }
}