/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Marquee from "../Marquee"

interface HomePortfolioSectionProps {
  marqueeSlides: {
    company: string
    image: IGatsbyImageData
    slug: string
  }[]
}
const HomePortfolioSection = ({ marqueeSlides }: HomePortfolioSectionProps) => {
  return (
    <section sx={{ py: 4 }}>
      <Container>
        <Heading as="h4" variant="styles.h4">
          Frontend Development for:
        </Heading>
        <Marquee slides={marqueeSlides} speed={15} />
      </Container>
    </section>
  )
}

export default HomePortfolioSection
