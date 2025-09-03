import React from "react"

interface Props {
  children?: React.ReactNode
  variant?: "narrow" | "normal"
  className?: string
}

export default function Container({ children, variant, className }: Props) {
  switch (variant) {
    case "narrow":
      return (
        <div className={`max-w-screen-md mx-auto ${className || ""}`}>
          {children}
        </div>
      )
    case "normal":
      return (
        <div className={`max-w-6xl mx-auto px-4 ${className || ""}`}>
          {children}
        </div>
      )
    default:
      return (
        <div className={`max-w-6xl mx-auto px-4 ${className || ""}`}>
          {children}
        </div>
      )
  }
}
