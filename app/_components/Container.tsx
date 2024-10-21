import React from "react"

interface Props {
  children?: React.ReactNode
  variant?: "narrow" | "normal"
  className?: string
}

export default function Container({ children, variant, className }: Props) {
  switch (variant) {
    case "narrow":
      return <Normal />
    case "normal":
      return (
        <div className="max-w-screen-xl px-4 mx-auto h-full">{children}</div>
      )
    default:
      return <Normal />
  }
}

function Normal({ children, className }: Props) {
  return (
    <div className={`max-w-screen-md px-4 mx-auto h-full ${className || ""}`}>
      {children}
    </div>
  )
}
