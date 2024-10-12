import { Skill } from "@/app/types"
// import SkillTag from "@/app/_components/SkillTag"

interface Props {
  skills: Skill[]
  className?: string
}

export default function SkillTagsList({ skills, className }: Props) {
  const regex = /[?.#()]/g
  function formatName(name: string) {
    return `#${name.toLowerCase().replace(regex, "").split(" ").join("-")}`
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {skills.map(({ name }) => (
        <li key={`skill-tag-${name}`}>
          {/* <SkillTag href="#" name={name} /> */}
          <span className="inline-block bg-black text-white text-xs py-0.5 px-1 border-primary border-[1px]">
            {formatName(name)}
          </span>
        </li>
      ))}
    </ul>
  )
}
