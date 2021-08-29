/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

interface FontAwesomeIconProps {
  iconClassName: string
  width: number
  height: number
  color: string
}
const FontAwesomeIcon = ({ iconClassName, width, height, color }: FontAwesomeIconProps) => {
  return (
    <span className={iconClassName}>
      <div sx={{
        width,
        height,
        color
      }}></div>
    </span>
  )
}

export default FontAwesomeIcon
