"use client"
import { useState } from "react"
import { cn } from "@/app/_utils/cn"

export default function MenuButton() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <button
      className="relative cursor-pointer w-[30px] h-[30px]"
      onClick={toggleMenu}
    >
      <span
        className={cn(
          "absolute top-2/5 left-0 origin-center inline-block dark:bg-off-white bg-off-black h-[2px] w-full menu-btn-bounce",
          menuIsOpen && "top-1/2 -translate-y-1/2 rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute top-3/5 left-0 origin-center inline-block dark:bg-off-white bg-off-black h-[2px] w-3/4 transition-all menu-btn-bounce",
          menuIsOpen && "top-1/2 -translate-y-1/2 w-full -rotate-45"
        )}
      />
    </button>
  )
}
