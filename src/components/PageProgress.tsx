/** @jsx jsx */
import { jsx, Progress } from "theme-ui"
import * as React from "react"
import { useState, useEffect } from "react"

const ScrollProgress = () => {
  const [maxScroll, setMaxScroll] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const updateProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    setScrollPercent(scrolled)
  }
  useEffect(() => {
    if (document) {
      document.addEventListener("scroll", updateProgress)
    }

    return () => {
      document.removeEventListener("scroll", updateProgress)
    }
  }, [])

  return (
    <Progress
      sx={{
        position: "fixed",
        top: "60px"
      }}
      variant="styles.articleProgress"
      value={scrollPercent}
    />
  )
}

export default ScrollProgress
