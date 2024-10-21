"use client"

import { Skill } from "@/app/types"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

interface Props {
  skills: Skill[]
  className?: string
}
export default function SkillTagList({ skills, className }: Props) {
  return (
    <ul className={`flex gap-2 ${className && className}`}>
      {skills.map((item, index) => (
        <li key={`skill-tag-${index}`}>
          <SkillTag name={item.name} />
        </li>
      ))}
    </ul>
  )
}

interface SkillTagProps {
  name: string
}
function SkillTag({ name }: SkillTagProps) {
  const searchParams = useSearchParams()

  const [isSelected, setIsSelected] = useState<boolean>()
  function handleIsSelected() {
    let newState = false
    if (searchParams.getAll("skill").includes(name)) {
      newState = true
    }

    setIsSelected(newState)
  }

  useEffect(handleIsSelected)

  function handleDisplayProperty() {
    const skillQueries = searchParams.getAll("skill")
    if (
      (skillQueries.includes(name) && isSelected) ||
      skillQueries.length === 0
    ) {
      return "inline-block"
    } else {
      return "hidden"
    }
  }

  return (
    <span
      className={`${handleDisplayProperty()} text-xs py-0.5 px-2.5 rounded-full uppercase font-bold border-primary border-2 bg-primary text-black`}
    >
      {name}
    </span>
  )
}
