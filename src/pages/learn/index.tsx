/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import TechnologyGrid from "components/TechnologyGrid"

const LearnPage = ({ data: { allStrapiTechnology: { technologies } } }) => {
  // console.log(technologies)

  return (
    <Layout>
      <main
        sx={{
          pt: "60px",
          flex: "1 auto"
        }}
      >
        <section>
          <Box
            sx={{
              width: "300px",
              height: "70px",
              py: 2,
              px: 3,
              bg: "codeSnippet"
            }}
          >
            <code
              sx={{
                fontSize: 1
              }}
            >
              import * as React from "react"
            </code>
          </Box>
          <TechnologyGrid technologies={technologies} />
        </section>
      </main>
    </Layout>
  )
}

export default LearnPage

export const query = graphql`
  {
    allStrapiTechnology {
      technologies: nodes {
        id
        name
        slug
        logo {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, layout: FIXED, height: 100)
            }
          }
        }
      }
    }
  }
`
