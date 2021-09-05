/** @jsx jsx */
import { jsx, Card, Heading } from "theme-ui"
import * as React from "react"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Technology } from "helpers/technologyType"

const TechnologyCard = ({ name, logo, slug }: Technology) => {
  return (
    <Card variant="technology" onClick={() => navigate(slug)}>
      {logo !== null && (
        <GatsbyImage image={getImage(logo)} alt={`${name} logo`} />
      )}
      <Heading as="h5" variant="styles.h5">
        {name}
      </Heading>
    </Card>
  )
}

export default TechnologyCard
