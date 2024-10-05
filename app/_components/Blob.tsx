interface Props {
  className?: string
}

export default function Blob({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M45.7,-47.8C61.6,-41.1,78.6,-29,78.6,-15.8C78.6,-2.6,61.7,11.6,48.8,22.5C35.8,33.4,26.7,41,15,48.3C3.3,55.6,-11.1,62.8,-26.1,61.6C-41,60.5,-56.7,51.1,-64.8,37.3C-72.9,23.5,-73.6,5.2,-72.1,-14.4C-70.7,-33.9,-67.1,-54.8,-54.7,-62.1C-42.3,-69.5,-21.1,-63.3,-3.1,-59.6C14.9,-55.9,29.8,-54.5,45.7,-47.8Z"
        transform="translate(60 60)"
      />
    </svg>
  )
}
