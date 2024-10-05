interface Props {
  variant: "primary" | "secondary"
  className?: string
}

export default function Blob({ variant, className }: Props) {
  switch (variant) {
    case "primary":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="31.91 41.67 144.11 113.56"
          className={className}
        >
          <path
            d="M38.9,-34.8C54.6,-23.3,74.2,-11.6,75.9,1.7C77.6,15.1,61.4,30.1,45.8,39.3C30.1,48.4,15.1,51.6,-2.1,53.8C-19.3,55.9,-38.6,56.9,-51.4,47.8C-64.2,38.6,-70.4,19.3,-67.3,3.1C-64.1,-13,-51.6,-26.1,-38.8,-37.6C-26.1,-49,-13,-59,-0.7,-58.3C11.6,-57.6,23.3,-46.3,38.9,-34.8Z"
            transform="translate(100 100)"
          />
        </svg>
      )
    case "secondary":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          viewBox="27.27 34.44 151.33 127.3"
        >
          <path
            d="M45.7,-47.8C61.6,-41.1,78.6,-29,78.6,-15.8C78.6,-2.6,61.7,11.6,48.8,22.5C35.8,33.4,26.7,41,15,48.3C3.3,55.6,-11.1,62.8,-26.1,61.6C-41,60.5,-56.7,51.1,-64.8,37.3C-72.9,23.5,-73.6,5.2,-72.1,-14.4C-70.7,-33.9,-67.1,-54.8,-54.7,-62.1C-42.3,-69.5,-21.1,-63.3,-3.1,-59.6C14.9,-55.9,29.8,-54.5,45.7,-47.8Z"
            transform="translate(100 100)"
          />
        </svg>
      )
  }
}
