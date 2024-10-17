"use client"

import Link from "next/link"
import { Skill } from "@/app/types"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

interface Props extends Skill {
  scope: "projects" | "blog"
}

export default function SkillTag({ name, scope }: Props) {
  const searchParams = useSearchParams()

  function getIsActiveInitialState() {
    if (searchParams.get("[skills][name][$eq]"))
      if (searchParams.get("[skills][name][$eq]") === name) return true
      else return false
  }
  const [isActive, setIsActive] = useState(getIsActiveInitialState)

  const regex = /[?.#()]/g
  const formattedName = `#${name
    .toLowerCase()
    .replace(regex, "")
    .split(" ")
    .join("-")}`
  
  function handleIsActive() {
    const newState = !isActive
    setIsActive(newState)
  }
  
  function getHref() {
    if (isActive) return `/${scope}`
    else return `/${scope}?[skills][name][$eq]=${name}`
  }
  let href = getHref()

  return (
    <Link
      href={href}
      onClick={handleIsActive}
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
