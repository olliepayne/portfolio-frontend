/** @jsx jsx */

import { jsx, Container, Box, Card, Heading, Flex, Text } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "components/Common/Layout"

import { parseKebabDate } from "helpers/parseDate"

const LearnArticlePage = ({
  data: {
    strapiArticle: {
      name,
      author,
      datePublished,
      dateEdited,
      thumbnail: {
        localFile: { childImageSharp }
      },
      content
    }
  }
}) => {
  const { month, day, year } = parseKebabDate(
    dateEdited === datePublished ? datePublished : dateEdited,
    "SHORT"
  )

  return (
    <Layout>
      <main
        sx={{
          height: "1500px",
          // flex: "1 1"
        }}
      >
        <section>
          <Container variant="container1000">
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
                    px: 3,
                    color: "#999999"
                  }}
                  as="h5"
                  variant="styles.h5"
                >
                  <Text
                    sx={{
                      fontSize: 1
                    }}
                  >
                    {dateEdited !== datePublished && "(edited) "}
                  </Text>
                  {month} {day}, {year}
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
        </section>
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
      dateEdited
      thumbnail {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 600
              layout: FIXED
              placeholder: BLURRED
            )
          }
        }
      }
      content
    }
  }
`
