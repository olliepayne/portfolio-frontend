import Link from "next/link"

interface Props {
  href: string
  text: string
}

export default function TextLink({ href, text }: Props) {
  return (
    <Link
      href={href}
      className="relative hover:text-primary transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-1 after:bg-primary after:-z-10"
    >
      {text}
    </Link>
  )
}
