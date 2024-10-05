import Link from "next/link"

interface Props {
  name: string
}

export default function SkillTag({ name }: Props) {
  return (
    <Link
      href="#"
      className="text-sm inline-block px-2 py-0.5 border-2 border-black transition-all  hover:text-white hover:bg-black"
    >
      {name}
    </Link>
  )
}
