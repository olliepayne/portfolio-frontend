import Link, { LinkProps } from "next/link"

interface Props extends LinkProps {
  text: string
}

export default function InternalLink({ text, ...props }: Props) {
  return (
    <Link
      {...props}
      className="inline-block relative dark:hover:after:bg-off-white hover:after:bg-off-black after:transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-gray-400"
    >
      {text}
    </Link>
  )
}
