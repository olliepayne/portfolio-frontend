interface Props {
  href: string
  download?: boolean
  text: string
}

export default function Outlink({ text, ...props }: Props) {
  return (
    <a
      {...props}
      rel="noopener noreferrer nofollow"
      target="_blank"
      className="inline-block relative pb-0.5 hover:text-primary transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
    >
      {text}
    </a>
  )
}
