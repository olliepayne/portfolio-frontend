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

import { Topic } from "helpers/topicType"

interface TopicsReducerState {
  filteredTopics: Topic[]
  appliedFilters: string[]
}
interface TopicsReducerAction {
  type: string,
  payload: any
}
const topicsReducer = (state: TopicsReducerState, action: TopicsReducerAction) => {
  switch (action.type) {
    case "ADD_FILTER":
      const newState = Object.assign({}, state)
      newState.appliedFilters.push(action.payload)
      
      state.filteredTopics.filter
      break

    case "REMOVE_FILTER":
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
    appliedFilters: []
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
      }
    }
  }
`
