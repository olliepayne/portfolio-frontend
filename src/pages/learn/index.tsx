/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui"
import * as React from "react"
import { useReducer } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import PageProgress from "components/PageProgress"
import CodeSnippet from "components/CodeSnippet"
import TopicsList from "components/TopicsList"
import TopicsFilter from "components/TopicsFilter"

import { Topic } from "helpers/topicType"

interface TopicsReducerState {
  originalTopics: Topic[]
  filteredTopics: Topic[]
  appliedFilters: string[]
}
interface TopicsReducerAction {
  type: string
  payload: any
}
const topicsReducer = (
  state: TopicsReducerState,
  { type, payload }: TopicsReducerAction
) => {
  switch (type) {
    case "ADD_FILTER":
      if (payload !== "") {
        const newState = Object.assign({}, state)
        newState.appliedFilters.push(payload)

        newState.filteredTopics = state.originalTopics.filter(
          ({ name }) => name === payload
        )

        return newState
      } else if (payload === "") {
        const newState = Object.assign({}, state)
        newState.filteredTopics = state.originalTopics

        return newState
      }

    case "REMOVE_FILTER":
      break

    default:
      return state
  }
}
export const LearnPageContext = React.createContext(null)

const LearnPage = ({
  data: {
    allStrapiTopic: { topics }
  }
}) => {
  const [{ filteredTopics }, dispatch] = useReducer(topicsReducer, {
    originalTopics: topics,
    filteredTopics: topics,
    appliedFilters: []
  })
  console.log(filteredTopics)

  return (
    <LearnPageContext.Provider value={{ filteredTopics, dispatch }}>
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
              <TopicsList topics={filteredTopics} />
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
        thumbnail {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
