/** @jsx jsx */
import { jsx, Container, Flex, Heading } from "theme-ui"
import * as React from "react"
import { useReducer, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import PageProgress from "components/PageProgress"
import CodeSnippet from "components/CodeSnippet"
import ArticlesFilter from "components/learn/ArticlesFilter"

interface FiltersReducerState {
  category: string
  tags: string[]
}
interface FiltersReducerAction {
  type: string
  payload: string
}
const filtersReducer = (
  state: FiltersReducerState,
  action: FiltersReducerAction
) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      break

    case "ADD_TAG":
      break

    case "REMOVE_TAG":
      break

    default:
      return state
  }
}

const LearnPageContext = React.createContext(null)
const LearnPage = ({
  data: {
    allStrapiCategory: { categories },
    allStrapiArticle: { articles }
  }
}) => {
  const [state, dispatch] = useReducer(filtersReducer, {
    category: "",
    tags: []
  })

  const getArticles = async () => {
    const res = await fetch(
      `localhost:1337/articles?category=${state.category}`
    )
    const data = await res.json()
    console.log(data)
  }

  return (
    <LearnPageContext.Provider value={{ state, dispatch }}>
      <Layout>
        <main
          sx={{
            height: "1500px",
            pt: "124px",
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
              <Heading as="h3" variant="styles.h3">
                Articles
              </Heading>
              <ArticlesFilter />
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
    allStrapiArticle(
      limit: 1
      filter: { category: { name: { eq: "Learn" } } }
    ) {
      articles: nodes {
        id
      }
    }
  }
`
