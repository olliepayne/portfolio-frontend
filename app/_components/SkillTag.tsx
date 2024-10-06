import Link from "next/link"
import { Skill } from "@/app/types"

interface Props extends Skill {
  href: string
  name: string
}

export default function SkillTag({ href, name }: Props) {
  const regex = /[?.#()-]/g
  const formattedName = `#${name.toLowerCase().replace(regex, "")}`

  return (
    <Link
      href={href}
      className="inline-block bg-black text-white text-xs py-0.5 px-1"
    >
      {formattedName}
    </Link>
  )
}
