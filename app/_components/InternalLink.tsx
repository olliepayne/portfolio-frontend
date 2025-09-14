import Link, { LinkProps } from "next/link"
import { cn } from "@/app/_utils/cn"

interface Props extends LinkProps {
  text: string
  className?: string
}

export default function InternalLink({ text, className, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-block relative dark:hover:after:bg-off-white hover:after:bg-off-black after:transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-gray-400",
        className
      )}
    >
      {text}
    </Link>
  )
}
