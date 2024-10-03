import Link from "next/link"

interface Props {
  href: string
  text: string
  className?: string
}

export default function LinkButton({ href, text, className }: Props) {
  return (
    <Link
      href={href}
      className={`inline-block px-3 py-1 border-2 border-primary transition-all hover:border-white hover:text-black hover:bg-primary ${className}`}
    >
      {text}
    </Link>
  )
}
