/** @jsx jsx */
import { jsx, Flex, Input } from "theme-ui"
import * as React from "react"

interface ArticlesFilterProps {}
const ArticlesFilter = () => {
  const deleteTag = () => {

  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <ul></ul>
      <Flex
        sx={{
          flexDirection: "column"
        }}
      >
        <form onSubmit={handleSubmit}>
          <Input name="tag" autoComplete="off" onChange={handleChange} />
        </form>
        <div>
          <ul>
            
          </ul>
        </div>
      </Flex>
    </div>
  )
}

export default ArticlesFilter
