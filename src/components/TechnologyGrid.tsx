/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Technology } from "helpers/technologyType"
import TechnologyCard from "components/TechnologyCard"

interface TechnologyGridProps {
  technologies: Technology[]
}
const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
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
      {technologies.map(({ name, logo, slug }, index) => (
        <li key={`result:${index}`}>
          <TechnologyCard name={name} logo={logo.localFile.childImageSharp} slug={slug} />
        </li>
      ))}
    </ul>
  )
}

export default TechnologyGrid
