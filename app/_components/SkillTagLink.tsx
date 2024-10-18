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
      className={`inline-block text-xs py-0.5 px-2.5 rounded-full uppercase font-bold border-primary border-[1px] transition-colors ${
        isActive
          ? "bg-primary text-black"
          : "bg-black text-white hover:bg-primary hover:text-black"
      }`}
    >
      {name}
    </Link>
  )
}
