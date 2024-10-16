import { Skill } from "@/app/types"
import SkillTag from "@/app/_components/SkillTag"

interface Props {
  skills: Skill[]
  scope: "projects" | "blog"
  className?: string
}

export default function SkillTagsList({ skills, scope, className }: Props) {
  const regex = /[?.#()]/g
  function formatName(name: string) {
    return `#${name.toLowerCase().replace(regex, "").split(" ").join("-")}`
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className ? className : null}`}>
      {skills.map(({ name }) => (
        <li key={`skill-tag-${name}`}>
          <SkillTag
            href={`/${scope}?[skills][name][$eq]=${name}`}
            name={name}
          />
        </li>
      ))}
    </ul>
  )
}
