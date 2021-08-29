/** @jsx jsx */
import { jsx, Container, Heading, Text } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Marquee from "../components/Marquee"
import { borderColor } from "styled-system"

const IndexPage = ({ data }) => {
  const marqueeSlides = [
    {
      text: "Bodycam Report",
      image: data.bodycam.childImageSharp,
      // color: "#122C4A",
      slug: "#"
    },
    {
      text: "Motus Agency",
      image: data.motus.childImageSharp,
      // color: "#122C4A",
      slug: "#"
    }
  ]

  return (
    <Layout>
      <main
        sx={{
          height: "2000px",
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
        <Container>
          <div
            sx={{
              width: "960px",
              height: "400px",
              m: "0 auto",
              p: 4,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              bg: "themeGreen",
              borderRadius: "4px",
              color: "white"
            }}
          >
            <StaticImage
              sx={{
                borderRadius: "50%",
                border: "6px solid",
                borderColor: "themePink"
              }}
              src="../images/ollie-payne-headshot.png"
              alt="ollie payne headshot"
              layout="fixed"
              width={200}
              height={200}
            />
            <div>
              <Heading sx={{ textDecoration: "underline" }} as="h5" variant="styles.h5">
                Connect with me
              </Heading>
              <Text as="p" variant="text.body">
                I love to sport climb, and build things.
              </Text>
              <Text as="p" variant="text.body">
                Ollie Payne
              </Text>
              <Text as="p" variant="text.body">
                Prescott, AZ
              </Text>
            </div>
          </div>
          <Heading as="h4" variant="styles.h4">
            Frontend Development for:
          </Heading>
          <Marquee slides={marqueeSlides} speed={10} />
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
    motus: file(relativePath: { eq: "companies/motus-logo.png" }) {
      childImageSharp {
        gatsbyImageData(height: 32, layout: FIXED)
      }
    }
  }
`
