/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import { navigate } from "gatsby"

const HeaderLogo = () => {
  return (
    <div onClick={() => {
      navigate("/")
    }}>
      <Heading as="h5" variant="styles.h5">
        Ollie
      </Heading>
    </div>
  )
}

export default HeaderLogo