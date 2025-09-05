"use client"
import { useState } from "react"
import { cn } from "@/app/_utils/cn"
import { setTheme, getTheme } from "@/app/_utils/themeHandlers"

type Theme = "dark" | "light"

type ThemeToggleButtonProps = {
  className?: string
}

export default function ThemeToggleButton({
  className
}: ThemeToggleButtonProps) {
  const [isDark, setIsDark] = useState<boolean>(
    getTheme() === "dark" ? true : false
  )

  function handleClick() {
    setTheme()

    if (!document.body.classList.contains("theme-transition")) {
      document.body.classList.add("theme-transition")
    }

    if (getTheme() === "dark") {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }

  return (
    <button
      className={cn(
        "group inline-block rounded-full w-[52px] h-[26px] dark:bg-off-black bg-light-gray relative after:absolute text-transparent after:bottom-1 after:w-[18px] after:aspect-square dark:after:bg-gray after:bg-gray-50 after:rounded-full after:transition-all",
        className,
        isDark ? "after:left-7" : "after:left-1.5"
      )}
      onClick={handleClick}
    >
      Enable {isDark ? "light" : "dark"} mode
    </button>
  )
}
