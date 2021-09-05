/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import CodeSnippet from "components/CodeSnippet"
import TechnologyGrid from "components/TechnologyGrid"

const LearnPage = ({ data: { allStrapiTechnology: { technologies } } }) => {
  return (
    <Layout>
      <main
        sx={{
          pt: "60px",
          flex: "1 auto"
        }}
      >
        <section>
          <Flex sx={{
            flexDirection: "column",
            alignItems: "center"
          }}>
            <CodeSnippet text={`import * as React from "react"`} />
            <TechnologyGrid technologies={technologies} />
          </Flex>
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
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
