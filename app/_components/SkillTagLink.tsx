"use client"

import Link from "next/link"
import { Skill } from "@/app/types"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface Props extends Skill {
  href: string
  textVariant: "black" | "white"
}

export default function SkillTagLink({ name, href, textVariant }: Props) {
  const searchParams = useSearchParams()

  const [isActive, setIsActive] = useState<boolean>()
  function handleActiveState() {
    let newState = false
    if (searchParams.getAll("skill")?.includes(name)) newState = true

    setIsActive(newState)
  }
  useEffect(handleActiveState)

  return (
    <Link
      href={href}
      onClick={() => setIsActive(!isActive)}
      className={`inline-block text-xs py-0.5 px-2.5 rounded-full uppercase font-bold border-primary border-2 transition-colors ${
        isActive
          ? "bg-primary text-black"
          : `bg-transparent ${
              (textVariant === "black" && "text-black") ||
              (textVariant === "white" && "text-white")
            } hover:bg-primary hover:text-black`
      }`}
    >
      {name}
    </Link>
  )
}
