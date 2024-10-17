"use client"

import Link from "next/link"
import { Skill } from "@/app/types"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

interface Props extends Skill {
  href: string
}

export default function SkillTagLink({ name, href }: Props) {
  const searchParams = useSearchParams()

  function getIsActiveInitialState() {
    if (searchParams.getAll("skill")?.includes(name)) return true
    else return false
  }
  const [isActive, setIsActive] = useState(getIsActiveInitialState)

  const regex = /[?.#()]/g
  const formattedName = `#${name
    .toLowerCase()
    .replace(regex, "")
    .split(" ")
    .join("-")}`

  return (
    <Link
      href={href}
      onClick={() => setIsActive(!isActive)}
      className={`inline-block  ${
        isActive
          ? "bg-primary text-black text-sm py-0.5 px-1 border-primary border-[1px] transition-colors"
          : "bg-black text-white text-sm py-0.5 px-1 border-primary border-[1px] transition-colors hover:bg-primary hover:text-black"
      }`}
    >
      {formattedName}
    </Link>
  )
}
