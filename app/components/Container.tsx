import React from "react"

interface Props {
  children?: React.ReactNode
  variant?: "narrow" | "normal" | "wide"
  className?: string
}

export default function Container({ children, variant, className }: Props) {
  // const chosenVariant = variant === undefined ? "normal" : variant

  return (
    <div className="max-w-screen-xl px-4 mx-auto h-full">
      {children}
    </div>
  )
}
