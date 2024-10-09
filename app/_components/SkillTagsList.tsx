import { Skill } from "@/app/types"
import SkillTag from "@/app/_components/SkillTag"

interface Props {
  skills: Skill[]
  className?: string
}

export default function SkillTagsList({ skills, className }: Props) {
  return (
    <ul className={className}>
      {skills.map(({ name }, index) => (
        <li
          className={`inline-block ${
            index < skills.length - 1 ? "mr-2" : undefined
          }`}
        >
          <SkillTag href="#" name={name} />
        </li>
      ))}
    </ul>
  )
}
