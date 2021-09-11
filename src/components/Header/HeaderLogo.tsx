/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import { navigate } from "gatsby"

const HeaderLogo = () => {
  return (
    <div
      sx={{
        cursor: "pointer"
      }}
      onClick={() => {
        navigate("/")
      }}
    >
      <Heading
        sx={{
          color: "black"
        }}
        as="h5"
        variant="styles.h5"
      >
        Ollie
      </Heading>
    </div>
  )
}

export default HeaderLogo
