"use client"
import { useState, useEffect } from "react"
import { cn } from "@/app/_utils/cn"

type Theme = "dark" | "light"

type ThemeToggleButtonProps = {
  className?: string
}

export default function ThemeToggleButton({
  className
}: ThemeToggleButtonProps) {
  const [isDark, setIsDark] = useState<boolean>()

  function setTheme(theme: Theme) {
    if (theme == "dark") {
      document.body.classList.add("dark-mode")
      setIsDark(true)
    } else {
      document.body.classList.remove("dark-mode")
      setIsDark(false)
    }

    localStorage.setItem("theme", theme)
  }

  function handleClick() {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light")
      setIsDark(false)
    } else {
      setTheme("dark")
      setIsDark(true)
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)")) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    } else {
      setTheme(localStorage.getItem("theme") as Theme)
    }
  }, [])

  return (
    <button
      className={cn(
        "group inline-block rounded-full w-[52px] h-[26px] dark:bg-off-black bg-light-gray relative after:absolute text-transparent after:bottom-1 after:w-[18px] after:aspect-square dark:after:bg-gray after:bg-off-white after:rounded-full after:transition-all",
        className,
        isDark ? "after:left-7" : "after:left-1"
      )}
      onClick={handleClick}
    >
      Change theme
    </button>
  )
}
