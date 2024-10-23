import { Skill } from "@/app/types"
import Link from "next/link"

interface Props {
  skills: Skill[]
  scope: "projects" | "blog"
  textVariant: "black" | "white"
  className?: string
}

export default function SkillLinkList({
  skills,
  scope,
  textVariant,
  className
}: Props) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ? className : null}`}>
      {skills.map(({ name }) => (
        <li key={`skill-tag-${name}`}>
          <SkillLink
            name={name}
            href={`/${scope}?skill=${name}`}
            textVariant={textVariant}
          />
        </li>
      ))}
    </ul>
  )
}

interface SkillLinkProps extends Skill {
  href: string
  textVariant: "black" | "white"
}

function SkillLink({ name, href, textVariant }: SkillLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-xs py-1.5 px-3 rounded-full uppercase font-bold border-primary border-2 transition-colors bg-transparent ${
        (textVariant === "black" && "text-black") ||
        (textVariant === "white" && "text-white")
      } hover:bg-primary hover:text-black`}
    >
      {name}
    </Link>
  )
}
