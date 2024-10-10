import { ReactNode } from "react"

interface Props {
  href: string
  children?: ReactNode | ReactNode[]
}

export default function Outlink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="relative hover:text-primary transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-1 after:bg-primary after:-z-10"
    >
      {children}
    </a>
  )
}
