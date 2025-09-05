"use client"
import { applyTheme } from "@/app/_utils/themeHandlers"
import { useEffect } from "react"

type ThemeWrapperProps = {
  children?: React.ReactNode | React.ReactNode[]
}
export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  useEffect(() => {
    applyTheme()
  }, [])

  return <body>{children}</body>
}
