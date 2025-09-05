"use client"
import { useEffect, useState } from "react"
import { cn } from "@/app/_utils/cn"
import { setTheme, getTheme } from "@/app/_utils/themeHandlers"
// import Icon from "@/app/_components/Icon"

type ThemeToggleButtonProps = {
  className?: string
}

export default function ThemeToggleButton({
  className
}: ThemeToggleButtonProps) {
  const [isDark, setIsDark] = useState<boolean>()
  useEffect(() => {
    setIsDark(getTheme() === "dark" ? true : false)
  }, [])

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
        "group hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700 transition-all inline-block rounded-full w-[54px] h-[28px] bg-gray-100 relative text-transparent cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <span
        className={cn(
          "bottom-1/2 translate-y-1/2 w-[20px] aspect-square bg-gray-300 absolute dark:group-hover:bg-gray-200 group-hover:bg-gray-400 rounded-full transition-all",
          isDark ? "left-7" : "left-1"
        )}
      >
        {/* <Icon
          name="Light mode"
          className={cn(
            "absolute left-0 top-0 fill-gray-400 transition-all w-[98%] h-[98%]",
            isDark ? "opacity-0" : "opacity-100"
          )}
        />
        <Icon
          name="Dark mode"
          className={cn(
            "absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2 fill-off-black transition-all w-[90%] h-[90%]",
            isDark ? "opacity-100" : "opacity-0"
          )}
        /> */}
      </span>
      Enable {isDark ? "light" : "dark"} mode
    </button>
  )
}
