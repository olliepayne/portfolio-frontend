/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

const HeaderLogo = () => {
  return (
    <div
      sx={{
        position: "relative",
        userSelect: "none"
      }}
    >
      <Heading
        sx={{
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
          bottom: "-41%",
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