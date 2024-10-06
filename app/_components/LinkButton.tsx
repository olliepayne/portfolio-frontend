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
      className={`inline-block relative px-2 py-1 z-20 border-primary border-solid border-2 transition-all
        hover:bg-primary ${className}`}
    >
      {text}
    </Link>
    // <Link
    //   href={href}
    //   className={`inline-block relative px-2 py-1 z-20 border-primary border-solid border-2 overflow-clip transition-all
    //     before:bg-primary before:absolute before:-z-10 before:left-0 before:-bottom-full before:transition-all before:delay-200 before:w-full before:h-full before:origin-left
    //     after:transition-all after:ease-out after:duration-300 after:origin-center after:w-full after:h-1 after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0
    //     hover:before:bottom-0 hover:after:scale-x-100 ${className}`}
    // >
    //   {text}
    // </Link>
  )
}
