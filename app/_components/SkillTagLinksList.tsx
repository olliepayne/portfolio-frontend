import { Skill } from "@/app/types"
import SkillTagLink from "@/app/_components/SkillTagLink"

interface Props {
  skills: Skill[]
  scope: "projects" | "blog"
  className?: string
}

export default function SkillTagLinksList({ skills, scope, className }: Props) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ? className : null}`}>
      {skills.map(({ name }) => (
        <li key={`skill-tag-${name}`}>
          <SkillTagLink name={name} href={`/${scope}?skill=${name}`} />
        </li>
      ))}
    </ul>
  )
}
