import Link, { LinkProps } from "next/link"

interface Props extends LinkProps {
  text: string
}

export default function InternalLink({ text, ...props }: Props) {
  return (
    <Link
      {...props}
      className="relative inline-block pb-0.5 hover:text-primary transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
    >
      {text}
    </Link>
  )
}
