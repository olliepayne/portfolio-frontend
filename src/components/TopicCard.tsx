/** @jsx jsx */
import { jsx, Card, Heading } from "theme-ui"
import * as React from "react"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Topic } from "helpers/topicType"

const TopicCard = ({ name, thumbnail, slug }: Topic) => {
  return (
    <Card variant="technology" onClick={() => navigate(slug)}>
      {thumbnail !== null && (
        <GatsbyImage
          sx={{
            width: "60px",
            height: "60px"
          }}
          image={getImage(thumbnail)}
          alt={`${name} thumbnail`}
        />
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

export default TopicCard
