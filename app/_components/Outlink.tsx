import { ReactNode } from "react"

interface Props {
  href: string
  children?: ReactNode | ReactNode[]
  download?: boolean
  target?: string
}

export default function Outlink({ children, ...props }: Props) {
  return (
    <a
      {...props}
      className="inline-block relative z-20 hover:text-primary transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-primary after:-z-10"
    >
      {children}
    </a>
  )
}
