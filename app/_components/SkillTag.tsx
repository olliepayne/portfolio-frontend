import Link from "next/link"
import { Skill } from "@/app/types"

interface Props extends Skill {
  href: string
  name: string
}

export default function SkillTag({ href, name }: Props) {
  return (
    <Link
      href={href}
      className="text-sm inline-block px-1 py-0.5 border-2 border-black transition-all  hover:text-white hover:bg-black"
    >
      {name}
    </Link>
  )
}
