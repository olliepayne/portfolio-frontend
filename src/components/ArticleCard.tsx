/** @jsx jsx */
import { jsx, Card, Flex, Heading } from "theme-ui"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Article } from "helpers/articleType"

interface ArticleCardProps {
  article: Article
}
const ArticleCard = ({
  article: { slug, name, thumbnail }
}: ArticleCardProps) => {
  return (
    <Card variant="articlePreview" onClick={() => navigate(slug)}>
      <GatsbyImage
        image={getImage(thumbnail.localFile.childImageSharp)}
        alt={`${name} Thumbnail`}
      />
      <Heading as="h5" variant="styles.h5">
        {name}
      </Heading>
    </Card>
  )
}

export default ArticleCard
