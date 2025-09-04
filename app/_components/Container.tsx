import React from "react"
import { cn } from "@/app/_utils/cn"

interface ContainerProps {
  children?: React.ReactNode
  variant?: "narrow" | "normal"
  className?: string
}

export default function Container({
  children,
  variant,
  className
}: ContainerProps) {
  const baseStyles = {
    narrow: "max-w-screen-md mx-auto px-4",
    normal: "max-w-6xl mx-auto px-4"
  }

  const mergedStyles = {
    narrow: cn(baseStyles.narrow, className),
    normal: cn(baseStyles.normal, className)
  }

  switch (variant) {
    case "narrow":
      return <div className={mergedStyles.narrow}>{children}</div>
    case "normal":
      return <div className={mergedStyles.normal}>{children}</div>
    default:
      return <div className={mergedStyles.normal}>{children}</div>
  }
}
