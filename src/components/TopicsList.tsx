/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Topic } from "helpers/topicType"
import TopicCard from "components/TopicCard"

interface TopicsListProps {
  topics: Topic[]
}
const TopicsList = ({ topics }: TopicsListProps) => {
  return (
    <ul
      sx={{
        p: 0,
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        gap: 3
      }}
    >
      {topics.map(({ name, thumbnail, slug }, index) => (
        <li key={`result:${index}`}>
          <TopicCard
            name={name}
            thumbnail={thumbnail.localFile.childImageSharp}
            slug={slug}
          />
        </li>
      ))}
    </ul>
  )
}

export default TopicsList
