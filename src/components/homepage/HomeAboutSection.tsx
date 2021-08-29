/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React from "react"
import HomeAboutCard from "./HomeAboutCard"

const HomeAboutSection = () => {
  return (
    <section sx={{ py: 4 }}>
      <HomeAboutCard />
    </section>
  )
}

export default HomeAboutSection
