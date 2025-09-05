interface Props {
  href: string
  download?: boolean
  text: string
}

export default function Outlink({ text, ...props }: Props) {
  return (
    <a
      {...props}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-block relative dark:hover:after:bg-off-white hover:after:bg-off-black after:transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-gray-400"
    >
      {text}
    </a>
  )
}
