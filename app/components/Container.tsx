import React from "react"

interface Props {
  children?: React.ReactNode
  variant?: "narrow" | "normal" | "wide"
}

export default function Container({ children, variant }: Props) {
  // const chosenVariant = variant === undefined ? "normal" : variant

  return <div className="max-w-screen-xl px-4 mx-auto">{children}</div>
}
