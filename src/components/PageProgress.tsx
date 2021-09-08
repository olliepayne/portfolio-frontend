/** @jsx jsx */
import { jsx, Progress } from "theme-ui"
import * as React from "react"
import { useState } from "react"

interface ScrollProgressProps {
  contentTop: number
  contentBottom: number
}
const ScrollProgress = ({ contentTop, contentBottom }: ScrollProgressProps) => {
  const maxScrollDistance = contentBottom - contentTop

  // TODO: add debouncing
  const [scrollPos, setScrollPos] = useState(0)
  const updateProgress = () => {
    const currScrollY = window.scrollY
    if (currScrollY > contentTop) setScrollPos(currScrollY)
  }
  if (document) {
    document.addEventListener("scroll", updateProgress)
  }

  return (
    <Progress
      sx={{
        position: "fixed",
        top: "100px"
      }}
      value={(60 - (contentBottom - scrollPos)) / maxScrollDistance}
      max={contentBottom}
    />
  )
}

export default ScrollProgress
