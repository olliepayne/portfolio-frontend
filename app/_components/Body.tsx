"use client"
import { getTheme } from "@/app/_utils/themeHandlers"
import { useState } from "react"
import { cn } from "@/app/_utils/cn"

type BodyProps = {
  children?: React.ReactNode | React.ReactNode[]
}
export default function ThemeWrapper({ children }: BodyProps) {
  const [theme] = useState(getTheme())

  return (
    <body className={cn(theme === "dark" ? "dark-mode" : "")}>{children}</body>
  )
}
