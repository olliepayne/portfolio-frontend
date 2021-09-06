/** @jsx jsx */
import { jsx, Progress } from "theme-ui"
import * as React from "react"
import { useState, useRef } from "react"

const PageProgress = () => {
  const progressRef = useRef(null)
  let progressStartPos: number = null

  const [scrollPos, setScrollPos] = useState(0)
  const updateProgress = () => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect()
      if (progressStartPos === null) progressStartPos = rect.top
      console.log(progressStartPos)
      // console.log(window.scrollY)
    }
  }
  if (document) {
    document.addEventListener("scroll", updateProgress)
  }

  return (
    <Progress ref={progressRef} />
  )
}

export default PageProgress