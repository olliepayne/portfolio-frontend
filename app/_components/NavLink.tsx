import Link, { LinkProps } from "next/link"

interface Props extends LinkProps {
  href: string
  text: string
  className?: string
  variant: "top" | "footer menu" | "footer normal"
}

export default function NavLink({
  href,
  text,
  className,
  variant,
  ...props
}: Props) {
  switch (variant) {
    case "top":
      return (
        <Link
          {...props}
          href={href}
          className={`relative pb-0.5 inline-block after:transition-all after:absolute after:bg-transparent after:w-full after:h-0.5 after:bottom-0 after:left-0 hover:after:bg-primary ${className}`}
        >
          {text}
        </Link>
      )
    case "footer menu":
      return (
        <Link
          {...props}
          href={href}
          className="inline-block pb-1 transition-all border-b-2 border-primary border-solid hover:text-primary"
        >
          {text}
        </Link>
      )
    case "footer normal":
      return (
        <Link
          {...props}
          href={href}
          className="inline-block pb-1 transition-all hover:text-primary"
        >
          {text}
        </Link>
      )
  }
}
