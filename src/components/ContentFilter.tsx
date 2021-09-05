/** @jsx jsx */
import { jsx, Input } from "theme-ui"
import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

interface ContentFilterProps {
  names?: string[]
  categories?: string[]
  tags?: string[]
}
const ContentFilter = ({ names, categories, tags }: ContentFilterProps) => {
  return (
    <div>
      {names && (
        <div>
          <form>

          </form>
        </div>
      )}
    </div>
  )
}

export default ContentFilter