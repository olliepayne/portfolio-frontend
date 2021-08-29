/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Marquee from "../components/Marquee"

const IndexPage = ({ data }) => {
  const marqueeSlides = [
    {
      text: "Bodycam Report",
      image: data.bodycam.childImageSharp,
      // color: "#122C4A",
      slug: "#"
    }
  ]

  return (
    <Layout>
      <main
        sx={{
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
        <Container>
          <Marquee slides={marqueeSlides} />
        </Container>
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
  }
`