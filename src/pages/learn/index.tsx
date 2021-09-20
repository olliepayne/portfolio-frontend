/** @jsx jsx */
import { jsx, Container, Flex, Heading } from "theme-ui"
import * as React from "react"
import { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import PageProgress from "components/PageProgress"
import CodeSnippet from "components/CodeSnippet"
import ArticlesFilter from "components/ArticlesFilter"
import ArticlesList from "components/ArticlesList"

import { Category, Tag } from "helpers/filtersTypes"

const LearnPage = ({
  data: {
    allStrapiCategory: { categories },
    allStrapiArticle: { articles }
  }
}) => {
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const handleSearchTags = async () => {}

  const findArticles = async (appliedCategoryName: string) => {
    const query = `?category.name=${appliedCategoryName}`
    const res = await fetch(`http://localhost:1337/articles${query}`)
    const data = await res.json()

    setFilteredArticles(data)
  }

  return (
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
            <ArticlesFilter
              categories={categories}
              findArticles={findArticles}
            />
            <ArticlesList articles={filteredArticles} />
          </Flex>
        </Container>
      </main>
    </Layout>
  )
}

export default LearnPage

export const query = graphql`
  {
    allStrapiArticle(limit: 1) {
      articles: nodes {
        id
        slug
        name
        thumbnail {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      }
    }
    allStrapiCategory {
      categories: nodes {
        id
        name
      }
    }
    allStrapiTag(limit: 5) {
      tags: nodes {
        id
        name
      }
    }
  }
`
