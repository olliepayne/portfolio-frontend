import Link from "next/link"

type Props = {
  href: string
  text: string
}

export default function PrimaryLink({ href, text }: Props) {
  return (
    <Link
      href={href}
      className="inline-block relative px-2 py-1 z-20 text-white transition-all delay-200 before:bg-primary before:absolute before:-z-10 before:left-0 before:top-0 before:transition-all before:delay-200 before:w-full before:h-full before:origin-bottom-left before:scale-0 after:transition-all after:ease-out after:duration-300 after:origin-center after:w-full after:h-1 after:scale-x-0 after:bg-primary after:absolute after:bottom-0 after:left-0 hover:text-black hover:before:scale-100 hover:after:scale-x-100"
    >
      {text}
    </Link>
  )
}
