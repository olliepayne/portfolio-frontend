/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui"
import * as React from "react"
import { useReducer } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import PageProgress from "components/PageProgress"
import CodeSnippet from "components/CodeSnippet"
import TechnologyGrid from "components/TechnologyGrid"
import TopicsFilter from "components/TopicsFilter"

const topicsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TECHNOLOGY":
      break

    case "REMOVE_TECHNOLOGY":
      break
  }
}
export const LearnPageContext = React.createContext(null)

const LearnPage = ({
  data: {
    allStrapiTopic: { topics }
  }
}) => {
  const [state, dispatch] = useReducer(topicsReducer, {
    filteredTopics: topics,
    filters: []
  })
  const { filteredTopics } = state

  return (
    <LearnPageContext.Provider value={{ state, dispatch }}>
      <Layout>
        <main
          sx={{
            height: "1500px",
            pt: "60px",
            flex: "1 auto"
          }}
        >
          {/* <PageProgress /> */}
          <Container as="section">
            <Flex
              sx={{
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <TopicsFilter topics={filteredTopics} />
              {/* <TechnologyGrid technologies={filteredTechnologies} /> */}
            </Flex>
          </Container>
        </main>
      </Layout>
    </LearnPageContext.Provider>
  )
}

export default LearnPage

export const query = graphql`
  {
    allStrapiTopic {
      topics: nodes {
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
