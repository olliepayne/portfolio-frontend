"use client"

import { Skill } from "@/app/types"

interface Props {
  skills: Skill[]
  className?: string
}
export default function SkillTagList({ skills, className }: Props) {
  return (
    <ul className={`flex gap-2 flex-wrap ${className && className}`}>
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
  return (
    <span
      className={`inline-block text-xs py-0.5 px-2.5 rounded-full uppercase font-bold border-primary border-2 bg-primary text-black`}
    >
      {name}
    </span>
  )
}
