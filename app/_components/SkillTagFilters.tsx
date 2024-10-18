"use client"

import { Skill } from "@/app/types"
import { useState } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

interface Props {
  skills: Skill[]
  className?: string
}

export default function SkillTagFilters({ skills, className }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const regex = /[?.#()]/g
  function formatSkillName(skillName: string) {
    const formattedSkillName = `#${skillName
      .toLowerCase()
      .replace(regex, "")
      .split(" ")
      .join("-")}`

    return formattedSkillName
  }

  interface Filters {
    skillNames: string[]
  }
  function getFiltersInitialState() {
    if (searchParams.getAll("skill").length > 0) {
      return {
        skillNames: searchParams.getAll("skill")
      }
    } else {
      return {
        skillNames: []
      }
    }
  }
  const [filters, setFilters] = useState<Filters>(getFiltersInitialState)

  function handleChange(event: any) {
    let newSkillNames = filters.skillNames

    function updateFilters() {
      if (filters.skillNames.includes(event.target.value)) {
        newSkillNames.splice(filters.skillNames.indexOf(event.target.value), 1)
      } else {
        newSkillNames = [...newSkillNames, event.target.value]
      }
    }
    updateFilters()

    let newLocation = ""
    if (newSkillNames.length > 0) {
      const skillNamesStr: string = newSkillNames
        .map((item, index) => `${index > 0 ? "&" : ""}skill=${item}`)
        .join()
        .replace(/[,]/g, "")
      newLocation = `?${skillNamesStr}`
    } else {
      newLocation = pathname
    }
    router.push(newLocation, {
      scroll: false
    })

    setFilters({
      skillNames: newSkillNames
    })
  }

  function getFilterIsActive(skillName: string) {
    if (searchParams.getAll("skill")?.includes(skillName)) return true
    else return false
  }

  return (
    <form className={`flex gap-2 flex-wrap ${className || ""}`}>
      {skills &&
        skills.map((skill, index) => (
          <label
            key={`skill-filter-${index}`}
            className={`relative border-primary border-[1px] py-0.5 px-1 text-sm cursor-pointer transition-colors hover:bg-primary hover:text-black ${
              getFilterIsActive(skill.name)
                ? "bg-primary text-black"
                : "bg-black text-white"
            }`}
          >
            <input
              type="checkbox"
              name={skill.name}
              value={skill.name}
              className="absolute top-0 left-0 w-0 h-0 opacity-0"
              onChange={handleChange}
            />
            <span>{formatSkillName(skill.name)}</span>
          </label>
        ))}
    </form>
  )
}
