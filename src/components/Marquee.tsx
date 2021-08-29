/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { keyframes } from "@emotion/react"
import theme from "../gatsby-plugin-theme-ui/index"
import { navigate } from "gatsby"
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image"

const move = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-90%);
  }
`

interface MarqueeProps {
  slides: {
    company: string
    image: IGatsbyImageData
    slug: string
  }[]
  speed: number
}
const Marquee = ({ slides, speed }: MarqueeProps) => {
  return (
    <div
      sx={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bg: "#F7F7F7"
      }}
    >
      <ul
        sx={{
          p: 0,
          position: "relative",
          inset: "0",
          right: "0",
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          animation: `${move} ${speed}s linear infinite`,
          li: {
            mr: 6
          }
        }}
      >
        {slides.map(({ company, image, slug }, index) => (
          <li
            sx={{ cursor: "pointer" }}
            key={`${company}:${index}`}
            onClick={() => navigate(slug)}
          >
            <GatsbyImage
              image={getImage(image)}
              alt={`${company} logo`}
              loading="eager"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Marquee
