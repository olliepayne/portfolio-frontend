import Link, { LinkProps } from "next/link"

interface Props extends LinkProps {
  href: string
  text: string
  className?: string
}

export default function NavLink({ href, text, className, ...props }: Props) {
  return (
    <Link
      {...props}
      href={href}
      className={`inline-block hover:text-gray-300 transition-all ${className}`}
    >
      {text}
    </Link>
  )
}
