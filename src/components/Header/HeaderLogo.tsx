/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import * as React from "react"
import { navigate } from "gatsby"

const HeaderLogo = () => {
  return (
    <div
      sx={{
        position: "relative",
        userSelect: "none",
        cursor: "pointer"
      }}
      onClick={() => navigate("/")}
    >
      <Heading
        sx={{
          p: "0px",
          color: "themePink"
        }}
        as="h2"
        variant="styles.h2"
      >
        Ollie Payne
      </Heading>
      <Heading
        sx={{
          position: "absolute",
          zIndex: "back",
          inset: "0%",
          bottom: "-40%",
          transform: "rotateZ(180deg)"
        }}
        as="h2"
        variant="styles.h2"
      >
        enyaP eillO
      </Heading>
    </div>
  )
}

export default HeaderLogo