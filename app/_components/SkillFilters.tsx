"use client"

import { Skill } from "@/app/types"
import { useState } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"

interface Props {
  skills: Skill[]
  className?: string
}

export default function SkillFilters({ skills, className }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

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

  const [canHandleChange, setCanHandleChange] = useState(true)
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newSkillNames = filters.skillNames

    function updateFilters() {
      if (filters.skillNames.includes(event.target.value)) {
        newSkillNames.splice(filters.skillNames.indexOf(event.target.value), 1)
      } else {
        newSkillNames = [...newSkillNames, event.target.value]
      }
    }

    updateFilters()
    setFilters({
      skillNames: newSkillNames
    })

    if (canHandleChange) {
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

      setCanHandleChange(false)
      setTimeout(() => {
        setCanHandleChange(true)
      }, 250)
    }
  }

  function resetFilters() {
    setFilters({
      skillNames: []
    })
  }

  function filterIsActive(skillName: string) {
    if (searchParams.getAll("skill")?.includes(skillName)) return true
    else return false
  }

  return (
    <div className={`${className || ""}`}>
      <p className="font-bold text-heading4Desktop">Filter by Skills</p>
      <Link
        href={pathname}
        onClick={resetFilters}
        className="text-heading5Desktop font-bold my-4 inline-block text-themeGray transition-colors hover:text-primary"
        scroll={false}
      >
        Reset
      </Link>
      <form className="flex gap-2 flex-wrap">
        {skills &&
          skills.map((skill, index) => (
            <label
              key={`skill-filter-${index}`}
              htmlFor={skill.name}
              className={`relative border-primary inline-block border-2 py-0.5 px-2.5 text-xs uppercase font-bold cursor-pointer rounded-full transition-colors lg:hover:bg-primary lg:hover:text-black ${
                filterIsActive(skill.name)
                  ? "bg-primary text-black"
                  : "bg-transparent text-black"
              }`}
            >
              <input
                type="checkbox"
                id={skill.name}
                name={skill.name}
                value={skill.name}
                className="absolute top-0 left-0 w-0 h-0 opacity-0"
                onChange={handleChange}
              />
              {skill.name}
            </label>
          ))}
      </form>
    </div>
  )
}
