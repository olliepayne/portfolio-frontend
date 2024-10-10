import { ReactNode } from "react"
import Link, { LinkProps } from "next/link"

interface Props extends LinkProps {
  children?: ReactNode | ReactNode[]
}

export default function InternalLink({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      className="relative hover:text-primary transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-1 after:bg-primary after:-z-10"
    >
      {children}
    </Link>
  )
}