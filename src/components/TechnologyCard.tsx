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
        <div
          sx={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "flex-end"
          }}
        >
          <GatsbyImage image={getImage(logo)} alt={`${name} logo`} />
        </div>
      )}
      <Heading
        sx={{
          pt: 1
        }}
        as="h5"
        variant="styles.h5"
      >
        {name}
      </Heading>
    </Card>
  )
}

export default TechnologyCard
