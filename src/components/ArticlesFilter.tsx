/** @jsx jsx */
import { jsx, Flex, Input } from "theme-ui"
import * as React from "react"
import { useState, useContext } from "react"

import { Category, Tag } from "helpers/filtersTypes"

interface FormData {
  search: string
  category: string
  tag: string
}

interface ArticlesFilterProps {
  categories?: Category[]
  tags?: Tag[]
  handleSearchTags?: () => void
  findArticles: (appliedCategoryName?: string) => void
}
const ArticlesFilter = ({ categories, tags, findArticles }: ArticlesFilterProps) => {
  const [searchData, setSearchData] = useState("")

  const deleteTag = () => {}

  // debouncing for search
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchData(value)
  }

  const handleApplyCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    findArticles(value)
  }

  return (
    <div>
      <ul></ul>
      <Flex
        sx={{
          flexDirection: "column"
        }}
      >
        <form>
          {categories && (
            <select onChange={handleApplyCategory}>
              {categories.map(({ id, name }) => (
                <option key={id}>{name}</option>
              ))}
            </select>
          )}
          <Input
            name="search"
            autoComplete="off"
            maxLength={20}
            onChange={handleChange}
          />
          <div>
            <ul>
              
            </ul>
          </div>
        </form>
      </Flex>
    </div>
  )
}

export default ArticlesFilter
