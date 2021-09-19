/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

import { Article } from "helpers/articleType"

interface ArticleCardProps {
  article: Article
}
const ArticleCard = ({ article: { name } }: ArticleCardProps) => {
  return (
    <div>
      <Heading as="h5" variant="styles.h5">
        {name}
      </Heading>
    </div>
  )
}

export default ArticleCard
