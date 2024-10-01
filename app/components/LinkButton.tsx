import Link from "next/link"

interface Props {
  href: string
  text: string
  className?: string
}

const styles =
  "inline-block px-3 py-1 border-2 border-primary transition-all hover:border-white hover:text-black hover:bg-primary"

export default function LinkButton({ href, text, className }: Props) {
  return (
    <Link href={href} className={className ? `${className} ${styles}` : styles}>
      {text}
    </Link>
  )
}
