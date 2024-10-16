import { Skill } from "@/app/types"
import SkillTag from "@/app/_components/SkillTag"

interface Props {
  skills: Skill[]
  urlPath: string
  className?: string
}

export default function SkillTagsList({ skills, urlPath, className }: Props) {
  const regex = /[?.#()]/g
  function formatName(name: string) {
    return `#${name.toLowerCase().replace(regex, "").split(" ").join("-")}`
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {skills.map(({ name }) => (
        <li key={`skill-tag-${name}`}>
          <SkillTag href={`${urlPath}`} name={name} />
        </li>
      ))}
    </ul>
  )
}
