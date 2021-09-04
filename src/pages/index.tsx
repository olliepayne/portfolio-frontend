/** @jsx jsx */
import { jsx, Container, Heading, Text } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import HomeAboutSection from "../components/homepage/HomeAboutSection"
import HomePortfolioSection from "../components/homepage/HomePortfolioSection"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main
        sx={{
          pt: "60px",
          flex: "1 auto"
        }}
      >
        <HomePortfolioSection />
        <HomeAboutSection />
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    bodycam: file(relativePath: { eq: "companies/bodycam-logo.png" }) {
      childImageSharp {
        gatsbyImageData(height: 32, layout: FIXED)
      }
    }
    motus: file(relativePath: { eq: "companies/motus-logo.png" }) {
      childImageSharp {
        gatsbyImageData(height: 32, layout: FIXED)
      }
    }
  }
`
