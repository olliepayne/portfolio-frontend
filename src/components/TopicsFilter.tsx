/** @jsx jsx */
import { jsx, Input } from "theme-ui"
import * as React from "react"
import { useContext, useState } from "react"

import { LearnPageContext } from "pages/learn"
import { Topic } from "helpers/topicType"

interface TopicsFilterProps {
  topics: Topic[]
}
const TopicsFilter = ({ topics }: TopicsFilterProps) => {
  const { state, dispatch } = useContext(LearnPageContext)

  const [inputData, setInputData] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = e.target.value
    setInputData(newData)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: "ADD_FILTER", payload: inputData })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="name" autoComplete="off" onChange={handleChange} />
        <ul>
          {topics.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default TopicsFilter
