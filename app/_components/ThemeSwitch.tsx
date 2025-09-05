"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/app/_utils/cn"

type ThemeSwitchProps = {
  className?: string
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function handleClick() {
    const otherTheme = theme === "dark" ? "light" : "dark"
    setTheme(otherTheme)
  }

  return (
    <button
      className={cn(
        className,
        "group dark:hover:text-off-white hover:text-off-black hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700 transition-all inline-block rounded-full w-[54px] h-[28px] bg-gray-100 relative text-transparent cursor-pointer"
      )}
      onClick={handleClick}
    >
      {/* Slider inside */}
      <span
        className={cn(
          "bottom-1/2 translate-y-1/2 w-[20px] aspect-square bg-gray-300 absolute dark:group-hover:bg-gray-200 group-hover:bg-gray-400 rounded-full transition-all",
          theme === "dark" ? "left-7" : "left-1"
        )}
      ></span>

      {/* Text */}
      <span className="absolute w-fit -left-full -translate-x-1/2 bottom-1/2 translate-y-1/2 text-body-sm">
        Enable {theme === "dark" ? "light" : "dark"} mode
      </span>
    </button>
  )
}
