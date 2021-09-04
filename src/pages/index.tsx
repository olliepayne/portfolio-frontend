/** @jsx jsx */
import { jsx, Container, Heading, Text } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "components/Layout"
import HomeAboutSection from "../components/homepage/HomeAboutSection"
import HomePortfolioSection from "../components/homepage/HomePortfolioSection"

const IndexPage = ({ data }) => {
  const marqueeSlides = [
    {
      company: "Bodycam Report",
      image: data.bodycam.childImageSharp,
      slug: "#"
    },
    {
      company: "Motus Agency",
      image: data.motus.childImageSharp,
      slug: "#"
    }
  ]

  return (
    <Layout>
      <main
        sx={{
          pt: "60px",
          flex: "1 auto"
        }}
      >
        {/* <div
          sx={{
            width: "500px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(123,83,183,1) 47%, rgba(252,70,107,1) 100%)",
            borderRadius: "4px"
          }}
        ></div> */}
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
