import React from "react"

interface Props {
  children?: React.ReactNode
  variant?: "narrow" | "normal"
}

export default function Container({ children, variant }: Props) {
  switch (variant) {
    case "narrow":
      return (
        <div className="max-w-screen-md px-4 mx-auto h-full">{children}</div>
      )
    case "normal":
      return (
        <div className="max-w-screen-xl px-4 mx-auto h-full">{children}</div>
      )
    default:
      return (
        <div className="max-w-screen-xl px-4 mx-auto h-full">{children}</div>
      )
  }
}
