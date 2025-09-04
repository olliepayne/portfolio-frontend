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
  const [theme, setTheme] = useState<Theme>()

  function handleTheme() {
    let newTheme: Theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.remove("dark-mode")
      newTheme = "light"
    } else {
      document.body.classList.add("dark-mode")
      newTheme = "dark"
    }
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    function setTheme(theme: Theme) {
      if (theme == "dark") {
        document.body.classList.add("dark-mode")
      } else {
        document.body.classList.remove("dark-mode")
      }

      localStorage.setItem("theme", theme)
    }

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
        "inline-block rounded-full w-[52px] h-[26px] border-2 border-primary relative after:absolute text-transparent after:bottom-0.5 after:w-[18px] after:aspect-square after:bg-primary after:rounded-full after:transition-all",
        className, theme === "dark" ? "after:right-0.5" : "after:left-0.5"
      )}
      onClick={handleTheme}
    >
      Change theme
    </button>
  )
}
