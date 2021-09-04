/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import * as React from "react"
import HomeAboutCard from "components/homepage/HomeAboutCard"

const HomeAboutSection = () => {
  return (
    <section sx={{ py: 4 }}>
      <HomeAboutCard />
    </section>
  )
}

export default HomeAboutSection
