/** @jsx jsx */
import { jsx, Input } from "theme-ui"
import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

interface TechnologyFilterProps {
  names?: string[]
  categories?: string[]
  tags?: string[]
}
const TechnologyFilter = ({
  names,
  categories,
  tags
}: TechnologyFilterProps) => {
  return (
    <div>
      {names && (
        <div>
          <form></form>
        </div>
      )}
    </div>
  )
}

export default TechnologyFilter
