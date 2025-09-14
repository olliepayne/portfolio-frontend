import React from "react"
import { cn } from "@/app/_utils/cn"

interface ContainerProps {
  children?: React.ReactNode
  variant?: "narrow" | "normal" | "full"
  className?: string
}

export default function Container({
  children,
  variant,
  className
}: ContainerProps) {
  switch (variant) {
    case "narrow":
      return (
        <div className={cn("max-w-screen-md mx-auto px-8", className)}>
          {children}
        </div>
      )
    case "normal":
      return (
        <div className={cn("max-w-6xl mx-auto px-8", className)}>
          {children}
        </div>
      )
    case "full":
      return (
        <div className={cn("w-full mx-auto px-8", className)}>
          {children}
        </div>
      )
    default:
      return (
        <div className={cn("max-w-6xl mx-auto px-8", className)}>
          {children}
        </div>
      )
  }
}
