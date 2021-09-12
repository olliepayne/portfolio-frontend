/** @jsx jsx */
import { jsx, Container, Card, Heading, Flex } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "components/Layout"

const LearnArticlePage = ({
  data: {
    strapiArticle: {
      name,
      author,
      datePublished,
      thumbnail: {
        localFile: { childImageSharp }
      }
    }
  }
}) => {
  return (
    <Layout>
      <main
        sx={{
          height: "1500px",
          pt: "60px",
          flex: "1 auto"
        }}
      >
        <Container as="section">
          <Card variant="articleHero">
            <Heading as="h1" variant="styles.h1">
              {name}
            </Heading>
            <Flex sx={{ alignItems: "center" }}>
              <Heading
                sx={{
                  color: "#525252"
                }}
                as="h4"
                variant="styles.h4"
              >
                by {author}
              </Heading>
              <Heading
                sx={{
                  color: "#999999"
                }}
                as="h5"
                variant="styles.h5"
              >
                {datePublished}
              </Heading>
            </Flex>
          </Card>
          <GatsbyImage
            sx={{
              mt: 3,
              boxShadow: "articleHero"
            }}
            image={getImage(childImageSharp)}
            alt={`${name} thumbnail`}
          />
        </Container>
      </main>
    </Layout>
  )
}

export default LearnArticlePage

export const query = graphql`
  query ($id: String) {
    strapiArticle(id: { eq: $id }) {
      name
      author
      datePublished
      thumbnail {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 800, height: 600, layout: FIXED)
          }
        }
      }
    }
  }
`
