/** @jsx jsx */
import { jsx, Progress } from "theme-ui"
import * as React from "react"
import { useState } from "react"

interface ScrollProgressProps {
  contentTop: number
  contentBottom: number
}
const ScrollProgress = ({ contentTop, contentBottom }: ScrollProgressProps) => {
  const [scrollPos, setScrollPos] = useState(0)
  const updateProgress = () => {
    console.log(window.scrollY)
  }
  if (document) {
    document.addEventListener("scroll", updateProgress)
  }

  return <Progress />
}

export default ScrollProgress
