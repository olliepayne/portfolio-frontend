/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui"
import { IGatsbyImageData } from "gatsby-plugin-image"
import PortfolioGrid from "./PortfolioGrid"

const HomePortfolioSection = () => {
  return (
    <section sx={{ py: 4 }}>
      <Container>
        <Heading as="h4" variant="styles.h4">
          Frontend Development for:
        </Heading>
      </Container>
    </section>
  )
}

export default HomePortfolioSection
