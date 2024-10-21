import React from "react"

interface Props {
  level: "h1" | "h2" | "h3" | "h4" | "h5"
  children?: React.ReactNode
  className?: string
}

export default function Heading({ level, children, className }: Props) {
  switch (level) {
    case "h1":
      return (
        <h1
          className={`font-bold text-heading1Mobile leading-[3.2rem] md:text-heading1Desktop md:leading-[3.66rem] ${
            className || ""
          }`}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={`font-bold text-heading2Mobile leading-[2.57rem] md:text-heading2Desktop md:leading-[2.93rem] ${
            className || ""
          }`}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={`font-bold text-heading3Mobile leading-[2.05rem] md:text-heading3Desktop md:leading-[2.34rem] ${
            className || ""
          }`}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={`font-bold text-heading4Mobile leading-[1.64rem] md:text-heading4Desktop md:leading-[1.87rem] ${
            className || ""
          }`}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={`font-bold text-heading5Mobile leading-[1.31rem] md:text-heading5Desktop md:leding-[1.5rem] ${
            className || ""
          }`}
        >
          {children}
        </h5>
      )
  }
}
