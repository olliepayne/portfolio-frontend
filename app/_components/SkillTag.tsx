import Link from "next/link"
import { Skill } from "@/app/types"

interface Props extends Skill {
  href: string
  name: string
}

export default function SkillTag({ href, name }: Props) {
  const regex = /[?.#()]/g
  const formattedName = `#${name.toLowerCase().replace(regex, "").split(" ").join("-")}`

  return (
    <Link
      href={href}
      className="inline-block bg-black text-white text-sm py-0.5 px-1 border-primary border-[1px] transition-colors hover:bg-primary hover:text-black"
    >
      {formattedName}
    </Link>
  )
}
