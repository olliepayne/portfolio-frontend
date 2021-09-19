/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"

import ArticleCard from "./ArticleCard"

import { Article } from "helpers/articleType"

interface ArticlesListProps {
  articles: Article[]
}
const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <ul
      sx={{
        padding: 0,
        listStyle: "none"
      }}
    >
      {articles.map((article: Article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  )
}

export default ArticlesList
