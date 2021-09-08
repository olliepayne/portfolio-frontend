/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"

const LearnArticlePage = ({ data: { strapiArticle } }) => {
  return (
    <Layout>
      <main
        sx={{
          height: "1500px",
          pt: "60px",
          flex: "1 auto"
        }}
      >
        <Heading as="h1" variant="styles.h1">
          {strapiArticle.name}
        </Heading>
      </main>
    </Layout>
  )
}

export default LearnArticlePage

export const query = graphql`
  query ($id: String) {
    strapiArticle(id: { eq: $id }) {
      name
    }
  }
`
