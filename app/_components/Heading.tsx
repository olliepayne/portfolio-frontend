import React from "react"

interface Props {
  level: "h1" | "h2" | "h3" | "h4"
  children?: React.ReactNode
  className?: string
}

export default function Heading({ level, children, className }: Props) {
  switch (level) {
    case "h1":
      return (
        <h1 className={`font-bold text-h1-mobile md:text-h1-desktop ${className || ""}`}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 className={`font-bold text-h2-mobile md:text-h2-desktop ${className || ""}`}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 className={`font-bold text-h3-mobile md:text-h3-desktop ${className || ""}`}>
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 className={`font-bold text-h4-mobile md:text-h4-desktop ${className || ""}`}>
          {children}
        </h4>
      )
  }
}
